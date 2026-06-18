import { useMemo, useState } from "react";
import { merchantBrand } from "../../../../merchantBrand";
import SurveyStars from "../components/SurveyStars";
import { postSurveyMenuItems, postSurveyReviewProvider } from "../surveyConfig";

function GoogleLogo() {
  return (
    <svg className="social-media-logo" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export default function SuccessStep() {
  const [itemRatings, setItemRatings] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const allItemsRated = useMemo(
    () => postSurveyMenuItems.every((item) => itemRatings[item.id] > 0),
    [itemRatings],
  );

  const handleItemRating = (itemId, rating) => {
    setItemRatings((prev) => ({ ...prev, [itemId]: rating }));
  };

  const handleSubmit = () => {
    if (!allItemsRated || submitted) return;
    setSubmitted(true);
  };

  return (
    <>
      <section className="survey-complete-section" aria-label="Survey complete">
        <div className="survey-complete-panel">
          <div className="reward-box no-wait">
            <h4 className="text-primary">Thank you for your honest feedback!</h4>
            <span className="reward-available">
              <strong>Your reward is available now!</strong>
            </span>
            <button type="button" className="btn btn-default btn-lg btn-redeem">
              Redeem now
            </button>
            <p className="survey-complete-message">
              Your opinion is appreciated and will be reviewed by our staff shortly.
            </p>
          </div>

          <p className="message-public-review">Would you mind helping us out by sharing your experience?</p>

          <div className="btn-provider-wrapper text-center">
            <a
              href={postSurveyReviewProvider.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-public-review-provider"
            >
              <GoogleLogo />
              <span>Review Us on {postSurveyReviewProvider.label}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="survey-complete-mlf" aria-labelledby="mlf-header-block">
        <div className="survey-block">
          <div id="mlf-header-block" className="survey-block-label text-center">
            We would love to hear your thoughts on the items you ordered.
          </div>
          <div className="field mlf-items">
            {postSurveyMenuItems.map((item) => (
              <div key={item.id} className="mlf-item-row text-center">
                <div className="survey-rating">
                  <div className="mlf-container">
                    <div className="mlf-child">
                      <div className="h4 mlf-item">{item.label}</div>
                    </div>
                    <div className="mlf-child">
                      <SurveyStars
                        value={itemRatings[item.id] ?? 0}
                        onChange={(rating) => handleItemRating(item.id, rating)}
                        size="category"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="survey-complete-submit">
        <div className="survey-block">
          <div className="survey-action-panel">
            <button
              type="button"
              className="btn bg-primary btn-submit-2"
              disabled={!allItemsRated || submitted}
              onClick={handleSubmit}
            >
              {submitted ? (
                <>
                  <i className="fa fa-check-circle" aria-hidden="true" /> Submitted
                </>
              ) : (
                "Submit"
              )}
            </button>
            <p className="survey-privacy">
              By clicking Submit Feedback you are certifying that you have read our{" "}
              <button type="button" className="privacy-link">
                Privacy Policy
              </button>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
