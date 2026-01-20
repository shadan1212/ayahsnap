"use client";

import { ThemeSelect } from "@/components/ThemeSelect";
import { VerseCard } from "@/components/VerseCard";
import { getVerse } from "@/lib/quranApi";
import { themes } from "@/lib/themes";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { motion } from "motion/react";
import { Search } from "lucide-react";
import { ChapterSelect } from "@/components/ChapterSelect";
import { chapters } from "@/lib/chapters";
import { VerseInput } from "@/components/VerseInput";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [theme, setTheme] = useState(themes[0]);
  const [chapter, setChapter] = useState<number>(1);
  const [verseNumber, setVerseNumber] = useState<number>(1);
  const [verse, setVerse] = useState<any>(null);

  const handlefetch = async () => {
    const v = await getVerse(1, 1);
    setVerse(v);
  };

  const maxVerse = chapters.find((c) => c.id === chapter)?.totalVerses || 1;

  useEffect(() => {
    handlefetch();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-800 font-sans selection:bg-stone-200 selection:text-stone-900">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <HeroSection />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
              <h2 className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Search size={16} /> Select Verse
              </h2>
              <div className="space-y-4">
                <ChapterSelect value={chapter} onChange={setChapter} />
                <VerseInput
                  value={verseNumber}
                  max={maxVerse}
                  loading={loading}
                  onChange={setVerseNumber}
                  onSubmit={() => getVerse(chapter, verseNumber)}
                />
              </div>
            </div>

            {/* <ThemeSelect
              selectedThemeId={selectedThemeId}
              selectedDimensionId={selectedDimensionId}
              fontSizeScale={fontSizeScale}
              onThemeChange={setSelectedThemeId}
              onDimensionChange={setSelectedDimensionId}
              onFontChange={setFontSizeScale}
            /> */}
          </motion.div>
        </div>
        {/* <h1 className="text-2xl font-semibold">Quran Snapshot</h1>

        <ThemeSelect selected={theme} onThemeChange={setTheme} />

        {verse && <VerseCard verse={verse} theme={theme} />} */}
      </main>
    </div>
  );
}
