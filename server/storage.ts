import { cards, type Card, type InsertCard } from "@shared/schema";

export interface IStorage {
  getCards(): Promise<Card[]>;
}

export class MemStorage implements IStorage {
  private cards: Card[];

  constructor() {
    this.cards = [];
  }

  async getCards(): Promise<Card[]> {
    return this.cards;
  }
}

export const storage = new MemStorage();
