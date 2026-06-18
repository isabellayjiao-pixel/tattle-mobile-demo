import { merchantBrand } from "../../merchantBrand";
import MerchantBrandLogo from "../components/MerchantBrandLogo";
import GuestIOSStatusBar from "./GuestIOSStatusBar";

export default function GuestEmailInvite({ onOpenSurvey }) {
  return (
    <div className="screen guest-email-screen guest-in-app-screen">
      <GuestIOSStatusBar />
      <header className="guest-email-meta">
        <div className="guest-email-meta-row">
          <span className="guest-email-meta-label">From:</span>
          <span>{merchantBrand.emailFrom}</span>
        </div>
        <div className="guest-email-meta-row">
          <span className="guest-email-meta-label">Subject:</span>
          <span>{merchantBrand.emailSubject}</span>
        </div>
      </header>

      <div className="guest-email-scroll">
        <h1 className="guest-email-title">We Want to Hear From You!</h1>

        <div className="guest-email-hero">
          <img className="guest-email-hero-img" src={merchantBrand.banner} alt="" />
          <MerchantBrandLogo variant="email-hero" className="guest-email-hero-logo" />
        </div>

        <div className="guest-email-body">
          <h2>{merchantBrand.name}</h2>
          <p>Hi there,</p>
          <p>
            Thank you for choosing <strong>{merchantBrand.name}</strong>! We&apos;d love to hear about your
            experience, as feedback is very important to us and helps us continuously improve.
          </p>
          <p>We hope you will take a few minutes to share yours by clicking the link below.</p>
          <p>We look forward to serving you again soon.</p>
          <p>
            Best regards,
            <br />
            {merchantBrand.teamSignature}
          </p>

          <button type="button" className="guest-email-cta" onClick={onOpenSurvey}>
            Give Feedback
          </button>

          <p className="guest-email-fallback">
            or visit{" "}
            <button type="button" className="guest-link-btn" onClick={onOpenSurvey}>
              {merchantBrand.surveyUrl}?ref=toast&amp;email=&#123;&#123;email&#125;&#125;
            </button>
          </p>
        </div>

        <footer className="guest-email-footer">
          <p>
            You&apos;re receiving this email because of your recent transaction with {merchantBrand.name}. You
            can unsubscribe from future emails like this. This message was sent on behalf of{" "}
            {merchantBrand.name} by Tattle, a Customer Experience Improvement platform.{" "}
            <button type="button" className="guest-link-btn">Unsubscribe</button>
          </p>
        </footer>
      </div>
    </div>
  );
}
