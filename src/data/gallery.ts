/**
 * Gallery imagery for Sip & Bite Cafe.
 *
 * ⚠️  DEMO PHOTOGRAPHY — legally licensed stock photos used for development.
 * They do NOT depict the actual cafe and must be swapped for the owner's real
 * photographs before launch. Replace `src` (and adjust `alt` / `caption`)
 * below; the gallery + lightbox pick up changes automatically.
 */

export interface GalleryImage {
  id: string;
  src: string;
  full: string;
  alt: string;
  caption: string;
  /** Editorial layout hint for the masonry grid. */
  orientation: "portrait" | "landscape" | "square";
}

const px = (id: number, w: number, h: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

const item = (
  id: number,
  caption: string,
  alt: string,
  orientation: GalleryImage["orientation"],
): GalleryImage => {
  const dims =
    orientation === "portrait"
      ? ([760, 1000] as const)
      : orientation === "square"
        ? ([820, 820] as const)
        : ([1100, 760] as const);
  return {
    id: `g-${id}`,
    src: px(id, dims[0], dims[1]),
    full: px(id, 1600, orientation === "portrait" ? 2000 : 1100),
    alt,
    caption,
    orientation,
  };
};

export const galleryImages: GalleryImage[] = [
  item(
    2221925,
    "Warm corners & soft light",
    "Rustic cafe interior with warm pendant lighting and wooden decor",
    "landscape",
  ),
  item(
    9011742,
    "The smash burger, plated",
    "Burger with sesame bun and crispy fries served in a basket",
    "portrait",
  ),
  item(
    30707441,
    "Latte art, every cup",
    "Latte with latte art in a rustic ceramic cup on a wooden table",
    "portrait",
  ),
  item(
    18437686,
    "Straight from the oven",
    "Close-up of a margherita pizza with fresh basil on a wooden board",
    "square",
  ),
  item(
    30294329,
    "A room that breathes",
    "Stylish cafe interior with modern decor and lush greenery",
    "landscape",
  ),
  item(
    29200682,
    "Shakes worth the straw",
    "Tall chocolate milkshake topped with whipped cream",
    "portrait",
  ),
  item(
    1137745,
    "Behind the counter",
    "Barista preparing coffee behind a charming cafe counter",
    "landscape",
  ),
  item(
    36662612,
    "Chai, the Punjabi way",
    "Masala chai served in traditional clay cups",
    "square",
  ),
  item(
    37604037,
    "Cold brew for hot days",
    "Tall glass of iced coffee with a straw on a sunny day",
    "portrait",
  ),
];
