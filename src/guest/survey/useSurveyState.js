import { useMemo, useState } from "react";
import {
  categoryNeedsMore,
  dateOptions,
  guestLocations,
  timeOptions,
} from "./surveyConfig";

export function useSurveyState() {
  const [locationQuery, setLocationQuery] = useState("");
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [experience, setExperience] = useState("pickup");
  const [dateIdx, setDateIdx] = useState(1);
  const [timeIdx, setTimeIdx] = useState(2);
  const [overallRating, setOverallRating] = useState(0);
  const [categoryData, setCategoryData] = useState({});
  const [email, setEmail] = useState("");
  const [nps, setNps] = useState("");
  const [frequency, setFrequency] = useState("");
  const [additionalComment, setAdditionalComment] = useState("");
  const [photoSelected, setPhotoSelected] = useState(false);

  const filteredLocations = useMemo(() => {
    const q = locationQuery.trim().toLowerCase();
    if (!q) return guestLocations;
    return guestLocations.filter(
      (loc) =>
        loc.name.toLowerCase().includes(q) ||
        loc.city.toLowerCase().includes(q) ||
        loc.address.toLowerCase().includes(q)
    );
  }, [locationQuery]);

  const getCategory = (id) => categoryData[id] ?? { rating: 0, factors: {}, comment: "" };

  const setCategory = (id, patch) => {
    setCategoryData((cur) => ({
      ...cur,
      [id]: { ...getCategory(id), ...patch },
    }));
  };

  const canAdvance = (step) => {
    switch (step.type) {
      case "location":
        return Boolean(selectedLocation);
      case "visit":
        return Boolean(selectedLocation && experience);
      case "stars":
        return overallRating > 0;
      case "category": {
        const data = getCategory(step.id);
        if (!data.rating) return false;
        return !categoryNeedsMore(data.rating, data.factors, data.comment);
      }
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
      case "additional":
        return Boolean(nps && frequency);
      default:
        return true;
    }
  };

  return {
    locationQuery,
    setLocationQuery,
    showLocationModal,
    setShowLocationModal,
    selectedLocation,
    setSelectedLocation,
    experience,
    setExperience,
    dateIdx,
    setDateIdx,
    timeIdx,
    setTimeIdx,
    overallRating,
    setOverallRating,
    getCategory,
    setCategory,
    email,
    setEmail,
    nps,
    setNps,
    frequency,
    setFrequency,
    additionalComment,
    setAdditionalComment,
    photoSelected,
    setPhotoSelected,
    filteredLocations,
    canAdvance,
    dateOptions,
    timeOptions,
  };
}
