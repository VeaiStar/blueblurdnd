export default function LivePreview({ abilities }) {
  return (
    <div className="p-4 border bg-white rounded-lg shadow-sm">
      <h2 className="text-lg font-bold mb-3">Live Preview</h2>

      <div className="grid grid-cols-3 gap-3 text-sm">
        {Object.entries(abilities).map(([key, val]) => (
          <div
            key={key}
            className="p-2 border rounded bg-slate-50 text-center shadow-sm"
          >
            <div className="font-bold">{key}</div>
            <div className="text-xl">{val}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
