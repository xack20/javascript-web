import axios from 'axios';

export const login = ({username,password}) => {
    return axios({
        method: 'post',
        url: "/api/v1/auth/login",
        data: {
            "username": username,
            "password": password
        },
        withCredentials: true
      });
};

export const  logout =  () => {
    localStorage.clear();
    return axios.get('/api/v1/auth/logout', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('_tkn_')}`
        }
    });
};



export const refreshToken =  () => {
    return axios.get('/api/v1/auth/refresh', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('_tkn_')}`
        },
        data: {
            'token': localStorage.getItem('_rftkn_')
        }
    });
};
