import { merchantBrand } from "../../../../merchantBrand";
import MerchantBrandLogo from "../../../components/MerchantBrandLogo";
import LocationModal from "../components/LocationModal";

export default function LocationStep({
  locationQuery,
  onLocationQueryChange,
  filteredLocations,
  showLocationModal,
  onOpenLocationModal,
  onCloseLocationModal,
  onSelectLocation,
  onUseNearestLocation,
}) {
  return (
    <div className="survey-block">
      <div className="survey-block-label">Where was your experience?</div>
      <div className="panel-body location-panel location-search-active">
        <div className="location-search">
          <div className="search-input">
            <div className="search-icon" aria-hidden>
              <i className="fa fa-search" />
            </div>
            <input
              id="locationfilter"
              type="search"
              placeholder="Filter by store name, city, state or zip"
              value={locationQuery}
              onChange={(e) => onLocationQueryChange(e.target.value)}
            />
          </div>
          <button type="button" className="nearest-location-search" onClick={onOpenLocationModal}>
            <img
              className="location-pin-icon"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%230476d1'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z'/%3E%3C/svg%3E"
              alt=""
            />
            <div>Use your location to find nearest location</div>
          </button>
        </div>
        <ul className="location-listbox">
          {filteredLocations.map((loc) => (
            <li key={loc.id}>
              <button type="button" className="location-item" onClick={() => onSelectLocation(loc)}>
                <MerchantBrandLogo variant="location" className="location-logo" alt="" />
                <div className="location-copy">
                  <b className="location-title">{loc.name}</b>
                  <span className="location-address">
                    {loc.address}
                    <br />
                    {loc.city}, {loc.state}
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {showLocationModal ? (
        <LocationModal onCancel={onCloseLocationModal} onShare={onUseNearestLocation} />
      ) : null}
    </div>
  );
}
