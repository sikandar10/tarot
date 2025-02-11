import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { TarotCard } from "@/lib/tarotData";

interface CardCarouselProps {
  cards: TarotCard[];
  onClose: () => void;
}

export function CardCarousel({ cards, onClose }: CardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = (delta: number) => {
    setCurrentIndex((prev) => {
      const next = prev + delta;
      if (next < 0) return cards.length - 1;
      if (next >= cards.length) return 0;
      return next;
    });
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50">
      <div className="absolute right-4 top-4">
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-6 w-6" />
        </Button>
      </div>
      
      <div className="flex items-center justify-center h-full">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="max-w-md p-6 bg-card rounded-lg shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-2">{cards[currentIndex].name}</h2>
            <p className="text-muted-foreground">{cards[currentIndex].description}</p>
          </motion.div>
        </AnimatePresence>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4"
          onClick={() => navigate(1)}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
