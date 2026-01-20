export type Theme = {
  id: string;
  name: string;
  bg: string;
  accent: string;
};

export const themes: Theme[] = [
  {
    id: "midnight",
    name: "Midnight (Purple/Dark)",
    bg: "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white",
    accent: "text-purple-300",
  },
  {
    id: "desert",
    name: "Golden Hour (Amber)",
    bg: "bg-gradient-to-br from-amber-200 via-orange-100 to-amber-200 text-amber-900",
    accent: "text-amber-800",
  },
  {
    id: "ocean",
    name: "Deep Sea (Teal/Blue)",
    bg: "bg-gradient-to-br from-cyan-900 via-blue-900 to-teal-900 text-cyan-50",
    accent: "text-cyan-300",
  },
  {
    id: "forest",
    name: "Sage & Emerald",
    bg: "bg-gradient-to-br from-emerald-800 via-teal-800 to-stone-900 text-emerald-50",
    accent: "text-emerald-300",
  },
  {
    id: "noir",
    name: "Noir (Black & White)",
    bg: "bg-zinc-950 text-zinc-100 border border-zinc-800",
    accent: "text-zinc-400",
  },
  {
    id: "dusk",
    name: "Dusk (Pink/Indigo)",
    bg: "bg-gradient-to-bl from-indigo-900 via-purple-800 to-pink-800 text-pink-50",
    accent: "text-pink-300",
  },
  {
    id: "royal",
    name: "Royal (Gold/Black)",
    bg: "bg-gradient-to-tr from-gray-900 to-gray-800 text-amber-400 border-2 border-amber-900/50",
    accent: "text-amber-200",
  },
  {
    id: "clean",
    name: "Minimalist (Cream)",
    bg: "bg-[#FDFBF7] border-2 border-[#E7E5E4] text-[#44403C]",
    accent: "text-[#78716C]",
  },
  {
    id: "paper",
    name: "Old Paper (Texture)",
    bg: "bg-[#fdfbf7] text-[#5c5246] border border-[#e8e4d9]",
    accent: "text-[#8c7b66]",
  },
];
