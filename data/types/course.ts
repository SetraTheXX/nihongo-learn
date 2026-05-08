export type LessonType = "flashcard" | "quiz" | "matching" | "reading" | "checkpoint" | "grammar";

export interface SlideContent {
  title: string;
  content: string;
  emoji?: string;
}

export interface VocabItem {
  japanese: string;
  romaji: string;
  meaning_tr: string;
  emoji?: string;
  audio?: string;
}

export interface ReadingContent {
  title: string;
  japanese: string;
  romaji: string;
  translation: string;
  questions: {
    question: string;
    options: string[];
    correctIndex: number;
  }[];
}

export interface GrammarItem {
  id: string;
  sentence: string;      
  romaji: string;        
  translation: string;   
  explanation: string;   
  breakdown: {           
    word: string;
    romaji: string;
    meaning: string;
    isParticle?: boolean; 
  }[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  icon: string;           
  type: LessonType;
  cardIds?: string[];     
  vocabItems?: VocabItem[];  
  grammarItems?: GrammarItem[]; 
  readingContent?: ReadingContent; 
  slides?: SlideContent[]; 
  xpReward: number;
}

export interface Section {
  id: string;
  title: string;
  description: string;
  emoji: string;
  color: string;          
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  level: string;
  levelLabel: string;
  sections: Section[];
}
