import { merchantBrand } from "../../merchantBrand";
import GuestIOSStatusBar from "./GuestIOSStatusBar";

function SafariLockIcon() {
  return (
    <svg viewBox="0 0 12 14" width="10" height="12" aria-hidden className="guest-safari-lock-icon">
      <path
        d="M3 6V4.5C3 2.567 4.567 1 6.5 1S10 2.567 10 4.5V6h.5c.828 0 1.5.672 1.5 1.5v6c0 .828-.672 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 3 13.5v-6C3 6.672 3.672 6 4.5 6H3zm1.5 0h5V4.5C9.5 3.12 8.38 2 7 2S4.5 3.12 4.5 4.5V6z"
        fill="currentColor"
      />
    </svg>
  );
}

function SafariReloadIcon() {
  return (
    <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden>
      <path
        d="M8 2.5a5.5 5.5 0 1 1-3.89 1.61.75.75 0 1 1 1.06-1.06A4 4 0 1 0 8 12a4 4 0 0 0 2.83-1.17.75.75 0 0 1 1.06 1.06A5.5 5.5 0 0 1 8 13.5 5.5 5.5 0 0 1 2.5 8 5.5 5.5 0 0 1 8 2.5zm0 1.5a.75.75 0 0 0-.75.75V7a.75.75 0 0 0 1.28.53l1.25-1.25a.75.75 0 0 0-1.06-1.06L8.75 6.44V4.75A.75.75 0 0 0 8 4z"
        fill="currentColor"
      />
    </svg>
  );
}

function SafariShareIcon() {
  return (
    <svg viewBox="0 0 18 22" width="17" height="20" aria-hidden>
      <path
        d="M9 1.5l4.25 4.25-.88.88L9.75 3.67V14h-1.5V3.67L5.63 6.63l-.88-.88L9 1.5zM3.5 8.25A2.25 2.25 0 0 0 1.25 10.5v9A2.25 2.25 0 0 0 3.5 21.75h11a2.25 2.25 0 0 0 2.25-2.25v-9A2.25 2.25 0 0 0 14.5 8.25h-2v1.5h2a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75h-11a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75h2v-1.5h-2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function GuestSurveyBrowser({ children }) {
  const url = `tattleapp.com/${merchantBrand.surveySlug}`;

  return (
    <div className="screen guest-browser-screen guest-in-app-screen">
      <GuestIOSStatusBar />
      <div className="guest-browser-chrome">
        <div className="guest-safari-topbar">
          <button type="button" className="guest-safari-done" aria-label="Done">
            Done
          </button>

          <div className="guest-safari-address-field" aria-label={`Address: ${url}`}>
            <SafariLockIcon />
            <span className="guest-safari-url">{url}</span>
            <button type="button" className="guest-safari-reload" aria-label="Reload">
              <SafariReloadIcon />
            </button>
          </div>

          <button type="button" className="guest-safari-share" aria-label="Share">
            <SafariShareIcon />
          </button>
        </div>
      </div>

      <div className="guest-browser-content">{children}</div>
    </div>
  );
}

export function GuestSurveyCtaLink({ onClick, className = "", children }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}
