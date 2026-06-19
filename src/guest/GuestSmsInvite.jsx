import { merchantBrand } from "../../merchantBrand";
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
          <span className="imessage-anon-avatar" aria-hidden>
            <svg viewBox="0 0 56 56" width="54" height="54">
              <defs>
                <linearGradient id="anon-avatar-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8aa8dc" />
                  <stop offset="100%" stopColor="#7b8fca" />
                </linearGradient>
              </defs>
              <circle cx="28" cy="28" r="28" fill="url(#anon-avatar-gradient)" />
              <circle cx="28" cy="21" r="10" fill="#f3f6ff" />
              <path d="M10 47c2-10 10-14 18-14s16 4 18 14" fill="#f3f6ff" />
            </svg>
          </span>
          <span className="imessage-name">+1 5512834876</span>
          <span className="imessage-subtitle">Text Message · SMS</span>
          <span className="imessage-subtitle">Sat, Jan 10 at 06:11</span>
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
