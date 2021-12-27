import axios from "axios";

export const allEmployees = async() => {
  var config = {
    method: "get",
    url: "/api/v1/employee/",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("_tkn_"),
    },
  };

    return await axios(config)

};

export const employeeProfile = async() => {
  
}

export const addEmployee = () => {};
