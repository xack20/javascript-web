import axios from 'axios';

const login = ({username,password}) => {
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

const  logout =  () => {
    localStorage.clear();
    return axios({
        method: 'post',
        url: "/api/v1/auth/logout",
        data: {
            "id" : `${localStorage.getItem('_uid_')}`
        },
        withCredentials: true
      });
};



const accessTokenRefresh =  () => {
    return axios({
        method: 'post',
        url: "/api/v1/auth/refresh-token",
        data: {
            "refToken": `${localStorage.getItem('_rftkn_')}`
        }
      });
};


// const parseJwt = (token) => {
//     try {
//       return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString('ascii'));
//     } catch (e) {
//       return null;
//     }
//   };

// const recheck = (status,recall) => {
//     const token = localStorage.getItem('_tkn_');
//     const refToken = localStorage.getItem('_rftkn_');
//     const decodedJwt = parseJwt(token);
//     if (decodedJwt.exp * 1000 < Date.now()) {
//         refreshToken().then(res => {
//             if (res.status === 200) {
//                 localStorage.setItem('_tkn_', res.data.accessToken);
//                 localStorage.setItem('_rftkn_', res.data.refreshToken);
//                 // recall();
//                 console.log("ok");
//             }
//         });
//         // console.log(res);
//         // recall();
//     }
//     // console.log(decodeJWt);
//     // recall();
// }

export {login,logout,accessTokenRefresh};

