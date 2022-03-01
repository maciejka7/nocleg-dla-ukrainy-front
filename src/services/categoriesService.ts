import { endpoints } from './endpoints';
import axios, { AxiosError } from 'axios'


export const getCategories = () => {
    axios
        .get(endpoints.categories, { headers: { 'Content-Type': 'application/json' } })
        .then(response => { console.log(response.data) })
        .catch(error => { console.log(error) })
};