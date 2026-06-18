import SurveyActionPanel from "../components/SurveyActionPanel";
import SurveyStars from "../components/SurveyStars";

export default function OverallStep({ question, rating, onRatingChange, onBack, onNext, canAdvance }) {
  return (
    <div className="survey-panel-block">
      <p className="survey-subtitle">{question}</p>
      <div className="star field">
        <SurveyStars value={rating} onChange={onRatingChange} size="overall" />
      </div>
      <SurveyActionPanel onBack={onBack} onNext={onNext} nextDisabled={!canAdvance} />
    </div>
  );
}
