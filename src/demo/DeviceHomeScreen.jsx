/** Shared iOS lock screen used by operator and guest demos. */
export default function DeviceHomeScreen({ hint }) {
  return (
    <div className="screen lock-screen">
      <div className="lock-wallpaper" aria-hidden />

      <div className="lock-content">
        <div className="lock-status">
          <span className="lock-date">Friday, May 29</span>
          <span className="lock-time">7:42</span>
        </div>

        {hint ? <p className="device-home-hint">{hint}</p> : null}

        <div className="lock-bottom">
          <div className="lock-home-indicator" />
        </div>
      </div>
    </div>
  );
}
