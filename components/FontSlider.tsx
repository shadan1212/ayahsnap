import { Type } from "lucide-react";

interface Props {
  value: number;
  onFontChange: (val: number) => void;
}

export function FontSlider({ value, onFontChange }: Props) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <label className="block text-xs font-medium text-stone-500">
          Text Size
        </label>
        <span className="text-xs text-stone-400">
          {Math.round(value * 100)}%
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Type size={14} className="text-stone-400" />
        <input
          type="range"
          min="0.5"
          max="1.5"
          step="0.05"
          value={value}
          onChange={(e) => onFontChange(parseFloat(e.target.value))}
          className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-stone-600"
        />
        <Type size={20} className="text-stone-600" />
      </div>
    </div>
  );
}
