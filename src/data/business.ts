/**
 * Centralized business information for Sip & Bite Cafe.
 *
 * NOTE FOR THE OWNER / DEVELOPER:
 * - Opening hours are intentionally omitted until confirmed by the owner.
 * - `rating` / `reviewCount` were supplied via the client's Google Maps listing
 *   and MUST be re-verified before the site goes live (set `ratingVerified`).
 * - No email or social accounts are listed because none have been verified.
 */

export const business = {
  name: "Sip & Bite",
  fullName: "Sip & Bite Cafe",
  locale: "Narot Jaimal Singh",
  tagline: "Good food, great sips, better moments.",
  description:
    "A neighborhood cafe opposite GNDU Campus serving freshly prepared bites, specialty brews and thick shakes — made for slow mornings and long evenings.",

  address: {
    line1: "Opposite Guru Nanak Dev University",
    line2: "Dinanagar–Narot Jaimal Singh Road",
    city: "Narot Jaimal Singh",
    state: "Punjab",
    pincode: "145026",
    country: "India",
  },

  phoneDisplay: "+91 99065 70982",
  phoneHref: "tel:+919906570982",

  plusCode: "8F22+9W Narot Jaimal Singh, Punjab",

  /** Set to true only after confirming the Google listing shows 5.0 from 9 reviews. */
  ratingVerified: false,
  rating: 5.0,
  reviewCount: 9,

  /**
   * Destination built from the supplied Plus Code so it resolves to the exact
   * location. Re-verify in a browser before publishing.
   */
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("Sip & Bite Cafe, 8F22+9W Narot Jaimal Singh, Punjab 145026"),

  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Sip & Bite Cafe, 8F22+9W Narot Jaimal Singh, Punjab"),

  mapEmbedUrl:
    "https://maps.google.com/maps?q=" +
    encodeURIComponent("8F22+9W Narot Jaimal Singh, Punjab") +
    "&z=15&output=embed",

  /** Opening hours — populate only once the owner confirms them. */
  openingHours: null as string | null,

  /** Verified social profiles only. Empty for now. */
  socials: [] as { label: string; href: string }[],
};

export const formatAddress = (a = business.address) =>
  `${a.line1}, ${a.line2}, ${a.city}, ${a.state} ${a.pincode}`;
