import axiosClient from "./axiosClient";

const url = "/blogs";

const getLatestBlog = () => {
    return axiosClient.get(`${url}/latest`)
}

const get2NearLatestBLogs = () => {
    return axiosClient.get(`${url}/two-near-latest`)
}

const BlogAPI = {
    getLatestBlog,get2NearLatestBLogs
}

export default BlogAPI