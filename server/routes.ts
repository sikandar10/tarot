import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export function registerRoutes(app: Express): Server {
  app.get("/api/cards", async (_req, res) => {
    const cards = await storage.getCards();
    res.json(cards);
  });

  const httpServer = createServer(app);
  return httpServer;
}
