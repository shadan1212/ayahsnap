import { chapters } from "./chapters";
import { getVerse } from "./quranApi";

export async function getRandomVerse() {
  const randomChapterIndex = Math.floor(Math.random() * chapters.length);
  const randomChpter = chapters[randomChapterIndex];

  const randomVerseNum = Math.floor(Math.random() * randomChpter.totalVerses);

  const data = await getVerse(randomChpter.id, randomVerseNum);

  return {
    chapter: randomChpter.id,
    verseNumber: randomVerseNum,
    verseData: data,
  };
}
