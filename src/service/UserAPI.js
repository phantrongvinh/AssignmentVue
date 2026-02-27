import axiosClient from "./axiosClient";

const url = "/users";

const getTheMostAuthors = () => {
  return axiosClient.get(`${url}/authors`);
};

const isExistsEmail = (email) => {
  return axiosClient.get(`${url}/existsByEmail`, { params: { email } });
};

const getProfile = () => {
  return axiosClient.get(`${url}/profile`);
};

const UserAPI = {
  getTheMostAuthors,
  isExistsEmail,
  getProfile,
};

export default UserAPI;
