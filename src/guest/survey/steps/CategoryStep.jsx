import { useEffect } from "react";
import { categoryNeedsMore } from "../surveyConfig";
import SurveyActionPanel from "../components/SurveyActionPanel";
import SurveyFactorRow from "../components/SurveyFactorRow";
import SurveyStars from "../components/SurveyStars";

export default function CategoryStep({ step, data, onUpdate, onBack, onNext, canAdvance }) {
  const needsMore = data.rating > 0 && categoryNeedsMore(data.rating, data.factors, data.comment);

  useEffect(() => {
    if (data.rating <= 0) return;
    const needsDefaults = step.factors.some((factor) => !data.factors[factor]);
    if (!needsDefaults) return;
    onUpdate({
      factors: Object.fromEntries(step.factors.map((factor) => [factor, data.factors[factor] ?? "neutral"])),
    });
  }, [data.rating, step.factors, data.factors, onUpdate]);

  return (
    <div className="survey-question">
      <h2 className="survey-title">{step.title}</h2>
      <p className="survey-subtitle">{step.question}</p>

      <div className="star field">
        <SurveyStars
          value={data.rating}
          onChange={(rating) => {
            const factors = { ...data.factors };
            for (const factor of step.factors) {
              if (!factors[factor]) factors[factor] = "neutral";
            }
            onUpdate({ rating, factors });
          }}
          size="category"
        />
      </div>

      {data.rating > 0 ? (
        <>
          <p className="factor-prompt">Which factor had a negative/neutral/positive impact on your rating?</p>
          <div className="snapshot-reason-ratings">
            {step.factors.map((factor) => (
              <SurveyFactorRow
                key={factor}
                factor={factor}
                value={data.factors[factor] ?? "neutral"}
                onChange={(val) =>
                  onUpdate({ factors: { ...data.factors, [factor]: val } })
                }
              />
            ))}
          </div>

          <label className="field-label">{step.commentLabel}</label>
          <textarea
            className="field textarea"
            placeholder="Share your experience here..."
            value={data.comment}
            onChange={(e) => onUpdate({ comment: e.target.value })}
          />

          {needsMore ? (
            <p className="panel-invalid field-footer">
              {data.rating <= 2 && !data.comment.trim() ? (
                <>Based on your rating, a comment about your experience is required to continue.</>
              ) : (
                <>
                  Based on your rating, please indicate a <strong>negative</strong> factor above or comment about
                  your experience to continue.
                </>
              )}
            </p>
          ) : null}
        </>
      ) : null}

      <SurveyActionPanel onBack={onBack} onNext={onNext} nextDisabled={!canAdvance} />
    </div>
  );
}
