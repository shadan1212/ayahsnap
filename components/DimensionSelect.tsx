import { Dimension } from "@/lib/dimensions";
import { dimensions } from "@/lib/dimensions";
import { Monitor } from "lucide-react";

interface Props {
  selected: Dimension;
  onDimensionChange: (dimension: Dimension) => void;
}

export function DimensionSelect({ selected, onDimensionChange }: Props) {
  return (
    <div>
      <label className="block text-xs font-medium text-stone-500 mb-1">
        Canvas Size
      </label>
      <div className="relative">
        <select
          value={selected.id}
          onChange={(e) => {
            const dimension = dimensions.find((d) => d.id === e.target.value);
            if (dimension) onDimensionChange(dimension);
          }}
          className="w-full p-3 font-outfit bg-white border border-stone-200 rounded-xl focus:ring-2 focus:ring-stone-400 outline-none appearance-none cursor-pointer text-stone-700"
        >
          {dimensions.map((d) => (
            <option key={d.id} value={d.id}>
              {d.label}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
          <Monitor size={14} />
        </div>
      </div>
    </div>
  );
}
