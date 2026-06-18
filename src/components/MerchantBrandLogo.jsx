import { merchantBrand } from "../../merchantBrand";

/**
 * Shared Grilling Me Softly logo — matches operator Settings profile branding.
 */
export default function MerchantBrandLogo({
  variant = "profile",
  className = "",
  alt = merchantBrand.name,
}) {
  return (
    <span
      className={`merchant-brand-logo merchant-brand-logo--${variant}${className ? ` ${className}` : ""}`}
      aria-hidden={alt === "" ? true : undefined}
    >
      <img src={merchantBrand.logo} alt={alt} />
    </span>
  );
}
