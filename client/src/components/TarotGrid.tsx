import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TarotCard } from "./TarotCard";
import { Button } from "@/components/ui/button";
import type { TarotCard as TarotCardType } from "@/lib/tarotData";

interface TarotGridProps {
  cards: TarotCardType[];
  onCardsSelected: (cards: TarotCardType[]) => void;
  onShuffle: () => void;
}

export function TarotGrid({ cards, onCardsSelected, onShuffle }: TarotGridProps) {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  const handleCardClick = (id: number) => {
    if (selectedCards.includes(id)) {
      setSelectedCards(selectedCards.filter((cardId) => cardId !== id));
    } else if (selectedCards.length < 3) {
      const newSelected = [...selectedCards, id];
      setSelectedCards(newSelected);
      if (newSelected.length === 3) {
        onCardsSelected(cards.filter((card) => newSelected.includes(card.id)));
        setSelectedCards([]);
      }
    }
  };

  return (
    <div className="flex flex-col h-full gap-4">
      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2 p-4">
          <AnimatePresence>
            {cards.map((card) => (
              <motion.div
                key={card.id}
                layout
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <TarotCard
                  isSelected={selectedCards.includes(card.id)}
                  onClick={() => handleCardClick(card.id)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <div className="p-4 border-t bg-background">
        <Button 
          onClick={onShuffle}
          className="w-full"
          size="lg"
        >
          Shuffle Cards
        </Button>
      </div>
    </div>
  );
}