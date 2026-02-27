import axiosClient from "./axiosClient";

const url = "/blogs";

const getAllBlogs = () => {
  return axiosClient.get(`${url}`);
};

const getLatestBlog = () => {
  return axiosClient.get(`${url}/latest`);
};

const get2NearLatestBLogs = () => {
  return axiosClient.get(`${url}/two-near-latest`);
};

const getTheMostCommentBlogs = () => {
  return axiosClient.get(`${url}/most-comments`);
};

const getBlogByID = (id) => {
  return axiosClient.get(`${url}/${id}`);
};

const getRandomBlogs = () => {
  return axiosClient.get(`${url}/random`);
};

const postBlog = (formData) => {
  return axiosClient.post(`${url}/post`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const BlogAPI = {
  getAllBlogs,
  getLatestBlog,
  get2NearLatestBLogs,
  getTheMostCommentBlogs,
  getRandomBlogs,
  getBlogByID,
  postBlog,
};

export default BlogAPI;
