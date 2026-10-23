import { Phone, Navigation } from "lucide-react";
import { business } from "../data/business";

/**
 * Mobile-only sticky action bar — the two actions that matter most for a
 * customer arriving from Google Maps or WhatsApp: call, or navigate.
 */
export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sand bg-cream/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-sm md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href={business.phoneHref}
          className="flex items-center justify-center gap-2 rounded-full bg-caramel py-3.5 text-sm font-bold text-cream shadow-card transition-colors active:bg-caramel-deep"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call Now
        </a>
        <a
          href={business.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full bg-espresso py-3.5 text-sm font-bold text-cream transition-colors active:bg-cocoa"
        >
          <Navigation className="h-4 w-4" aria-hidden="true" />
          Directions
        </a>
      </div>
    </div>
  );
}
