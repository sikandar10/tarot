export interface TarotCard {
  id: number;
  name: string;
  suit: string;
  description: string;
  number?: number;
}

export const MAJOR_ARCANA: TarotCard[] = [
  { id: 0, name: "The Fool", suit: "Major Arcana", description: "New beginnings, innocence, spontaneity", number: 0 },
  { id: 1, name: "The Magician", suit: "Major Arcana", description: "Manifestation, resourcefulness, power", number: 1 },
  { id: 2, name: "The High Priestess", suit: "Major Arcana", description: "Intuition, mystery, inner knowledge", number: 2 },
  { id: 3, name: "The Empress", suit: "Major Arcana", description: "Fertility, nurturing, abundance", number: 3 },
  { id: 4, name: "The Emperor", suit: "Major Arcana", description: "Authority, structure, control", number: 4 },
  { id: 5, name: "The Hierophant", suit: "Major Arcana", description: "Tradition, conformity, belief systems", number: 5 },
  { id: 6, name: "The Lovers", suit: "Major Arcana", description: "Love, harmony, relationships, choices", number: 6 },
  { id: 7, name: "The Chariot", suit: "Major Arcana", description: "Direction, control, willpower", number: 7 },
  { id: 8, name: "Strength", suit: "Major Arcana", description: "Inner strength, patience, compassion", number: 8 },
  { id: 9, name: "The Hermit", suit: "Major Arcana", description: "Introspection, searching, guidance", number: 9 },
  { id: 10, name: "Wheel of Fortune", suit: "Major Arcana", description: "Change, cycles, fate", number: 10 },
  { id: 11, name: "Justice", suit: "Major Arcana", description: "Justice, fairness, truth", number: 11 },
  { id: 12, name: "The Hanged Man", suit: "Major Arcana", description: "Surrender, letting go, sacrifice", number: 12 },
  { id: 13, name: "Death", suit: "Major Arcana", description: "Endings, change, transformation", number: 13 },
  { id: 14, name: "Temperance", suit: "Major Arcana", description: "Balance, moderation, patience", number: 14 },
  { id: 15, name: "The Devil", suit: "Major Arcana", description: "Bondage, materialism, ignorance", number: 15 },
  { id: 16, name: "The Tower", suit: "Major Arcana", description: "Sudden change, upheaval, revelation", number: 16 },
  { id: 17, name: "The Star", suit: "Major Arcana", description: "Hope, inspiration, generosity", number: 17 },
  { id: 18, name: "The Moon", suit: "Major Arcana", description: "Illusion, fear, anxiety", number: 18 },
  { id: 19, name: "The Sun", suit: "Major Arcana", description: "Success, joy, celebration", number: 19 },
  { id: 20, name: "Judgement", suit: "Major Arcana", description: "Rebirth, inner calling, absolution", number: 20 },
  { id: 21, name: "The World", suit: "Major Arcana", description: "Completion, integration, accomplishment", number: 21 }
];

export const MINOR_ARCANA: TarotCard[] = [
  // Wands (Fire)
  ...Array.from({ length: 14 }, (_, i) => ({
    id: 22 + i,
    name: `${i === 0 ? 'Ace' : i === 10 ? 'Page' : i === 11 ? 'Knight' : i === 12 ? 'Queen' : i === 13 ? 'King' : i + 1} of Wands`,
    suit: "Wands",
    description: "Creativity, ambition, determination",
    ...(i < 10 && { number: i + 1 })
  })),
  // Cups (Water)
  ...Array.from({ length: 14 }, (_, i) => ({
    id: 36 + i,
    name: `${i === 0 ? 'Ace' : i === 10 ? 'Page' : i === 11 ? 'Knight' : i === 12 ? 'Queen' : i === 13 ? 'King' : i + 1} of Cups`,
    suit: "Cups",
    description: "Emotions, intuition, relationships",
    ...(i < 10 && { number: i + 1 })
  })),
  // Swords (Air)
  ...Array.from({ length: 14 }, (_, i) => ({
    id: 50 + i,
    name: `${i === 0 ? 'Ace' : i === 10 ? 'Page' : i === 11 ? 'Knight' : i === 12 ? 'Queen' : i === 13 ? 'King' : i + 1} of Swords`,
    suit: "Swords",
    description: "Intellect, communication, truth",
    ...(i < 10 && { number: i + 1 })
  })),
  // Pentacles (Earth)
  ...Array.from({ length: 14 }, (_, i) => ({
    id: 64 + i,
    name: `${i === 0 ? 'Ace' : i === 10 ? 'Page' : i === 11 ? 'Knight' : i === 12 ? 'Queen' : i === 13 ? 'King' : i + 1} of Pentacles`,
    suit: "Pentacles",
    description: "Material aspects, work, prosperity",
    ...(i < 10 && { number: i + 1 })
  }))
];

export const ALL_CARDS = [...MAJOR_ARCANA, ...MINOR_ARCANA];

export function shuffleCards(cards: TarotCard[]): TarotCard[] {
  const newCards = [...cards];
  for (let i = newCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
  }
  return newCards;
}