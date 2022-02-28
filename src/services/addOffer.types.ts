export interface Offer {
    id: string;
    title: string;
    description: string;
    telephone: string;
    contactName: string;
    location: string;
    freeSpaceFrom: number;
    freeSpaceTo: number;
    created: string;
    active: boolean;
}

export type AddOfferFormData = Omit<Offer, "id">;