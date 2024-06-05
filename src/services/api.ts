import axios from 'axios';
import { key } from '../../key';
import { AsteroidInfo, AsteroidsType } from '@/shared/types';

const BASE_URL = `https://api.nasa.gov/neo/rest/v1/`;
const REQUEST_TIMEOUT = 10000;
const KEY = key;

const createApi = () =>
  axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

interface GetAsteroidsRequest {
  start_date: string;
  end_date?: string;
}

export function getAsteroids(
  params: GetAsteroidsRequest
): Promise<AsteroidsType> {
  const { start_date, end_date } = params;
  return createApi()
    .get('feed', { params: { start_date, end_date, api_key: KEY } })
    .then((res) => res.data.near_earth_objects);
}

export function getAsteroidById(asteroid_id: string): Promise<AsteroidInfo> {
  return createApi()
    .get(`neo/${asteroid_id}`, { params: { api_key: KEY } })
    .then((res) => res.data);
}
