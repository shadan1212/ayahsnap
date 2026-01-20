export type dimension = {
  id: string;
  name: string;
  label: string;
  aspect: string;
};

export const dimensions = [
  {
    id: "square",
    name: "Square (1:1)",
    label: "Instagram Post",
    aspect: "aspect-square",
  },
  {
    id: "portrait",
    name: "Portrait (4:5)",
    label: "IG Feed Portrait",
    aspect: "aspect-[4/5]",
  },
  {
    id: "story",
    name: "Story / Reel (9:16)",
    label: "TikTok / Stories",
    aspect: "aspect-[9/16]",
  },
  {
    id: "landscape",
    name: "Landscape (16:9)",
    label: "Twitter / LinkedIn",
    aspect: "aspect-[16/9]",
  },
];
