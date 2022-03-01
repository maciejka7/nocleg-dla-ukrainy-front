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

categoryId: "81b84c69-1c9a-418f-8538-66e47041a65a";
city: "asdfasdfasdf";
contactName: "na razie na sztywno ;>";
description: "asdffdscqwerwercqqwevr hdg wy53 sdfg";
telephone: "123123123";
title: "asdfasdfdfas123";
voivodeship: "2";
