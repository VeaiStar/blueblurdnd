import { motion } from "framer-motion";
import { abilityList, DEFAULT_ABILITIES } from "./abilities";

export default function AbilityEditor({ scores, onChange }) {
  const safe = { ...DEFAULT_ABILITIES, ...(scores || {}) };

  return (
    <div className="grid grid-cols-3 gap-4 p-3 bg-white border rounded-lg">
      {abilityList.map((a) => {
        const before = safe[a];
        const after = scores?.[a] ?? 0;
        const inc = after > before;
        const dec = after < before;
        const changed = inc || dec;

        return (
          <div key={a} className="flex flex-col text-sm font-semibold">
            <label className="mb-1">{a}</label>

            <motion.input
              type="number"
              value={after}
              animate={
                changed
                  ? {
                      scale: inc ? 1.15 : dec ? 0.9 : 1,
                      color: inc ? "#22c55e" : dec ? "#ef4444" : "#000"
                    }
                  : { scale: 1, color: "#000" }
              }
              transition={{ duration: 0.25 }}
              onChange={(e) =>
                onChange({ ...safe, [a]: Number(e.target.value) })
              }
              className="border rounded px-2 py-1 bg-white shadow-sm"
            />
          </div>
        );
      })}
    </div>
  );
}
