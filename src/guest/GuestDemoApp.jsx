import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import IPhoneShell from "../demo/IPhoneShell";
import GuestDemoSidebar from "./GuestDemoSidebar";
import GuestEmailInvite from "./GuestEmailInvite";
import GuestSmsInvite from "./GuestSmsInvite";
import GuestRcsInvite from "./GuestRcsInvite";
import GuestIdleScreen from "./GuestIdleScreen";
import GuestSurveyFlow from "./GuestSurveyFlow";

export default function GuestDemoApp({ activeInvite, onInviteChange, onReset }) {
  const navigate = useNavigate();

  const handleTrigger = (inviteId) => {
    onInviteChange(inviteId);
    navigate(`/guest/invite/${inviteId}`);
  };

  const handleReset = () => {
    onReset();
    navigate("/guest/home");
  };

  const handleOpenSurvey = () => navigate("/guest/survey");

  return (
    <>
      <GuestDemoSidebar activeInvite={activeInvite} onReset={handleReset} onTrigger={handleTrigger} />
      <IPhoneShell>
        <Routes>
          <Route path="/guest/home" element={<GuestIdleScreen />} />
          <Route path="/guest/invite/email" element={<GuestEmailInvite onOpenSurvey={handleOpenSurvey} />} />
          <Route path="/guest/invite/sms" element={<GuestSmsInvite onOpenSurvey={handleOpenSurvey} />} />
          <Route path="/guest/invite/rcs" element={<GuestRcsInvite onOpenSurvey={handleOpenSurvey} />} />
          <Route path="/guest/survey" element={<GuestSurveyFlow />} />
          <Route path="/guest/*" element={<Navigate to="/guest/home" replace />} />
        </Routes>
      </IPhoneShell>
    </>
  );
}
