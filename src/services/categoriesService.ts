import { endpoints } from './endpoints';
import axios, { AxiosError } from 'axios'


export const getCategories = () => {
   return axios
        .get(endpoints.categories, { headers: { 'Content-Type': 'application/json' } })
        
}