import axios from "axios";
import { BASE_URL, ENDPOINT } from "../constant";

export function FetchAllProduct(params) {
   return axios.get(`${BASE_URL}/${ENDPOINT.allProduct}`)
}