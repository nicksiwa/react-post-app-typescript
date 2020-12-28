import axios from 'axios';
import { config } from '../config';

export const service = () => {
  return axios.create({
    baseURL: config.BASE_API_URL
  });
}
