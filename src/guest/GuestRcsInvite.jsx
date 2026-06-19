import { merchantBrand } from "../../merchantBrand";
import MerchantBrandLogo from "../components/MerchantBrandLogo";
import GuestIOSStatusBar from "./GuestIOSStatusBar";

export default function GuestRcsInvite({ onOpenSurvey }) {
  return (
    <div className="screen guest-rcs-screen guest-in-app-screen">
      <GuestIOSStatusBar />
      <header className="guest-rcs-header">
        <button type="button" className="guest-rcs-back-pill" aria-label="Back to conversations">
          <span className="guest-rcs-back-icon">‹</span>
          <span className="guest-rcs-back-count">1</span>
        </button>
        <div className="guest-rcs-brand">
          <MerchantBrandLogo variant="rcs-header" className="guest-rcs-brand-logo" />
          <div className="guest-rcs-brand-meta">
            <span className="guest-rcs-brand-name">{merchantBrand.shortName}</span>
            <span className="guest-rcs-brand-chevron">›</span>
          </div>
        </div>
      </header>

      <p className="guest-rcs-label">Text Message · RCS</p>
      <p className="guest-rcs-label-time">Today 1:46 PM</p>

      <div className="guest-rcs-card">
        <div className="guest-rcs-card-image-wrap">
          <img src="/CAVA RCS banner image.jpg" alt="" className="guest-rcs-card-image" />
        </div>
        <div className="guest-rcs-card-body">
          <h2>Was it love at first bite? 💛</h2>
          <p>Take our quick 30-second survey to help us perfect your next order.</p>
          <button type="button" className="guest-rcs-cta" onClick={onOpenSurvey}>
            <span>Share Feedback</span>
            <span className="guest-rcs-cta-icon" aria-hidden>✎</span>
          </button>
        </div>
      </div>

      <p className="guest-rcs-meta-note">{merchantBrand.shortName} will see actions you select</p>
      <p className="guest-rcs-spam-question">Don&apos;t recognize this business?</p>
      <button type="button" className="guest-rcs-spam-btn">Report Spam</button>

      <div className="guest-rcs-composer">
        <span className="guest-rcs-plus">+</span>
        <div className="guest-rcs-input">RCS Message</div>
        <span className="guest-rcs-mic">🎤</span>
      </div>
    </div>
  );
}
