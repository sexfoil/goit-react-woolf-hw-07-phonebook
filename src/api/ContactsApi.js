import axios from 'axios';

const PATHS = {
  baseUrl: 'https://65f206e0034bdbecc7643e8c.mockapi.io/api/v1',
  contacts: '/contacts',
};

axios.defaults.baseURL = PATHS.baseUrl;

export const findAll = async () => {
  const data = await axios.get(PATHS.contacts);
  return data;
};

export const save = async contact => {
  const data = await axios.post(PATHS.contacts, contact);
  return data;
};

export const deleteById = async id => {
  const data = await axios.delete(`${PATHS.contacts}/${id}`);
  return data;
};
