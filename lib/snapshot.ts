import { toPng } from "html-to-image";

export async function downloadSnapshot(
  element: HTMLElement,
  fileName = "ayah-snap.png",
) {
  const dataUrl = await toPng(element, {
    quality: 1,
    pixelRatio: 2,
  });

  const link = document.createElement("a");
  link.download = fileName;
  link.href = dataUrl;
  link.click();
}
