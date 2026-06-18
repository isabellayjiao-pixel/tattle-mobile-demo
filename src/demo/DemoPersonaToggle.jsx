export default function DemoPersonaToggle({ persona, onChange }) {
  return (
    <div className="demo-persona-toggle" role="tablist" aria-label="Demo view">
      <button
        type="button"
        role="tab"
        aria-selected={persona === "operator"}
        className={`demo-persona-btn ${persona === "operator" ? "active" : ""}`}
        onClick={() => onChange("operator")}
      >
        <span className="demo-persona-label-long">Restaurant Operator</span>
        <span className="demo-persona-label-short">Operator</span>
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={persona === "guest"}
        className={`demo-persona-btn ${persona === "guest" ? "active" : ""}`}
        onClick={() => onChange("guest")}
      >
        <span className="demo-persona-label-long">Restaurant Guest</span>
        <span className="demo-persona-label-short">Guest</span>
      </button>
    </div>
  );
}
