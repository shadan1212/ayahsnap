import { Loader2 } from "lucide-react";
import { motion } from "motion/react";

interface Props {
  value: number;
  max: number;
  loading: boolean;
  onChange: (v: number) => void;
  onSubmit: () => void;
}

export function VerseInput({ value, max, loading, onChange, onSubmit }: Props) {
  return (
    <div>
      <label className="block text-xs font-medium text-stone-500 mb-1">
        Verse Number
      </label>
      <div className="flex gap-2">
        <input
          type="number"
          min="1"
          max={max}
          className="w-full p-3 bg-white border border-stone-200 rounded-xl focus:ring-2 focus:ring-stone-400 outline-none transition-all text-stone-700"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        <motion.button
          onClick={onSubmit}
          disabled={loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-stone-700 hover:bg-stone-800 text-[#F9F8F6] px-6 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-md shadow-stone-200"
        >
          {loading ? <Loader2 className="animate-spin" /> : "Go"}
        </motion.button>
      </div>
    </div>
  );
}
