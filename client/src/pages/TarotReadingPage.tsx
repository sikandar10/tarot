import { useState } from "react";
import { TarotGrid } from "@/components/TarotGrid";
import { CardCarousel } from "@/components/CardCarousel";
import { Logo } from "@/components/Logo";
import { ALL_CARDS, shuffleCards, type TarotCard } from "@/lib/tarotData";

export default function TarotReadingPage() {
  const [cards, setCards] = useState(ALL_CARDS);
  const [selectedCards, setSelectedCards] = useState<TarotCard[]>([]);
  const [showCarousel, setShowCarousel] = useState(false);

  const handleShuffle = () => {
    setCards(shuffleCards(cards));
  };

  const handleCardsSelected = (selected: TarotCard[]) => {
    setSelectedCards(selected);
    setShowCarousel(true);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <Logo />
      <div className="flex-1 min-h-0">
        <TarotGrid
          cards={cards}
          onCardsSelected={handleCardsSelected}
          onShuffle={handleShuffle}
        />
      </div>
      {showCarousel && (
        <CardCarousel
          cards={selectedCards}
          onClose={() => setShowCarousel(false)}
        />
      )}
    </div>
  );
}