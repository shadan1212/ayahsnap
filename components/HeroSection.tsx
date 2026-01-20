import { motion } from "motion/react";

export function HeroSection() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-10 mt-10 max-w-2xl mx-auto space-y-4"
      >
        <h1 className="mb-2 font-playfair font-bold leading-tight text-4xl sm:text-5xl md:text-6xl bg-gradient-to-b from-black to-gray-600 bg-clip-text text-transparent">
          Quran Ayah Snapshot
        </h1>
        <p className="mx-auto mb-8 font-inter text-gray-600 max-w-lg md:max-w-2xl text-base md:text-lg">
          Create aesthetically pleasing, shareable cards for your favorite
          Quranic verses.
        </p>
      </motion.div>
      ;
    </>
  );
}
