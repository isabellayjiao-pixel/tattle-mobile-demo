export default function LocationModal({ onCancel, onShare }) {
  return (
    <div className="modal-location-overlay" role="presentation">
      <div className="modal-location" role="dialog" aria-labelledby="location-modal-title">
        <div className="modal-location-body">
          <div className="geo-location">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%230476d1'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z'/%3E%3C/svg%3E" alt="" />
          </div>
          <div className="location-main">
            <div className="location-title-wrap">
              <h3 id="location-modal-title" className="location-title">
                Share your location
              </h3>
            </div>
            <p>
              In order to find the closest location to you, we need your permission to use your location.
            </p>
          </div>
          <div className="location-actions">
            <button type="button" className="btn btn-dismiss" onClick={onCancel}>
              Cancel
            </button>
            <button type="button" className="btn bg-primary btn-close" onClick={onShare}>
              Share Location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
