import axios from 'axios'




export const allEmployees = async () => {
  var config = {
    method: 'get',
    url: '/api/v1/employee/',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('_tkn_'),
    },
  }

  return await axios(config)
}



export const employeeProfile = async (user_id) => {
  var config = {
    method: 'get',
    url: '/api/v1/employee/' + parseInt(user_id),
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('_tkn_'),
    },
  }

  return await axios(config)
}



export const addEmployee = async (Data) => {
  var data = Data

  var config = {
    method: 'post',
    url: '/api/v1/employee/add',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('_tkn_'),
    },
    data: data,
  }

  return await axios(config)
}



export const deleteEmployee = async (user_id) => {
   var config = {
    method: 'delete',
    url: '/api/v1/employee/delete/' + parseInt(user_id),
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('_tkn_'),
    },
    data: {
      "employee" : {
        "deleted" : true
      }
    },
  }


  return await axios(config)
}



export const updateEmployee = async (Data,user_id) => {
  var data = Data

  var config = {
    method: 'put',
    url: '/api/v1/employee/update/'+ parseInt(user_id),
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('_tkn_'),
    },
    data: data,
  }

  return await axios(config)
}