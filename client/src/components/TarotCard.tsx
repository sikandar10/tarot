import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TarotCardProps {
  isSelected?: boolean;
  onClick?: () => void;
  animate?: boolean;
}

export function TarotCard({ isSelected, onClick, animate = true }: TarotCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={animate ? { scale: isSelected ? 1.1 : 1 } : undefined}
      onClick={onClick}
      className={cn(
        "aspect-square w-full rounded-full bg-gradient-to-br from-primary/80 to-primary",
        "flex items-center justify-center cursor-pointer shadow-lg",
        isSelected && "ring-2 ring-primary ring-offset-2"
      )}
    >
      <Star className="w-1/3 h-1/3 text-primary-foreground" />
    </motion.div>
  );
}