function StarIcon({ filled }) {
  return <i className={`fa ${filled ? "fa-star" : "fa-star-o"}`} aria-hidden />;
}

export default function SurveyStars({ value, onChange, size = "category" }) {
  const selectedClass = value > 0 ? `selected-${value}` : "selected-0";

  return (
    <ul
      className={`star-rating color ${selectedClass} star-rating-${size}`}
      role="radiogroup"
      aria-label="Rating"
    >
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = value >= star;
        return (
          <li key={star} className={`star${filled ? " filled" : ""}`}>
            <button
              type="button"
              role="radio"
              aria-checked={value === star}
              aria-label={`Rate ${star} out of 5 stars`}
              onClick={() => onChange(star)}
            >
              <StarIcon filled={filled} />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
