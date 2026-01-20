import { motion } from "motion/react";
import { BookOpen } from "lucide-react";

export function Navbar() {
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
      </div>
    </nav>
  );
}
