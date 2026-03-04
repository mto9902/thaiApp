export interface WordBreakdown {
  thai: string;
  english: string;
  grammar?: boolean;
}

export interface GrammarPoint {
  id: string;
  title: string;
  aiPrompt: string;
  level: number;
  explanation?: string;
  pattern?: string;
  example?: {
    thai: string;
    roman: string;
    english: string;
    breakdown: WordBreakdown[];
  };
  focus?: {
    particle: string;
    meaning: string;
  };
}

export const grammarPoints: GrammarPoint[] = [
  {
    id: "svo",
    title: "Basic Sentence Order (SVO)",
    aiPrompt:
      "Create a simple Thai sentence using the basic Subject Verb Object structure.",
    level: 1,
    explanation:
      "Thai follows the Subject-Verb-Object (SVO) order, similar to English. This is the foundation of most basic Thai sentences.",
    pattern: "SUBJECT + VERB + OBJECT",
    example: {
      thai: "ผมกินข้าว",
      roman: "phǒm gin kâao",
      english: "I eat rice.",
      breakdown: [
        { thai: "ผม", english: "I (masculine)" },
        { thai: "กิน", english: "eat" },
        { thai: "ข้าว", english: "rice" },
      ],
    },
    focus: {
      particle: "SVO Order",
      meaning: "The basic way to structure a sentence in Thai.",
    },
  },
  {
    id: "negative-mai",
    title: "Negation using ไม่",
    aiPrompt:
      "Create a Thai sentence using ไม่ before the verb to negate the action.",
    level: 1,
    explanation:
      "To make a sentence negative in Thai, you simply place the word 'ไม่' (mâi) before the verb.",
    pattern: "SUBJECT + ไม่ + VERB",
    example: {
      thai: "ฉันไม่กินเผ็ด",
      roman: "chǎn mâi gin phèt",
      english: "I don't eat spicy (food).",
      breakdown: [
        { thai: "ฉัน", english: "I" },
        { thai: "ไม่", english: "not", grammar: true },
        { thai: "กิน", english: "eat" },
        { thai: "เผ็ด", english: "spicy" },
      ],
    },
    focus: {
      particle: "ไม่ (mâi)",
      meaning: "Used before a verb or adjective to negate it.",
    },
  },
];
