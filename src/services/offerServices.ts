import { endpoints } from "./endpoints";
import axios from "axios";
import { AddOfferFormData, UpdateOfferFormData } from "./addOffer.types";

export const createOffer = async (offer: AddOfferFormData) => {
  console.log(offer);

  await axios.post(endpoints.createOffer, offer);
};

export const activateOffer = async (offer: UpdateOfferFormData) => {
  const id = offer.id;
  console.log(id);
  await axios.post(`${endpoints.createOffer}/${id}/activate`, offer);
};

export const deactivateOffer = async (offer: UpdateOfferFormData) => {
  const id = offer.id;
  console.log(id);
  await axios.post(`${endpoints.createOffer}/${id}/deactivate`, offer);
};

export const deletOffer = async (offer: UpdateOfferFormData) => {
  const id = offer.id;
  console.log(id);
  await axios.delete(`${endpoints.createOffer}/${id}`);
};

export const listOffers = () => {
  return {
    content: [
      {
        id: "3c2992ac-2c20-44d3-b09d-026133328083",
        title: "title",
        voivodeship: "Kujawsko-pomorskie",
        city: "Katowice",
        freeSpaceFrom: 2,
        freeSpaceTo: 7,
        active: true,
        created: "2022-02-28T19:23:27.086534",
      },
      {
        id: "779c8066-6e6e-4c65-8493-fff04b2a8574",
        title: "title",
        voivodeship: "Kujawsko-pomorskie",
        city: "Katowice",
        freeSpaceFrom: 2,
        freeSpaceTo: 7,
        active: true,
        created: "2022-02-28T19:40:01.197252",
      },
    ],
    pageable: {
      sort: {
        empty: true,
        sorted: false,
        unsorted: true,
      },
      offset: 0,
      pageNumber: 0,
      pageSize: 10,
      paged: true,
      unpaged: false,
    },
    last: true,
    totalElements: 2,
    totalPages: 1,
    first: true,
    sort: {
      empty: true,
      sorted: false,
      unsorted: true,
    },
    size: 10,
    number: 0,
    numberOfElements: 2,
    empty: false,
  };
};
