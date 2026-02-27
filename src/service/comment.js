import axiosClient from "./axiosClient";

const url = "/comments"

const postComment = (comment) => {
    return axiosClient.post(`${url}`, comment)
}

const CommentAPI = {
    postComment
}

export default CommentAPI;