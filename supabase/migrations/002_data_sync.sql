-- Faz 2C: Data Sync için gerekli veritabanı güncellemeleri
-- Bu SQL'i Supabase Dashboard → SQL Editor'de çalıştır

-- 1. card_progress tablosuna unique constraint ekle (upsert için gerekli)
ALTER TABLE card_progress
  DROP CONSTRAINT IF EXISTS card_progress_user_card_unique;
ALTER TABLE card_progress
  ADD CONSTRAINT card_progress_user_card_unique UNIQUE (user_id, card_id);

-- 2. daily_stats tablosuna unique constraint ekle
ALTER TABLE daily_stats
  DROP CONSTRAINT IF EXISTS daily_stats_user_date_unique;
ALTER TABLE daily_stats
  ADD CONSTRAINT daily_stats_user_date_unique UNIQUE (user_id, date);

-- 3. Günlük istatistik upsert fonksiyonu
CREATE OR REPLACE FUNCTION upsert_daily_stats(
  p_user_id UUID,
  p_date DATE,
  p_xp INTEGER,
  p_cards INTEGER,
  p_correct INTEGER,
  p_total INTEGER,
  p_seconds INTEGER DEFAULT 0
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO daily_stats (user_id, date, xp_earned, cards_studied, correct_count, total_count, study_time_seconds)
  VALUES (p_user_id, p_date, p_xp, p_cards, p_correct, p_total, p_seconds)
  ON CONFLICT (user_id, date)
  DO UPDATE SET
    xp_earned = GREATEST(daily_stats.xp_earned, EXCLUDED.xp_earned),
    cards_studied = GREATEST(daily_stats.cards_studied, EXCLUDED.cards_studied),
    correct_count = GREATEST(daily_stats.correct_count, EXCLUDED.correct_count),
    total_count = GREATEST(daily_stats.total_count, EXCLUDED.total_count),
    study_time_seconds = GREATEST(daily_stats.study_time_seconds, EXCLUDED.study_time_seconds);
END;
$$;

-- 4. Streak güncelleme fonksiyonu
CREATE OR REPLACE FUNCTION update_streak(
  p_user_id UUID,
  p_current INTEGER,
  p_longest INTEGER
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO streaks (user_id, current_streak, longest_streak, last_active_date)
  VALUES (p_user_id, p_current, GREATEST(p_current, p_longest), CURRENT_DATE)
  ON CONFLICT (user_id)
  DO UPDATE SET
    current_streak = GREATEST(streaks.current_streak, EXCLUDED.current_streak),
    longest_streak = GREATEST(streaks.longest_streak, EXCLUDED.longest_streak),
    last_active_date = CURRENT_DATE,
    updated_at = NOW();
END;
$$;

-- 5. streaks tablosuna unique constraint ekle
ALTER TABLE streaks
  DROP CONSTRAINT IF EXISTS streaks_user_unique;
ALTER TABLE streaks
  ADD CONSTRAINT streaks_user_unique UNIQUE (user_id);
