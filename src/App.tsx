import { useState } from "react";
import AbilityEditor from "./AbilityEditor";
import LivePreview from "./LivePreview";
import { DEFAULT_ABILITIES } from "./abilities";

export default function App() {
  const [abilities, setAbilities] = useState(DEFAULT_ABILITIES);

  return (
    <div className="flex gap-6">
      <div className="flex-1">
        <h1 className="text-xl font-bold mb-4">Ability Editor</h1>
        <AbilityEditor scores={abilities} onChange={setAbilities} />
      </div>

      <div className="w-72">
        <LivePreview abilities={abilities} />
      </div>
    </div>
  );
}
