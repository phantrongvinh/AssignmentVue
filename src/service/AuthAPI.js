import axiosClient from "./axiosClient";

const url = "/auth";

const register = (data) => {
  return axiosClient.post(`${url}/register`, data);
};

const login = (data) => {
    return axiosClient.post(`${url}/login`, data);
}

const AuthAPI = {
  register,
  login
};

export default AuthAPI;
