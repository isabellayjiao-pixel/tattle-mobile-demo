import { merchantBrand } from "../../merchantBrand";
import MerchantBrandLogo from "../components/MerchantBrandLogo";
import GuestIOSStatusBar from "./GuestIOSStatusBar";

export default function GuestRcsInvite({ onOpenSurvey }) {
  return (
    <div className="screen guest-rcs-screen guest-in-app-screen">
      <GuestIOSStatusBar />
      <header className="guest-rcs-header">
        <button type="button" className="guest-rcs-back" aria-label="Back">
          ‹
        </button>
        <div className="guest-rcs-brand">
          <MerchantBrandLogo variant="rcs-header" className="guest-rcs-brand-logo" />
          <div>
            <span className="guest-rcs-brand-name">
              {merchantBrand.name}
              <span className="guest-rcs-verified" aria-label="Verified">✓</span>
            </span>
          </div>
        </div>
      </header>

      <p className="guest-rcs-label">RCS Business Message · Today 2:37 PM</p>

      <div className="guest-rcs-card">
        <div className="guest-rcs-card-image-wrap">
          <img src={merchantBrand.banner} alt="" className="guest-rcs-card-image" />
          <MerchantBrandLogo variant="rcs-card" className="guest-rcs-card-logo" />
        </div>
        <div className="guest-rcs-card-body">
          <h2>Was it love at first bite? ♡</h2>
          <p>Tell us how we did (30 sec)</p>
          <button type="button" className="guest-rcs-cta" onClick={onOpenSurvey}>
            Share Feedback
          </button>
          <p className="guest-rcs-optout">Reply STOP to opt out</p>
        </div>
      </div>

      <div className="guest-rcs-composer">
        <span className="guest-rcs-plus">+</span>
        <div className="guest-rcs-input">RCS Message</div>
        <span className="guest-rcs-mic">🎤</span>
      </div>
    </div>
  );
}
