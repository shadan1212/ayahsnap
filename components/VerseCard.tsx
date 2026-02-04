import { Dimension } from "@/lib/dimensions";
import { Theme } from "@/lib/themes";
import { Verse } from "@/types/verse";
import React from "react";

interface Props {
  verse: Verse;
  theme: Theme;
  dimensionSize: Dimension;
  fontSize: number;
}

const VerseCard = React.forwardRef<HTMLDivElement, Props>(
  ({ verse, theme, dimensionSize, fontSize }, ref) => {
    return (
      <div
        ref={ref}
        className={`${dimensionSize.aspect} ${theme.bg} w-full h-auto max-h-[80vh] flex flex-col items-center justify-center text-center p-8 md:p-12 mx-auto`}
        style={{
          maxWidth:
            dimensionSize.id === "story"
              ? "400px"
              : dimensionSize.id === "landscape"
                ? "800px"
                : "600px",
        }}
      >
        {theme.id === "clean" && (
          <div className="absolute inset-4 border border-[#E7E5E4] pointer-events-none"></div>
        )}

        <div className="flex flex-col h-full w-full justify-between items-center z-10">
          <div className="flex flex-col items-center gap-2 opacity-70 mt-2">
            <span className="uppercase tracking-[0.25em] text-[10px] md:text-xs font-semibold font-inter">
              Surah {verse.chapterId}
            </span>
            <div
              className={`h-px w-8 ${theme.id === "clean" ? "bg-stone-300" : "bg-white/40"}`}
            ></div>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center w-full gap-2 my-4 overflow-hidden">
            <p
              className="font-arabic leading-[1.6] md:leading-[1.8] dir-rtl text-center px-2"
              style={{ fontSize: `${1.5 * fontSize}rem` }}
            >
              {verse.arabic}
            </p>
            <p
              className="font-light italic opacity-90 leading-relaxed max-w-[90%] font-inter"
              style={{ fontSize: `${1 * fontSize}rem` }}
            >
              "{verse.translation}"
            </p>
          </div>

          <div
            className={`mb-2 flex items-center gap-3 ${theme.accent || "text-current"} font-medium text-xs md:text-sm`}
          >
            <span>
              [{verse.chapterId}:{verse.verseNumber}]
            </span>
          </div>
        </div>
      </div>
    );
  },
);

export { VerseCard };
