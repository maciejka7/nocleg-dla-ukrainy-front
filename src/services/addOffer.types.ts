export interface Offer {
    categoryId: string;
    title: string;
    description: string;
    telephone: string;
    contactName: string;
    location: string;
    freeSpaceFrom: number;
    freeSpaceTo: number;
}

export type AddOfferFormData = Omit<Offer, "categoryId">;