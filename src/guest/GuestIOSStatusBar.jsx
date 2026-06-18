/** Compact iOS status bar for guest in-phone screens (clears Dynamic Island). */
export default function GuestIOSStatusBar({ dark = false }) {
  return (
    <div className={`guest-ios-status-bar${dark ? " guest-ios-status-bar-dark" : ""}`} aria-hidden>
      <span className="guest-ios-status-time">9:41</span>
      <span className="guest-ios-status-icons">
        <svg viewBox="0 0 17 11" width="17" height="11" aria-hidden>
          <rect x="0" y="7" width="3" height="4" rx="0.5" fill="currentColor" />
          <rect x="4.5" y="5" width="3" height="6" rx="0.5" fill="currentColor" />
          <rect x="9" y="2.5" width="3" height="8.5" rx="0.5" fill="currentColor" />
          <rect x="13.5" y="0" width="3" height="11" rx="0.5" fill="currentColor" />
        </svg>
        <svg viewBox="0 0 16 12" width="16" height="12" aria-hidden>
          <path
            d="M8 2.2c2.1 0 4 .8 5.5 2.1l1.2-1.2C12.8 1.4 10.5.5 8 .5S3.2 1.4 1.3 3.1l1.2 1.2C4 3 5.9 2.2 8 2.2zm0 3.5c1.3 0 2.5.5 3.4 1.3l1.2-1.2C11.2 4.5 9.7 4 8 4s-3.2.5-4.6 1.8l1.2 1.2c.9-.8 2.1-1.3 3.4-1.3zm0 3.5c.7 0 1.3.3 1.8.7l1.8-1.8C10.4 7.2 9.3 6.8 8 6.8s-2.4.4-3.6 1.1l1.8 1.8c.5-.4 1.1-.7 1.8-.7zM8 12l-1.2-1.2h2.4L8 12z"
            fill="currentColor"
          />
        </svg>
        <svg viewBox="0 0 25 12" width="25" height="12" aria-hidden>
          <rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke="currentColor" fill="none" />
          <rect x="2" y="2" width="16" height="8" rx="1.5" fill="currentColor" />
          <rect x="22" y="4" width="2.5" height="4" rx="1" fill="currentColor" />
        </svg>
      </span>
    </div>
  );
}
