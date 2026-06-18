import { merchantBrand } from "../../merchantBrand";
import MerchantBrandLogo from "../components/MerchantBrandLogo";
import GuestIOSStatusBar from "./GuestIOSStatusBar";

export default function GuestSmsInvite({ onOpenSurvey }) {
  return (
    <div className="screen imessage-screen guest-in-app-screen">
      <GuestIOSStatusBar />
      <header className="imessage-header">
        <button type="button" className="imessage-back" aria-label="Back">
          <svg viewBox="0 0 12 20" width="12" height="20" aria-hidden>
            <path d="M10 2L2 10l8 8" fill="none" stroke="#007AFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Messages</span>
        </button>
        <div className="imessage-contact">
          <MerchantBrandLogo variant="avatar" className="imessage-avatar" />
          <span className="imessage-name">{merchantBrand.name}</span>
          <span className="imessage-chevron">›</span>
        </div>
      </header>

      <div className="imessage-thread">
        <p className="imessage-timestamp">Today 2:14 PM</p>
        <button type="button" className="imessage-bubble imessage-bubble-in" onClick={onOpenSurvey}>
          <span className="imessage-bubble-text">
            Thanks for choosing {merchantBrand.name}! Leave your feedback using this link:
          </span>
          <span className="imessage-bubble-link">{merchantBrand.surveyShortUrl}</span>
        </button>
      </div>

      <footer className="imessage-composer">
        <span className="imessage-plus">+</span>
        <div className="imessage-input">Text Message</div>
        <span className="imessage-mic" aria-hidden>🎤</span>
      </footer>
    </div>
  );
}
