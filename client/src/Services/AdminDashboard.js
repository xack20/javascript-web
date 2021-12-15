import axios from 'axios';

export const demo = () => {
  return axios.get('/api/v1/');
};
