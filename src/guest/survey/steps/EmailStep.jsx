import SurveyActionPanel from "../components/SurveyActionPanel";

export default function EmailStep({ question, email, onEmailChange, onBack, onNext, canAdvance }) {
  return (
    <div className="survey-submit-email">
      <h2 className="survey-title survey-email-title">{question}</h2>
      <div className="survey-email">
        <div className="email-input">
          <input
            type="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            placeholder="your@email.com"
            autoComplete="email"
            inputMode="email"
          />
        </div>
      </div>
      <SurveyActionPanel onBack={onBack} onNext={onNext} nextLabel="Continue" nextDisabled={!canAdvance} />
    </div>
  );
}
