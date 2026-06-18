export const PHONE_BEZEL = 10;
export const PHONE_WIDTH = 382;
export const PHONE_HEIGHT = 834;
export const SHELL_WIDTH = PHONE_WIDTH + PHONE_BEZEL * 2;
export const SHELL_HEIGHT = PHONE_HEIGHT + PHONE_BEZEL * 2;

export default function IPhoneShell({ children }) {
  return (
    <div
      className="shell-wrap phone-device"
      style={{
        width: `${SHELL_WIDTH}px`,
        height: `${SHELL_HEIGHT}px`,
        "--phone-bezel": `${PHONE_BEZEL}px`,
      }}
    >
      <div className="phone-notch" />
      <div className="phone-screen">{children}</div>
    </div>
  );
}
