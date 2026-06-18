import { merchantBrand } from "../../../../merchantBrand";
import SurveyActionPanel from "../components/SurveyActionPanel";
import SurveyRadioList from "../components/SurveyRadioList";
import { frequencyOptions, npsOptions } from "../surveyConfig";

export default function AdditionalStep({
  nps,
  frequency,
  comment,
  photoSelected,
  onNpsChange,
  onFrequencyChange,
  onCommentChange,
  onPhotoSelect,
  onBack,
  onSubmit,
  canAdvance,
}) {
  return (
    <>
      <div className="survey-block">
        <div className="survey-block-label section-heading">Additional Questions</div>
      </div>

      <div className="survey-block">
        <div className="survey-block-label">
          How likely would you be to recommend {merchantBrand.name} to family and friends?*
        </div>
        <SurveyRadioList options={npsOptions} value={nps} onChange={onNpsChange} />
      </div>

      <div className="survey-block">
        <div className="survey-block-label">
          How often do you order {merchantBrand.name} online for pick-up?*
        </div>
        <SurveyRadioList options={frequencyOptions} value={frequency} onChange={onFrequencyChange} />
      </div>

      <div className="survey-block">
        <div className="survey-block-label muted">
          Please share any other feedback, comments, or concerns so that we can improve your visit next time!
        </div>
        <textarea className="field textarea" value={comment} onChange={(e) => onCommentChange(e.target.value)} />
      </div>

      <div className="survey-question upload-photo-block">
        <div className="survey-block-label muted">Upload a photo from your experience.</div>
        <button type="button" className="btn bg-primary upload-photo-btn" onClick={onPhotoSelect}>
          <span className="fa fa-camera" aria-hidden /> Select a photo
        </button>
        {photoSelected ? <p className="photo-selected-note">Photo selected for upload</p> : null}
        <p className="upload-photo-note">*may require granting device permissions</p>
      </div>

      <SurveyActionPanel onBack={onBack} onNext={onSubmit} nextLabel="Submit" nextDisabled={!canAdvance} />
      <p className="survey-privacy">
        By clicking Submit Feedback you are certifying that you have read our{" "}
        <button type="button" className="privacy-link">Privacy Policy</button>.
      </p>
    </>
  );
}
