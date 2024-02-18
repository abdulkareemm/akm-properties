export const propertyTypes = [
  { value: "house", label: "House" },
  { value: "apartment", label: "Apartment" },
  { value: "villa", label: "Villa" },
  { value: "cottage", label: "Cottage" },
  { value: "land", label: "Land" },
  { value: "other", label: "Other" },
];

export const propertyStatuses = [
  { value: "rent", label: "Rent" },
  { value: "sale", label: "Sale" },
];

export const cities = [
  "Hyderabad",
  "Chennai",
  "Bangalore",
  "Delhi",
  "Mumbai",
  "Kolkata",
];

export const parkingTypes = [
  { value: "covered", label: "Covered" },
  { value: "open", label: "Open" },
  { value: "none", label: "None" },
];

export const furnishingTypes = [
  { value: "furnished", label: "Furnished" },
  { value: "semi-furnished", label: "Semi-Furnished" },
  { value: "unfurnished", label: "Unfurnished" },
];

export const facingTypes = [
  { value: "east", label: "East" },
  { value: "west", label: "West" },
  { value: "north", label: "North" },
  { value: "south", label: "South" },
  { value: "north-east", label: "North-East" },
  { value: "north-west", label: "North-West" },
  { value: "south-east", label: "South-East" },
  { value: "south-west", label: "South-West" },
];

export const subscriptionPlans = [
  {
    name: "Basic",
    price: 0,
    propertiesLimit: 3,
    imagesPerPropertyLimit: 3,
    features: [
      "Free for lifetime",
      "Property Listing",
      "Property Details",
      "3 Images per Property",
      "3 Properties Limit",
      "Property Search",
    ],
  },
  {
    name: "Standard",
    price: 10,
    propertiesLimit: 10,
    imagesPerPropertyLimit: 5,
    features: [
      "Property Listing",
      "Property Details",
      "5 Images per Property",
      "10 Properties Limit",
      "Property Search",
      "AI Support",
      "24/7 Support on Email",
    ],
  },
  {
    name: "Premium",
    price: 25,
    propertiesLimit: 100,
    imagesPerPropertyLimit: 15,
    features: [
      "Property Listing",
      "Property Details",
      "15 Images per Property",
      "100 Properties Limit",
      "Property Search",
      "AI Support",
      "24/7 Support on Email",
      "24/7 Support on Phone",
      "Personal Account Manager",
    ],
  },
];
