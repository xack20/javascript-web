import axios from 'axios';

export const dashboard = () => {
  return axios.get('/api/v1');
};
