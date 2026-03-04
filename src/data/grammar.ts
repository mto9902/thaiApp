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
    breakdown: { thai: string; english: string }[];
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
        { thai: "ฉัน", english: "I (feminine/neutral)" },
        { thai: "ไม่", english: "not" },
        { thai: "กิน", english: "eat" },
        { thai: "เผ็ด", english: "spicy" },
      ],
    },
    focus: {
      particle: "ไม่ (mâi)",
      meaning: "Used before a verb or adjective to negate it.",
    },
  },
  {
    id: "present",
    title: "Present Tense",
    aiPrompt: "Create a Thai sentence describing a present or habitual action.",
    level: 1,
  },
  {
    id: "question-mai",
    title: "Yes/No Question using ไหม",
    aiPrompt:
      "Create a Thai yes or no question using the particle ไหม at the end of the sentence.",
    level: 1,
    explanation:
      "To ask a yes/no question in Thai, you simply add the question particle 'ไหม' (mǎi) to the end of a statement.",
    pattern: "STATEMENT + ไหม ?",
    example: {
      thai: "คุณสบายดีไหม",
      roman: "kun sà-baai dee mǎi",
      english: "Are you well?",
      breakdown: [
        { thai: "คุณ", english: "you" },
        { thai: "สบายดี", english: "well / fine" },
        { thai: "ไหม", english: "(question particle)" },
      ],
    },
    focus: {
      particle: "ไหม (mǎi)",
      meaning: "Placed at the end of a sentence to turn it into a question.",
    },
  },
  {
    id: "pen-identity",
    title: "Using เป็น (identity)",
    aiPrompt:
      "Create a Thai sentence using เป็น to express identity, role, or profession.",
    level: 1,
    explanation:
      "The verb 'เป็น' (pen) is used to express identity, such as a profession, role, or identity. It is equivalent to 'to be' in English when followed by a noun.",
    pattern: "SUBJECT + เป็น + NOUN",
    example: {
      thai: "เขาเป็นหมอ",
      roman: "kǎo bpen mǎor",
      english: "He is a doctor.",
      breakdown: [
        { thai: "เขา", english: "he/she" },
        { thai: "เป็น", english: "is/am/are (identity)" },
        { thai: "หมอ", english: "doctor" },
      ],
    },
    focus: {
      particle: "เป็น (pen)",
      meaning: "Used for roles, jobs, and identities. Do not use for locations or descriptions.",
    },
  },
  {
    id: "mee-possession",
    title: "Using มี (possession / there is)",
    aiPrompt:
      "Create a Thai sentence using มี to express possession or existence.",
    level: 1,
    explanation:
      "The word 'มี' (mee) is used to express both 'to have' (possession) and 'there is/are' (existence). The context usually makes it clear which one is meant.",
    pattern: "SUBJECT + มี + OBJECT",
    example: {
      thai: "ฉันมีแมวสามตัว",
      roman: "chǎn mee maew sǎam dtua",
      english: "I have three cats.",
      breakdown: [
        { thai: "ฉัน", english: "I" },
        { thai: "มี", english: "have" },
        { thai: "แมว", english: "cat" },
        { thai: "สาม", english: "three" },
        { thai: "ตัว", english: "(classifier)" },
      ],
    },
    focus: {
      particle: "มี (mee)",
      meaning: "Used for possession (I have) or existence (There is).",
    },
  },
  {
    id: "yoo-location",
    title: "Using อยู่ (location/state)",
    aiPrompt:
      "Create a Thai sentence using อยู่ to describe location or a current state.",
    level: 1,
    explanation:
      "The verb 'อยู่' (yòo) is used specifically for location. It tells you where someone or something is located. Do not confuse it with 'เป็น' which is for identity.",
    pattern: "SUBJECT + อยู่ + LOCATION",
    example: {
      thai: "เขาอยู่บ้าน",
      roman: "kǎo yòo bâan",
      english: "He is at home.",
      breakdown: [
        { thai: "เขา", english: "he" },
        { thai: "อยู่", english: "is (at)" },
        { thai: "บ้าน", english: "home" },
      ],
    },
    focus: {
      particle: "อยู่ (yòo)",
      meaning: "Used only for location or staying in a place.",
    },
  },
  {
    id: "gap-with",
    title: "Using กับ (with)",
    aiPrompt:
      "Create a Thai sentence using กับ to express doing something with someone.",
    level: 1,
    explanation:
      "The word 'กับ' (gàp) is used to say 'with' or 'and'. In a sentence, it connects a person to another person doing the same action.",
    pattern: "PERSON A + VERB + กับ + PERSON B",
    example: {
      thai: "ผมกินข้าวกับเพื่อน",
      roman: "phǒm gin kâao gàp phûean",
      english: "I eat rice with a friend.",
      breakdown: [
        { thai: "ผม", english: "I" },
        { thai: "กิน", english: "eat" },
        { thai: "ข้าว", english: "rice" },
        { thai: "กับ", english: "with" },
        { thai: "เพื่อน", english: "friend" },
      ],
    },
    focus: {
      particle: "กับ (gàp)",
      meaning: "Used to connect people or things, meaning 'with' or 'and'.",
    },
  },
  {
    id: "mak-degree",
    title: "Using มาก (very / degree)",
    aiPrompt:
      "Create a Thai sentence using มาก to intensify an adjective or verb.",
    level: 1,
    explanation:
      "To say something is 'very' or 'a lot', add the word 'มาก' (mâak) after the adjective or verb you want to intensify.",
    pattern: "ADJECTIVE / VERB + มาก",
    example: {
      thai: "อาหารอร่อยมาก",
      roman: "aa-hǎan a-ròi mâak",
      english: "The food is very delicious.",
      breakdown: [
        { thai: "อาหาร", english: "food" },
        { thai: "อร่อย", english: "delicious" },
        { thai: "มาก", english: "very" },
      ],
    },
    focus: {
      particle: "มาก (mâak)",
      meaning: "Always placed AFTER the word it modifies to mean 'very' or 'a lot'.",
    },
  },
  {
    id: "gamlang-progressive",
    title: "Using กำลัง (currently doing)",
    aiPrompt:
      "Create a Thai sentence using กำลัง before the verb to describe an action happening right now.",
    level: 1,
  },

  {
    id: "past-laew",
    title: "Past (แล้ว)",
    aiPrompt:
      "Create a Thai sentence using แล้ว to indicate a completed action in the past.",
    level: 2,
  },

  {
    id: "future-ja",
    title: "Future (จะ)",
    aiPrompt: "Create a Thai sentence using จะ to indicate a future action.",
    level: 2,
  },

  {
    id: "ability-dai",
    title: "Ability (ได้)",
    aiPrompt:
      "Create a Thai sentence using ได้ to express ability or possibility.",
    level: 2,
  },

  {
    id: "obligation-tong",
    title: "Obligation (ต้อง)",
    aiPrompt:
      "Create a Thai sentence using ต้อง to express obligation or necessity.",
    level: 2,
  },

  {
    id: "experience-koei",
    title: "Experience (เคย)",
    aiPrompt: "Create a Thai sentence using เคย to talk about past experience.",
    level: 2,
  },

  {
    id: "still-yang",
    title: "Still / Yet (ยัง)",
    aiPrompt:
      "Create a Thai sentence using ยัง to express 'still' or 'not yet'.",
    level: 2,
  },

  {
    id: "already-laew",
    title: "Already (แล้ว placement)",
    aiPrompt:
      "Create a Thai sentence using แล้ว to indicate that something has already happened.",
    level: 2,
  },

  {
    id: "softening-na",
    title: "Softening particle (นะ)",
    aiPrompt:
      "Create a conversational Thai sentence using the softening particle นะ.",
    level: 2,
  },

  {
    id: "suggestion-si",
    title: "Suggestion (สิ)",
    aiPrompt:
      "Create a Thai sentence using the particle สิ to make a suggestion or encouragement.",
    level: 2,
  },

  {
    id: "polite-particles",
    title: "Polite particles (ครับ / ค่ะ)",
    aiPrompt: "Create a polite Thai sentence using ครับ or ค่ะ appropriately.",
    level: 2,
  },

  {
    id: "comparison-gwaa",
    title: "Comparison (กว่า)",
    aiPrompt:
      "Create a Thai sentence comparing two things using กว่า (more than / -er).",
    level: 3,
  },

  {
    id: "superlative-sut",
    title: "Superlative (ที่สุด)",
    aiPrompt:
      "Create a Thai sentence using ที่สุด to express the superlative (the most).",
    level: 3,
  },

  {
    id: "reason-phro",
    title: "Reason (เพราะ)",
    aiPrompt:
      "Create a Thai sentence using เพราะ to explain a reason or cause.",
    level: 3,
  },

  {
    id: "result-phro-jung",
    title: "Cause and result (เพราะ…จึง…)",
    aiPrompt:
      "Create a Thai sentence using เพราะ…จึง… to express cause and result.",
    level: 3,
  },

  {
    id: "sequence-laew",
    title: "Sequential actions (แล้ว)",
    aiPrompt:
      "Create a Thai sentence describing two actions in sequence using แล้ว.",
    level: 3,
  },

  {
    id: "invitation-duai-kan",
    title: "Invitation (ด้วยกัน)",
    aiPrompt:
      "Create a Thai sentence inviting someone to do something together using ด้วยกัน.",
    level: 3,
  },

  {
    id: "want-yaak",
    title: "Want to (อยาก)",
    aiPrompt:
      "Create a Thai sentence using อยาก to express wanting to do something.",
    level: 3,
  },

  {
    id: "trying-long",
    title: "Trying something (ลอง)",
    aiPrompt: "Create a Thai sentence using ลอง to suggest trying something.",
    level: 3,
  },

  {
    id: "time-before",
    title: "Before doing something (ก่อน)",
    aiPrompt:
      "Create a Thai sentence using ก่อน to describe doing something before another action.",
    level: 3,
  },

  {
    id: "time-after",
    title: "After doing something (หลังจาก)",
    aiPrompt:
      "Create a Thai sentence using หลังจาก to describe doing something after another action.",
    level: 3,
  },

  {
    id: "classifiers-general",
    title: "Classifiers (ตัว / คน / อัน / เล่ม)",
    aiPrompt:
      "Create a Thai sentence using a classifier such as ตัว, คน, อัน, or เล่ม when counting objects.",
    level: 4,
  },

  {
    id: "relative-clause-tee",
    title: "Relative clause (ที่)",
    aiPrompt:
      "Create a Thai sentence using ที่ to describe a noun with additional information (relative clause).",
    level: 4,
  },

  {
    id: "passive-thuuk",
    title: "Passive voice (ถูก)",
    aiPrompt: "Create a Thai sentence using ถูก to express passive voice.",
    level: 4,
  },

  {
    id: "permission-hai",
    title: "Permission (ให้)",
    aiPrompt:
      "Create a Thai sentence using ให้ to allow or permit someone to do something.",
    level: 4,
  },

  {
    id: "ability-saamart",
    title: "Ability (สามารถ)",
    aiPrompt:
      "Create a Thai sentence using สามารถ to express ability or capability.",
    level: 4,
  },

  {
    id: "quantity-bang",
    title: "Some / certain (บาง)",
    aiPrompt:
      "Create a Thai sentence using บาง to describe 'some' or 'certain' people or things.",
    level: 4,
  },

  {
    id: "each-every-thuk",
    title: "Every (ทุก)",
    aiPrompt:
      "Create a Thai sentence using ทุก to describe something that happens every time or every day.",
    level: 4,
  },

  {
    id: "many-lai",
    title: "Many (หลาย)",
    aiPrompt:
      "Create a Thai sentence using หลาย to describe many things or people.",
    level: 4,
  },

  {
    id: "because-of-phrasa",
    title: "Because of (เพราะว่า)",
    aiPrompt: "Create a Thai sentence using เพราะว่า to explain a reason.",
    level: 4,
  },

  {
    id: "therefore-dangnan",
    title: "Therefore (ดังนั้น)",
    aiPrompt:
      "Create a Thai sentence using ดังนั้น to express a result or conclusion.",
    level: 4,
  },

  {
    id: "if-tha",
    title: "If (ถ้า)",
    aiPrompt: "Create a Thai sentence using ถ้า to express a condition (if).",
    level: 5,
  },

  {
    id: "if-then-tha-ko",
    title: "If... then (ถ้า...ก็...)",
    aiPrompt:
      "Create a Thai sentence using ถ้า...ก็... to express a conditional result.",
    level: 5,
  },

  {
    id: "although-tae-wa",
    title: "Although (แต่ว่า)",
    aiPrompt: "Create a Thai sentence using แต่ว่า to express contrast.",
    level: 5,
  },

  {
    id: "even-if",
    title: "Even if (ถึงแม้ว่า)",
    aiPrompt:
      "Create a Thai sentence using ถึงแม้ว่า to express 'even though' or 'although'.",
    level: 5,
  },

  {
    id: "in-order-to",
    title: "In order to (เพื่อ)",
    aiPrompt: "Create a Thai sentence using เพื่อ to express purpose.",
    level: 5,
  },

  {
    id: "instead-of",
    title: "Instead of (แทนที่จะ)",
    aiPrompt:
      "Create a Thai sentence using แทนที่จะ to express doing one thing instead of another.",
    level: 5,
  },

  {
    id: "while-doing",
    title: "While doing something (ระหว่าง)",
    aiPrompt:
      "Create a Thai sentence using ระหว่าง to describe something happening during another action.",
    level: 5,
  },

  {
    id: "more-and-more",
    title: "More and more (มากขึ้น)",
    aiPrompt:
      "Create a Thai sentence using มากขึ้น to express something increasing.",
    level: 5,
  },

  {
    id: "almost",
    title: "Almost (เกือบ)",
    aiPrompt: "Create a Thai sentence using เกือบ to express 'almost'.",
    level: 5,
  },

  {
    id: "probably",
    title: "Probably (น่าจะ)",
    aiPrompt:
      "Create a Thai sentence using น่าจะ to express probability or assumption.",
    level: 5,
  },
];
