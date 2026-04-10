-- ═══════════════════════════════════════════════════════════════
-- Nihongo Learn — Veritabanı Şeması (v1)
-- ═══════════════════════════════════════════════════════════════
-- Bu dosyayı Supabase Dashboard → SQL Editor'de çalıştır.
-- Tüm tablolar, indeksler ve RLS politikaları burada.
-- ═══════════════════════════════════════════════════════════════

-- ─── 1. PROFILES ─────────────────────────────────────────────
-- auth.users ile 1:1 ilişki. Kayıt olunca otomatik oluşur.
-- ────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  avatar_url TEXT,
  preferred_language TEXT NOT NULL DEFAULT 'tr',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Yeni kullanıcı kayıt olunca otomatik profil oluştur
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name, avatar_url)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', NEW.raw_user_meta_data ->> 'name', 'Öğrenci'),
    COALESCE(NEW.raw_user_meta_data ->> 'avatar_url', NULL)
  );
  RETURN NEW;
END;
$$;

-- Trigger: auth.users insert → profiles insert
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Kullanıcı kendi profilini görebilir"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Kullanıcı kendi profilini güncelleyebilir"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);


-- ─── 2. CARD_PROGRESS ───────────────────────────────────────
-- Her kullanıcının her kart için SM-2 tekrar verileri.
-- ────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.card_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  card_id TEXT NOT NULL,
  card_type TEXT NOT NULL DEFAULT 'hiragana'
    CHECK (card_type IN ('hiragana', 'katakana', 'kanji', 'vocabulary')),
  ease_factor REAL NOT NULL DEFAULT 2.5,
  interval INTEGER NOT NULL DEFAULT 0,
  repetitions INTEGER NOT NULL DEFAULT 0,
  next_review TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_answer TEXT NOT NULL DEFAULT 'good'
    CHECK (last_answer IN ('again', 'good', 'easy')),
  last_reviewed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Aynı kullanıcı aynı kartı iki kere ekleyemesin
  UNIQUE (user_id, card_id, card_type)
);

-- Hızlı sorgu indeksleri
CREATE INDEX IF NOT EXISTS idx_card_progress_user
  ON public.card_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_card_progress_next_review
  ON public.card_progress(user_id, next_review);

-- RLS
ALTER TABLE public.card_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Kullanıcı kendi kart verilerini görebilir"
  ON public.card_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Kullanıcı kendi kart verilerini ekleyebilir"
  ON public.card_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Kullanıcı kendi kart verilerini güncelleyebilir"
  ON public.card_progress FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Kullanıcı kendi kart verilerini silebilir"
  ON public.card_progress FOR DELETE
  USING (auth.uid() = user_id);


-- ─── 3. DAILY_STATS ─────────────────────────────────────────
-- Günlük çalışma istatistikleri.
-- ────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.daily_stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  xp_earned INTEGER NOT NULL DEFAULT 0,
  cards_studied INTEGER NOT NULL DEFAULT 0,
  correct_count INTEGER NOT NULL DEFAULT 0,
  total_count INTEGER NOT NULL DEFAULT 0,
  study_time_seconds INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Her kullanıcı için günde tek satır
  UNIQUE (user_id, date)
);

CREATE INDEX IF NOT EXISTS idx_daily_stats_user_date
  ON public.daily_stats(user_id, date DESC);

-- RLS
ALTER TABLE public.daily_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Kullanıcı kendi istatistiklerini görebilir"
  ON public.daily_stats FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Kullanıcı kendi istatistiklerini ekleyebilir"
  ON public.daily_stats FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Kullanıcı kendi istatistiklerini güncelleyebilir"
  ON public.daily_stats FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);


