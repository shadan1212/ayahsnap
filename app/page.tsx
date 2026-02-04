"use client";

import { ThemeSelect } from "@/components/ThemeSelect";
import { VerseCard } from "@/components/VerseCard";
import { getVerse } from "@/lib/quranApi";
import { themes } from "@/lib/themes";
import { useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { motion } from "motion/react";
import { Palette, Search } from "lucide-react";
import { ChapterSelect } from "@/components/ChapterSelect";
import { chapters } from "@/lib/chapters";
import { VerseInput } from "@/components/VerseInput";
import { dimensions } from "@/lib/dimensions";
import { DimensionSelect } from "@/components/DimensionSelect";
import { FontSlider } from "@/components/FontSlider";
import { downloadSnapshot } from "@/lib/snapshot";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [theme, setTheme] = useState(themes[0]);
  const [dimension, setDimension] = useState(dimensions[0]);
  const [fontSizeScale, setFontSizeScale] = useState(1);
  const [chapter, setChapter] = useState<number>(1);
  const [verseNumber, setVerseNumber] = useState<number>(1);
  const [verse, setVerse] = useState<any>(null);

  const cardRef = useRef<HTMLDivElement>(null);

  const handlefetchVerse = async () => {
    setLoading(true);
    try {
      const data = await getVerse(chapter, verseNumber);
      setVerse(data);
    } catch (error) {
      console.error("Failed to fetch the verse", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!cardRef.current) return;
    await downloadSnapshot(cardRef.current);
  };

  const maxVerse = chapters.find((c) => c.id === chapter)?.totalVerses || 1;
  console.log(maxVerse);

  // useEffect(() => {
  //   handlefetch();
  // }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-800 font-sans selection:bg-stone-200 selection:text-stone-900">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <HeroSection />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
          <div className="h-full">
            {verse && (
              <VerseCard
                ref={cardRef}
                verse={verse}
                theme={theme}
                dimensionSize={dimension}
                fontSize={fontSizeScale}
              />
            )}
          </div>
          <div className="flex flex-col space-y-4 h-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              // className="lg:col-span-4"
            >
              <div className="bg-white p-6 rounded-md shadow-sm border border-stone-100 h-full">
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
                    onSubmit={handlefetchVerse}
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              // className="lg:col-span-8"
            >
              <div className="bg-white p-6 rounded-md shadow-sm border border-stone-100">
                <h2 className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Palette size={16} /> Customization
                </h2>
                <div className="space-y-4">
                  <ThemeSelect selected={theme} onThemeChange={setTheme} />
                  <DimensionSelect
                    selected={dimension}
                    onDimensionChange={setDimension}
                  />
                  <FontSlider
                    value={fontSizeScale}
                    onFontChange={setFontSizeScale}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {verse && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDownload}
            disabled={loading || !verse}
            className="w-full py-4 bg-stone-800 hover:bg-stone-900 text-[#F9F8F6] rounded-2xl font-semibold shadow-lg shadow-stone-200 transition-all flex items-center justify-center gap-3 mt-4 cursor-pointer"
          >
            Download
          </motion.button>
        )}
      </main>
    </div>
  );
}
