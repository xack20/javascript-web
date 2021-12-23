import axios from 'axios'

export const dashboard = () => {
  return axios.get('/api/v1', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('_tkn_')}`,
    },
  })
}
