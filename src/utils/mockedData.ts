import { Offer } from "../services/addOffer.types";

export const getOfferById = (id: string) => {
    const { content } = mockedData;
    return content.find(offer => {
        if('id' in offer && typeof offer.id === 'string') {            
            return offer.id === id;
        }
    });
}


export const mockedData = {
    content: [
      {
        id: "86ff8179-fb1e-4156-88f2-b8dd5b97b532",
        title: "title",
        description: "desc",
        telephone: "tel",
        contactName: "contact",
        location: "locale",
        freeSpaceFrom: 4,
        freeSpaceTo: 8,
        active: true,
        created: "2022-02-27T12:13:19.706423",
      },
      {
        id: "86ff8179-fb1e-4156-f288-b8dd5b97b532",
        title: "title 2",
        description: "desc 2",
        telephone: "tel 2",
        contactName: "contact 2",
        location: "locale 2",
        freeSpaceFrom: 14,
        freeSpaceTo: 18,
        active: false,
        created: "2022-02-27T12:13:19.706423",
      },
    ],
    pageable: {
      sort: {
        empty: true,
        sorted: false,
        unsorted: true,
      },
      offset: 0,
      pageSize: 2,
      pageNumber: 0,
      paged: true,
      unpaged: false,
    },
    last: true,
    totalElements: 1,
    totalPages: 1,
    number: 0,
    size: 2,
    first: true,
    sort: {
      empty: true,
      sorted: false,
      unsorted: true,
    },
    numberOfElements: 1,
    empty: false,
  };
