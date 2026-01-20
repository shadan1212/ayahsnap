import { Theme } from "@/lib/themes";
import { Verse } from "@/types/verse";

interface Props {
  verse: Verse;
  theme: Theme;
}

export function VerseCard({ verse, theme }: Props) {
  return (
    <div
      className={`${theme.bg} rounded-2xl p-8 shadow-2xl min-h-96 flex flex-col justify-between transition-all duration-300 hover:shadow-xl`}
    >
      {/* Header with Chapter and Verse Reference */}
      <div className="mb-8">
        <div
          className={`inline-block px-4 py-2 rounded-lg ${theme.accent} bg-white/10 backdrop-blur-sm font-semibold text-sm mb-4`}
        >
          Chapter {verse.chapterId}, Verse {verse.verseNumber}
        </div>
      </div>

      {/* Arabic Text */}
      <div className="mb-8 flex-grow">
        <p
          className="text-2xl font-arabic font-bold leading-relaxed text-right direction-rtl mb-8"
          dir="rtl"
        >
          {verse.arabic}
        </p>

        {/* Divider */}
        <div
          className={`h-1 w-12 rounded-full ${theme.accent} opacity-50 mb-8`}
        ></div>

        {/* English Translation */}
        <p className="text-lg leading-relaxed opacity-90 font-light">
          {verse.translation}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-white/10">
        <p
          className={`text-xs ${theme.accent} opacity-75 uppercase tracking-widest`}
        >
          Al-Quran Al-Karim
        </p>
      </div>
    </div>
  );
}
