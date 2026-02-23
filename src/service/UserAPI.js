import axiosClient from "./axiosClient";

const url = "/users";

const getAllUsers = () => {
    return axiosClient.get(`${url}/all`)
}

const UserAPI = {
    getAllUsers,
}

export default UserAPI