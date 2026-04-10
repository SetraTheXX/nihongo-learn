export type CardType = "hiragana" | "katakana" | "kanji" | "word";

export interface WordExample {
  japanese: string;
  romaji: string;
  meaning_tr: string;
  emoji?: string;
  image_path?: string | null;
}

export interface FlashcardData {
  id: string;
  character: string;
  romaji: string;
  type: CardType;
  group: string;
  meaning_tr?: string | null;
  image_path?: string | null;
  word_example?: WordExample | null;
  audio_path?: string | null;
  stroke_order_svg?: string | null;
  difficulty: number;
}
