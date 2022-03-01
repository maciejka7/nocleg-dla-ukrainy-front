export interface Offer {
id: string,
  title: string;
  description: string;
  telephone: string;
  contactName: string;
  voivodeship: string;
  categoryId: string;
  city: string;
  freeSpaceFrom: number;
  freeSpaceTo: number;
  created: string;
  active: boolean;
}

export type AddOfferFormData = Pick<
  Offer,
  | "categoryId"
  | "city"
  | "contactName"
  | "description"
  | "telephone"
  | "title"
  | "voivodeship"
  | "freeSpaceFrom"
  | "freeSpaceTo"
>;


export type UpdateOfferFormData = Pick<
  Offer,
  | "id"
  | "active"
>;
