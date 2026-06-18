import MerchantBrandLogo from "../../../components/MerchantBrandLogo";
import SurveyActionPanel from "../components/SurveyActionPanel";
import SurveyRadioList from "../components/SurveyRadioList";
import { dateOptions, experienceTypes, timeOptions } from "../surveyConfig";

function ExperienceDateTimePicker({ ariaLabel, value, onDecrease, onIncrease }) {
  return (
    <div className="text-center tttl-datepicker-new">
      <div className="text-center">
        <div className="tttl-date" role="listbox" aria-label={ariaLabel}>
          <table>
            <tbody>
              <tr>
                <td className="tttl-datepicker-arrow" aria-hidden="true">
                  <div className="arrow-button left">
                    <button type="button" className="clickable" onClick={onDecrease}>
                      <i className="fa fa-angle-left" aria-hidden="true" />
                    </button>
                  </div>
                </td>
                <td className="tttl-datepicker-label">
                  <div className="label-date">
                    <div>{value}</div>
                  </div>
                </td>
                <td className="tttl-datepicker-arrow" aria-hidden="true">
                  <div className="arrow-button right">
                    <button type="button" className="clickable" onClick={onIncrease}>
                      <i className="fa fa-angle-right" aria-hidden="true" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function VisitStep({
  selectedLocation,
  experience,
  onExperienceChange,
  dateIdx,
  timeIdx,
  onDateChange,
  onTimeChange,
  onChangeLocation,
  onNext,
  canAdvance,
}) {
  return (
    <>
      <div className="survey-block">
        <div className="survey-block-label">Where was your experience?</div>
        <div className="location-item active">
          <MerchantBrandLogo variant="location" className="location-logo" alt="" />
          <div className="location-copy">
            <b className="location-title">{selectedLocation?.name}</b>
            <span className="location-address">{selectedLocation?.address}</span>
          </div>
          <button type="button" className="change-link" onClick={onChangeLocation}>
            Change
          </button>
        </div>
      </div>

      <div className="survey-block">
        <div className="survey-block-label">What was your experience?</div>
        <SurveyRadioList options={experienceTypes} value={experience} onChange={onExperienceChange} />
      </div>

      <div className="survey-block">
        <div className="survey-block-label">When was your experience?</div>
        <div id="experience-time-new">
          <ExperienceDateTimePicker
            ariaLabel="Date selection"
            value={dateOptions[dateIdx]}
            onDecrease={() => onDateChange(Math.max(0, dateIdx - 1))}
            onIncrease={() => onDateChange(Math.min(dateOptions.length - 1, dateIdx + 1))}
          />
          <ExperienceDateTimePicker
            ariaLabel="Time selection"
            value={timeOptions[timeIdx]}
            onDecrease={() => onTimeChange(Math.max(0, timeIdx - 1))}
            onIncrease={() => onTimeChange(Math.min(timeOptions.length - 1, timeIdx + 1))}
          />
        </div>
      </div>

      <SurveyActionPanel showBack={false} onNext={onNext} nextDisabled={!canAdvance} />
    </>
  );
}
