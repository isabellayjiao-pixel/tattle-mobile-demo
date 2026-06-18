import { useMemo, useState } from "react";
import GuestSurveyBrowser from "../GuestSurveyBrowser";
import { surveyFlow } from "./surveyConfig";
import { useSurveyState } from "./useSurveyState";
import AdditionalStep from "./steps/AdditionalStep";
import CategoryStep from "./steps/CategoryStep";
import EmailStep from "./steps/EmailStep";
import LocationStep from "./steps/LocationStep";
import OverallStep from "./steps/OverallStep";
import SuccessStep from "./steps/SuccessStep";
import VisitStep from "./steps/VisitStep";
import SurveyLayout from "./components/SurveyLayout";

export default function GuestSurveyFlow() {
  const [stepIndex, setStepIndex] = useState(0);
  const survey = useSurveyState();
  const step = surveyFlow[stepIndex];

  const goNext = () => setStepIndex((i) => Math.min(i + 1, surveyFlow.length - 1));
  const goBack = () => setStepIndex((i) => Math.max(i - 1, 0));

  const canAdvance = useMemo(() => {
    if (!step) return false;
    return survey.canAdvance(step);
  }, [step, survey]);

  const handleSelectLocation = (loc) => {
    survey.setSelectedLocation(loc);
    setStepIndex(1);
  };

  const renderStep = () => {
    switch (step.type) {
      case "location":
        return (
          <LocationStep
            locationQuery={survey.locationQuery}
            onLocationQueryChange={survey.setLocationQuery}
            filteredLocations={survey.filteredLocations}
            selectedLocation={survey.selectedLocation}
            showLocationModal={survey.showLocationModal}
            onOpenLocationModal={() => survey.setShowLocationModal(true)}
            onCloseLocationModal={() => survey.setShowLocationModal(false)}
            onSelectLocation={handleSelectLocation}
            onUseNearestLocation={() => handleSelectLocation(survey.filteredLocations[0])}
          />
        );
      case "visit":
        return (
          <VisitStep
            selectedLocation={survey.selectedLocation}
            experience={survey.experience}
            onExperienceChange={survey.setExperience}
            dateIdx={survey.dateIdx}
            timeIdx={survey.timeIdx}
            onDateChange={survey.setDateIdx}
            onTimeChange={survey.setTimeIdx}
            onChangeLocation={() => setStepIndex(0)}
            onNext={goNext}
            canAdvance={canAdvance}
          />
        );
      case "stars":
        return (
          <OverallStep
            question={step.question}
            rating={survey.overallRating}
            onRatingChange={survey.setOverallRating}
            onBack={goBack}
            onNext={goNext}
            canAdvance={canAdvance}
          />
        );
      case "category":
        return (
          <CategoryStep
            step={step}
            data={survey.getCategory(step.id)}
            onUpdate={(patch) => survey.setCategory(step.id, patch)}
            onBack={goBack}
            onNext={goNext}
            canAdvance={canAdvance}
          />
        );
      case "email":
        return (
          <EmailStep
            question={step.question}
            email={survey.email}
            onEmailChange={survey.setEmail}
            onBack={goBack}
            onNext={goNext}
            canAdvance={canAdvance}
          />
        );
      case "additional":
        return (
          <AdditionalStep
            nps={survey.nps}
            frequency={survey.frequency}
            comment={survey.additionalComment}
            photoSelected={survey.photoSelected}
            onNpsChange={survey.setNps}
            onFrequencyChange={survey.setFrequency}
            onCommentChange={survey.setAdditionalComment}
            onPhotoSelect={() => survey.setPhotoSelected(true)}
            onBack={goBack}
            onSubmit={goNext}
            canAdvance={canAdvance}
          />
        );
      case "success":
        return <SuccessStep />;
      default:
        return null;
    }
  };

  return (
    <GuestSurveyBrowser>
      <SurveyLayout progress={step.progress}>{renderStep()}</SurveyLayout>
    </GuestSurveyBrowser>
  );
}
