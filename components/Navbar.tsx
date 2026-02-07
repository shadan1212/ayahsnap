import { motion } from "motion/react";
import { BookOpen, RefreshCw } from "lucide-react";

interface Props {
  loading: boolean;
  onRandomVerse: () => void;
}

export function Navbar({ onRandomVerse, loading }: Props) {
  return (
    <nav className="sticky top-0 z-50 bg-white/50 backdrop-blur-md border-b border-[#E7E5E4]">
      <div className="mx-auto max-w-7xl  px-4 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="bg-stone-700 text-[#F9F8F6] p-2 rounded-lg shadow-sm">
            <BookOpen size={20} />
          </div>
          <span className="font-bold text-xl tracking-tight text-stone-700">
            AyahSnap
          </span>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRandomVerse}
          className="flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-800 bg-white hover:bg-stone-50 px-4 py-2 rounded-full transition-colors border border-stone-200 shadow-sm cursor-pointer"
        >
          <div className="relative flex h-3 w-3 mr-1">
            <motion.span
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ duration: 0.3, repeat: Infinity }}
              className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
            />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
          </div>
          <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
          <span className="hidden sm:inline">Verse of the Day</span>
        </motion.button>
      </div>
    </nav>
  );
}
