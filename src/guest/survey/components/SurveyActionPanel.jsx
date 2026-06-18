export default function SurveyActionPanel({
  onBack,
  onNext,
  nextLabel = "Next",
  nextDisabled = false,
  showBack = true,
}) {
  return (
    <div className="survey-action-panel">
      {showBack ? (
        <button type="button" className="btn btn-default btn-back" onClick={onBack}>
          Go Back
        </button>
      ) : null}
      <button type="button" className="btn bg-primary btn-submit-2" disabled={nextDisabled} onClick={onNext}>
        {nextLabel}
      </button>
    </div>
  );
}
