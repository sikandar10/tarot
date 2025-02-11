import { motion } from "framer-motion";
import { Moon, Star, Sun } from "lucide-react";

export function Logo() {
  return (
    <motion.div 
      className="flex items-center justify-center gap-2 py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Moon className="w-6 h-6 text-primary/80" />
      <h1 className="text-3xl font-bold bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
        Mystic Tarot
      </h1>
      <Sun className="w-6 h-6 text-primary" />
    </motion.div>
  );
}
