import { locations } from "../../../dummyData";

export const guestLocations = locations.slice(0, 10).map((loc) => ({
  id: loc.id,
  name: loc.name.includes(" – ") ? loc.name.split(" – ").pop() : loc.name,
  address: loc.address,
  city: loc.city,
  state: loc.state,
}));

export const experienceTypes = [
  { id: "pickup", label: "Online Order Pick-up" },
  { id: "delivery", label: "Delivery" },
];

export const dateOptions = ["Yesterday", "Today", "Tomorrow"];
export const timeOptions = [
  "12:00 pm - 1:00 pm",
  "1:00 pm - 2:00 pm",
  "5:00 pm - 6:00 pm",
  "6:00 pm - 7:00 pm",
];

export const npsOptions = [
  "Highly Likely",
  "Likely",
  "Neutral",
  "Unlikely",
  "Highly Unlikely",
];

export const frequencyOptions = [
  "First time!",
  "Once or twice per week",
  "Once every few weeks",
  "Once every few months",
];

/** Menu items shown on the post-survey success screen (menu-level feedback). */
export const postSurveyMenuItems = [
  { id: "cheeseburger", label: "Classic Cheeseburger" },
  { id: "sweet-potato-fries", label: "Sweet Potato Fries" },
  { id: "house-lemonade", label: "House Lemonade" },
];

/** Single third-party review provider on the success screen. */
export const postSurveyReviewProvider = {
  id: "google",
  label: "Google",
  url: "https://www.google.com/maps/search/Grilling+Me+Softly+reviews",
};

/** Ordered survey flow — mirrors tattleapp.com/tatte step sequence. */
export const surveyFlow = [
  { id: "location", type: "location", progress: 0 },
  { id: "visit", type: "visit", progress: 8 },
  {
    id: "overall",
    type: "stars",
    question: "How would you rate your overall experience?",
    progress: 14,
  },
  {
    id: "email",
    type: "email",
    question: "Please enter your email address",
    progress: 50,
  },
  {
    id: "online-ordering",
    type: "category",
    title: "Online Ordering",
    question: "How satisfied are you with the online ordering process?",
    commentLabel: "Comments about Online Ordering:",
    factors: [
      "Location Selection",
      "Date/Time Pick-Up Availability",
      "Menu Navigation",
      "Item Availability",
      "Order Customization",
      "Checkout Process",
    ],
    progress: 58,
  },
  {
    id: "pickup",
    type: "category",
    title: "Pick-up",
    question: "How satisfied are you with the overall pick-up experience?",
    commentLabel: "Comments about Pick-up:",
    factors: [
      "Friendliness of Cafe Team",
      "Locating Order",
      "Order Ready at Quoted Time",
    ],
    progress: 66,
  },
  {
    id: "food-quality",
    type: "category",
    title: "Food Quality",
    question: "How satisfied are you with the overall quality of your food?",
    commentLabel: "Comments about Food Quality:",
    factors: ["Freshness", "Flavor", "Temperature", "Texture", "Presentation"],
    progress: 74,
  },
  {
    id: "accuracy",
    type: "category",
    title: "Accuracy",
    question: "How satisfied are you with the accuracy of your order?",
    commentLabel: "Comments about Accuracy:",
    factors: ["Order Completeness", "Modifier Requests"],
    progress: 82,
  },
  {
    id: "meal-packaging",
    type: "category",
    title: "Meal Packaging",
    question: "How satisfied are you with the overall packaging of your meal?",
    commentLabel: "Comments about Meal Packaging:",
    factors: [
      "Organization",
      "Durability",
      "Moisture Content",
      "Holds Temperature",
      "Eco Friendliness",
    ],
    progress: 90,
  },
  { id: "additional", type: "additional", progress: 94 },
  { id: "success", type: "success", progress: 100 },
];

export function categoryNeedsMore(rating, factors, comment) {
  if (rating > 3) return false;
  const hasNegative = Object.values(factors).some((v) => v === "negative");
  return !hasNegative && !comment.trim();
}
