import { useState } from "react";
import { IconChevronDown, IconRefresh } from "../icons";

const INVITE_TYPES = [
  {
    id: "email",
    label: "Email Invite",
    description: "Branded feedback request email with hero image and CTA button.",
  },
  {
    id: "sms",
    label: "SMS Invite",
    description: "Text message notification with a short link to the survey.",
  },
  {
    id: "rcs",
    label: "RCS Invite",
    description: "Rich business message card with image, headline, and CTA.",
  },
];

export default function GuestDemoSidebar({ activeInvite, onReset, onTrigger }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`demo-push-sidebar guest-demo-sidebar ${collapsed ? "is-collapsed" : ""}`}>
      <header className="demo-panel-topbar app-topbar">
        <div className="demo-panel-topbar-row">
          <div className="demo-panel-head">
            <h2>Survey Invite Panel</h2>
            <p>Trigger guest survey invites inside the phone frame.</p>
          </div>
          <button
            className="circle-btn demo-sidebar-toggle"
            type="button"
            onClick={() => setCollapsed((c) => !c)}
            aria-expanded={!collapsed}
            aria-label={collapsed ? "Expand survey invite panel" : "Collapse survey invite panel"}
          >
            <IconChevronDown width={18} height={18} />
          </button>
        </div>
      </header>

      <div className="demo-panel-body" aria-hidden={collapsed}>
        <div className="demo-panel-body-inner">
          <div className="demo-panel-toolbar">
            <button className="btn-primary demo-reset-btn" type="button" onClick={onReset}>
              <IconRefresh width={16} height={16} />
              Reset Guest View
            </button>
          </div>

          <div className="demo-panel-list inbox-list guest-invite-list">
            {INVITE_TYPES.map((item) => (
              <button
                key={item.id}
                className={`inbox-item demo-push-item guest-invite-item ${activeInvite === item.id ? "active" : ""}`}
                type="button"
                onClick={() => onTrigger(item.id)}
              >
                <div className="inbox-main">
                  <div className="row-top">
                    <strong className="row-name">{item.label}</strong>
                    <span className="tag-chip chip-neu">{item.id.toUpperCase()}</span>
                  </div>
                  <p className="row-preview">{item.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
