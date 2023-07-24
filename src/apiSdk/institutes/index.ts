import axios from 'axios';
import queryString from 'query-string';
import { InstituteInterface, InstituteGetQueryInterface } from 'interfaces/institute';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getInstitutes = async (
  query?: InstituteGetQueryInterface,
): Promise<PaginatedInterface<InstituteInterface>> => {
  const response = await axios.get('/api/institutes', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createInstitute = async (institute: InstituteInterface) => {
  const response = await axios.post('/api/institutes', institute);
  return response.data;
};

export const updateInstituteById = async (id: string, institute: InstituteInterface) => {
  const response = await axios.put(`/api/institutes/${id}`, institute);
  return response.data;
};

export const getInstituteById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/institutes/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteInstituteById = async (id: string) => {
  const response = await axios.delete(`/api/institutes/${id}`);
  return response.data;
};