-- ─── 4. STREAKS ──────────────────────────────────────────────
-- Günlük giriş serisi takibi.
-- ────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.streaks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  current_streak INTEGER NOT NULL DEFAULT 0,
  longest_streak INTEGER NOT NULL DEFAULT 0,
  last_active_date DATE NOT NULL DEFAULT CURRENT_DATE,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Her kullanıcı için tek streak kaydı
  UNIQUE (user_id)
);

CREATE INDEX IF NOT EXISTS idx_streaks_user
  ON public.streaks(user_id);

-- RLS
ALTER TABLE public.streaks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Kullanıcı kendi serisini görebilir"
  ON public.streaks FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Kullanıcı kendi serisini ekleyebilir"
  ON public.streaks FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Kullanıcı kendi serisini güncelleyebilir"
  ON public.streaks FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);


-- ═══════════════════════════════════════════════════════════════
-- UPSERT Helper: Günlük stat'ı güncelle (varsa artır, yoksa oluştur)
-- Kullanım: SELECT public.upsert_daily_stats(user_uuid, 10, 5, 3, 5, 120);
-- ═══════════════════════════════════════════════════════════════
CREATE OR REPLACE FUNCTION public.upsert_daily_stats(
  p_user_id UUID,
  p_xp INTEGER,
  p_cards INTEGER,
  p_correct INTEGER,
  p_total INTEGER,
  p_seconds INTEGER DEFAULT 0
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO public.daily_stats (user_id, date, xp_earned, cards_studied, correct_count, total_count, study_time_seconds)
  VALUES (p_user_id, CURRENT_DATE, p_xp, p_cards, p_correct, p_total, p_seconds)
  ON CONFLICT (user_id, date)
  DO UPDATE SET
    xp_earned = daily_stats.xp_earned + EXCLUDED.xp_earned,
    cards_studied = daily_stats.cards_studied + EXCLUDED.cards_studied,
    correct_count = daily_stats.correct_count + EXCLUDED.correct_count,
    total_count = daily_stats.total_count + EXCLUDED.total_count,
    study_time_seconds = daily_stats.study_time_seconds + EXCLUDED.study_time_seconds;
END;
$$;


-- ═══════════════════════════════════════════════════════════════
-- STREAK Helper: Seriyi güncelle
-- Kullanım: SELECT public.update_streak(user_uuid);
-- ═══════════════════════════════════════════════════════════════
CREATE OR REPLACE FUNCTION public.update_streak(p_user_id UUID)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_last_date DATE;
  v_current INTEGER;
  v_longest INTEGER;
BEGIN
  -- Mevcut streak verisini al
  SELECT last_active_date, current_streak, longest_streak
  INTO v_last_date, v_current, v_longest
  FROM public.streaks
  WHERE user_id = p_user_id;

  -- Kayıt yoksa oluştur
  IF NOT FOUND THEN
    INSERT INTO public.streaks (user_id, current_streak, longest_streak, last_active_date)
    VALUES (p_user_id, 1, 1, CURRENT_DATE);
    RETURN;
  END IF;

  -- Bugün zaten işlendiyse çık
  IF v_last_date = CURRENT_DATE THEN
    RETURN;
  END IF;

  -- Dün mü yoksa daha eski mi?
  IF v_last_date = CURRENT_DATE - INTERVAL '1 day' THEN
    -- Seri devam ediyor
    v_current := v_current + 1;
  ELSE
    -- Seri koptu, sıfırdan başla
    v_current := 1;
  END IF;

  -- En uzun seriyi güncelle
  IF v_current > v_longest THEN
    v_longest := v_current;
  END IF;

  UPDATE public.streaks
  SET current_streak = v_current,
      longest_streak = v_longest,
      last_active_date = CURRENT_DATE,
      updated_at = NOW()
  WHERE user_id = p_user_id;
END;
$$;


-- ═══════════════════════════════════════════════════════════════
-- 🎉 Tamamlandı! Tüm tablolar, indeksler, RLS politikaları ve
-- helper fonksiyonlar hazır.
-- ═══════════════════════════════════════════════════════════════
