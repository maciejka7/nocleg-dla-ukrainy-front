import { endpoints } from "./endpoints";
import axios, { AxiosError } from "axios";

export type CategoriesResponseType = {
  id: string;
  title: string;
  description: string;
};

export const getCategories = () => {
  return axios.get<CategoriesResponseType[]>(endpoints.categories, {
    headers: { "Content-Type": "application/json" },
  });
};
