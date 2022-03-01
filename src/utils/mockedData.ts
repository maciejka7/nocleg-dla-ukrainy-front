import { Offer } from "../services/addOffer.types";

export const getOfferById = (id: string) => {
  categoryId: ""
    const { content } = mockedData;
    return content.find(offer => {
        if('id' in offer && typeof offer.id === 'string') {            
            return offer.id === id;
        }
    });
}

type MockedDataResponst = {
  content: Offer[];
  [x: string]: any;
}

export const mockedData: MockedDataResponst = {
    content: [
      {
        id: "86ff8179-fb1e-4156-88f2-b8dd5b97b532",
        categoryId: "a21577a9-412e-4269-b6e7-e6369078ab22",
        title: "title",
        description: "desc",
        telephone: "tel",
        contactName: "contact",
        voivodeship: "locale",
        city: "City",
        freeSpaceFrom: 4,
        freeSpaceTo: 8,
        active: true,
        created: "2022-02-27T12:13:19.706423",
      },
      {
        id: "86ff8179-fb1e-4156-f288-b8dd5b97b532",
        categoryId: "81b84c69-1c9a-418f-8538-66e47041a65a",
        title: "title 2",
        description: "desc 2",
        telephone: "tel 2",
        contactName: "contact 2",
        voivodeship: "locale 2",
        city: "City",
        freeSpaceFrom: 14,
        freeSpaceTo: 18,
        active: false,
        created: "2022-02-27T12:13:19.706423",
      },
      {
        id: "86ff8123-fb1e-4156-f288-b8dd5b97b532",
        categoryId: "a21577a9-412e-4269-b6e7-e6369078ab22",
        title: "title 3",
        description: "desc 3",
        telephone: "tel 3",
        contactName: "contact 3",
        voivodeship: "locale 3",
        city: "City",
        freeSpaceFrom: 14,
        freeSpaceTo: 18,
        active: false,
        created: "2022-02-27T12:13:19.706423",
      },
      {
        id: "86ff8321-fb1e-4156-f288-b8dd5b97b532",
        categoryId: "81b84c69-1c9a-418f-8538-66e47041a65a",
        title: "title 4",
        description: "desc 4",
        telephone: "tel 4",
        contactName: "contact 4",
        voivodeship: "locale 4",
        city: "City",
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
