import { Theme, themes } from "@/lib/themes";

interface Props {
  selected: Theme;
  onThemeChange: (theme: Theme) => void;
}

export function ThemeSelect({ selected, onThemeChange }: Props) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium">Theme</label>

      <select
        className="w-full border rounded-lg p-2"
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
    </div>
  );
}
