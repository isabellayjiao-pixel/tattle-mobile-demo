import MerchantBrandLogo from "../../../components/MerchantBrandLogo";
import { merchantBrand } from "../../../../merchantBrand";

export default function SurveyLayout({ progress, children }) {
  return (
    <div className="page-merchant tattle-survey-page">
      <header className="merchant-header">
        <div className="merchant-header-visual b-primary">
          <div className="merchant-header-content text-center">
            <img className="banner-merchant" src={merchantBrand.banner} alt="" />
            <MerchantBrandLogo variant="survey" className="circle-logo-merchant" />
          </div>
        </div>
      </header>
      <div
        className="progress progress-survey"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <div className="merchant-survey-panel">
        <section className="survey-panel">{children}</section>
      </div>
    </div>
  );
}
