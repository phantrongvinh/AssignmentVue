import axiosClient from "./axiosClient";

const url = "/likes";

const toggleLike = (blogID) => {
  return axiosClient.post(`${url}/${blogID}`);
};

const isLiked = (blogID) => {
  return axiosClient.get(`${url}/isLiked/${blogID}`);
};
const unLiked = (blogID) => {
  return axiosClient.delete(`${url}/${blogID}`);
};
const LikeAPI = {
  toggleLike,
  isLiked,
  unLiked,
};

export default LikeAPI;
