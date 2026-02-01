import { Theme, themes } from "@/lib/themes";

interface Props {
  selected: Theme;
  onThemeChange: (theme: Theme) => void;
}

export function ThemeSelect({ selected, onThemeChange }: Props) {
  return (
    <div>
      <label className="block text-xs font-medium text-stone-500 mb-1">
        Color Theme
      </label>

      <div className="relative">
        <select
          className="w-full p-3 bg-white border border-stone-200 rounded-xl focus:ring-2 focus:ring-stone-400 outline-none appearance-none cursor-pointer text-stone-700"
          value={selected.id}
          onChange={(e) => {
            const theme = themes.find((t) => t.id === e.target.value);
            if (theme) onThemeChange(theme);
          }}
        >
          {themes.map((theme) => (
            <option key={theme.id} value={theme.id}>
              {theme.name}
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
