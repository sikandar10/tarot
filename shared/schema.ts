import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const cards = pgTable("cards", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  suit: text("suit").notNull(),
  description: text("description").notNull(),
  number: integer("number"),
});

export const insertCardSchema = createInsertSchema(cards).omit({ id: true });

export type InsertCard = z.infer<typeof insertCardSchema>;
export type Card = typeof cards.$inferSelect;
