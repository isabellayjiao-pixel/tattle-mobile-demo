export default function SurveyRadioList({ options, value, onChange }) {
  return (
    <ul className="list-group survey-select">
      {options.map((opt) => {
        const id = typeof opt === "string" ? opt : opt.id;
        const label = typeof opt === "string" ? opt : opt.label;
        const selected = value === id;
        return (
          <li key={id} className="list-group-item">
            <button type="button" className={`survey-select-item ${selected ? "selected" : ""}`} onClick={() => onChange(id)}>
              <span className={`ui-radio ${selected ? "checked" : ""}`} aria-hidden />
              <span className="title">{label}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
