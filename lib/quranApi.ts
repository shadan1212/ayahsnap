import { Verse } from "@/types/verse";

// const BASE_URL = "https://api.alquran.cloud/v1";

export async function getVerse(
  chapterId: number,
  verseNumber: number,
): Promise<Verse> {
  const url = `https://api.alquran.cloud/v1/ayah/${chapterId}:${verseNumber}/editions/quran-uthmani,en.sahih`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch verse");
  }

  const json = await response.json();

  const arabic = json.data.find((v: any) => v.edition.language === "ar");

  const english = json.data.find((v: any) => v.edition.language === "en");

  if (!arabic || !english) {
    throw new Error("Invalid API resposne");
  }

  return {
    chapterId,
    verseNumber,
    arabic: arabic.text,
    translation: english.text,
  };
}
