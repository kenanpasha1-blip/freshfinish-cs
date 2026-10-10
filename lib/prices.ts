/**
 * End of tenancy price list. Single source for the price calculator; keep in
 * step with the PDF price list sent to agents (Dropbox: Fresh Finish Documents).
 * All figures are starting prices in pounds and include one bathroom.
 */

export type PropertyType = "flat" | "house";

export type SizeOption = {
  id: string;
  label: string;
  /** null = not offered for this property type; "quote" = priced after a visit. */
  flat: number | null | "quote";
  house: number | null | "quote";
};

export const sizes: SizeOption[] = [
  { id: "studio", label: "Studio", flat: 120, house: null },
  { id: "1-bed", label: "1 bedroom", flat: 160, house: null },
  { id: "2-bed", label: "2 bedrooms", flat: 200, house: 220 },
  { id: "3-bed", label: "3 bedrooms", flat: 240, house: 260 },
  { id: "4-bed", label: "4 bedrooms", flat: 280, house: 300 },
  { id: "5-bed", label: "5 bedrooms", flat: null, house: 340 },
  { id: "6-bed", label: "6 bedrooms or more", flat: null, house: "quote" },
];

/** Sizes where the price is only a floor: large or high-spec homes are confirmed after a visit. */
export const confirmAfterVisit = new Set(["5-bed"]);

export const extras = {
  extraBathroom: 20,
  whiteGoods: 55,
  carpetPerRoom: 80,
};

export const whiteGoodsIncludes = "Oven, fridge freezer, washing machine and tumble dryer";
