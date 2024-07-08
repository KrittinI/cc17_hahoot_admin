import axios from "../config/axios";
const heroApi = {};
// user
heroApi.deactive = async (userId) => axios.patch(`/users/${userId}/deactivate`);
heroApi.active = async (userId) => axios.patch(`/users/${userId}/activate`);

// topic
heroApi.createTopic = async (body) => axios.post("/topics", body);
heroApi.editTopic = async (id, body) => axios.post(`/topics/${id}`, body);
heroApi.deleteTopic = async (id) => axios.post(`/topics/${id}`);


export default heroApi;
