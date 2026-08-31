// Centralized, factual business details. Keep every address, phone number,
// and destination link here so the rest of the site never repeats a magic
// string. Nothing in this file is translated; copy that needs both
// languages lives in src/lib/i18n/dictionaries.

export const business = {
  name: "Happy Bedding",
  nameKo: "행복한 이불집",
  phoneDisplay: "(646) 372-1133",
  phoneHref: "tel:+16463721133",
  address: {
    line1: "150-29 Northern Blvd",
    line2: "Flushing, NY 11354",
    mapsUrl: "https://www.google.com/maps/dir//150-29+Northern+Blvd,+Flushing,+NY+11354",
  },
  googleReviewUrl: "https://google.com/yGIdbuUqfrKBytPms",
  yearsInBusiness: 9,
  novusUrl: "https://novusnyc.org",
} as const

export const navRoutes = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/collections", key: "collections" },
  { href: "/visit", key: "visit" },
] as const
