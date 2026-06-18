import { NegativeFaceIcon, NeutralFaceIcon, PositiveFaceIcon } from "./TattleFaceIcons";

const FACES = [
  { id: "negative", label: "Negative", Icon: NegativeFaceIcon, className: "negative" },
  { id: "neutral", label: "Neutral", Icon: NeutralFaceIcon, className: "neutral" },
  { id: "positive", label: "Positive", Icon: PositiveFaceIcon, className: "positive" },
];

export default function SurveyFactorRow({ factor, value, onChange }) {
  return (
    <div className="snapshot-reason">
      <span className="snapshot-reason-label">{factor}</span>
      <div className="positive-negative-selectors snapshot-reason-faces" role="radiogroup" aria-label={factor}>
        {FACES.map(({ id, label, Icon, className }) => (
          <button
            key={id}
            type="button"
            role="radio"
            aria-checked={value === id}
            aria-label={`${factor} ${label}`}
            className={`circle ${className} ${value === id ? "selected" : ""}`}
            onClick={() => onChange(id)}
          >
            <Icon />
          </button>
        ))}
      </div>
    </div>
  );
}
