import { chapters } from "@/lib/chapters";

interface Props {
  value: number;
  onChange: (id: number) => void;
}

export function ChapterSelect({ value, onChange }: Props) {
  return (
    <div>
      <label className="block text-xs font-medium text-stone-500 mb-1">
        Chapter
      </label>
      <div className="relative">
        <select
          className="w-full p-3 bg-white border border-stone-200 rounded-xl focus:ring-2 focus:ring-stone-400 focus:border-stone-400 outline-none transition-all appearance-none cursor-pointer text-stone-700"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        >
          {chapters.map((s) => (
            <option key={s.id} value={s.id}>
              {s.id}. {s.name} ({s.arabicName})
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
