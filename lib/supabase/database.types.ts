/**
 * Supabase Database TypeScript tipleri.
 * Tüm tablo, kolon ve RLS ilişkileri burada tanımlanır.
 *
 * İleride `supabase gen types typescript` komutuyla otomatik güncellenebilir.
 */
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      /** Kullanıcı profili — auth.users ile 1:1 ilişki */
      profiles: {
        Row: {
          id: string;
          display_name: string | null;
          avatar_url: string | null;
          preferred_language: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          display_name?: string | null;
          avatar_url?: string | null;
          preferred_language?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          display_name?: string | null;
          avatar_url?: string | null;
          preferred_language?: string;
          updated_at?: string;
        };
      };

      /** SM-2 kart ilerleme verisi */
      card_progress: {
        Row: {
          id: string;
          user_id: string;
          card_id: string;
          card_type: "hiragana" | "katakana" | "kanji" | "vocabulary";
          ease_factor: number;
          interval: number;
          repetitions: number;
          next_review: string;
          last_answer: "again" | "good" | "easy";
          last_reviewed_at: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          card_id: string;
          card_type?: "hiragana" | "katakana" | "kanji" | "vocabulary";
          ease_factor?: number;
          interval?: number;
          repetitions?: number;
          next_review?: string;
          last_answer?: "again" | "good" | "easy";
          last_reviewed_at?: string;
          created_at?: string;
        };
        Update: {
          ease_factor?: number;
          interval?: number;
          repetitions?: number;
          next_review?: string;
          last_answer?: "again" | "good" | "easy";
          last_reviewed_at?: string;
        };
      };

      /** Günlük istatistikler */
      daily_stats: {
        Row: {
          id: string;
          user_id: string;
          date: string;
          xp_earned: number;
          cards_studied: number;
          correct_count: number;
          total_count: number;
          study_time_seconds: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          date?: string;
          xp_earned?: number;
          cards_studied?: number;
          correct_count?: number;
          total_count?: number;
          study_time_seconds?: number;
          created_at?: string;
        };
        Update: {
          xp_earned?: number;
          cards_studied?: number;
          correct_count?: number;
          total_count?: number;
          study_time_seconds?: number;
        };
      };

      /** Kullanıcı seri (streak) verisi */
      streaks: {
        Row: {
          id: string;
          user_id: string;
          current_streak: number;
          longest_streak: number;
          last_active_date: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          current_streak?: number;
          longest_streak?: number;
          last_active_date?: string;
          updated_at?: string;
        };
        Update: {
          current_streak?: number;
          longest_streak?: number;
          last_active_date?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      card_type: "hiragana" | "katakana" | "kanji" | "vocabulary";
      answer_quality: "again" | "good" | "easy";
    };
  };
}
