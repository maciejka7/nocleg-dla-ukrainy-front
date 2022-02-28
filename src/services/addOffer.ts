import { v4 } from 'uuid'
import { Offer, AddOfferFormData } from './addOffer.types'


export const createOffertRequest = async (offer: AddOfferFormData ) => {

    const result: Offer = {
        id: v4(),
        title: offer.title,
        description: offer.description,
        telephone: offer.telephone,
        contactName: offer.contactName,
        location: offer.location,
        freeSpaceFrom: offer.freeSpaceFrom,
        freeSpaceTo: offer.freeSpaceTo,
        created: new Date().toISOString(),
        active: false

    }
}