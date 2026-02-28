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

const changePass = (data) => {
  return axiosClient.put(`${url}/change-password`, {
    oldPassword: data.oldPassword,
    newPassword: data.newPassword,
    confirmPassword: data.confirmPassword,
  });
};

const UserAPI = {
  getTheMostAuthors,
  isExistsEmail,
  getProfile,
  changePass,
};

export default UserAPI;
