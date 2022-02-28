import { endpoints } from './endpoints';
import axios from "axios"

export const signinFacebook = (): Promise<any> => {

    return axios.post(`${endpoints.signinFacebook}`)
}