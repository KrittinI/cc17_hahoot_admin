import axios from "../config/axios";
const adminApi = {};
// user
adminApi.deactive = async (userId) =>
  axios.patch(`/users/${userId}/deactivate`);
adminApi.active = async (userId) => axios.patch(`/users/${userId}/activate`);

// topic
adminApi.createTopic = async (body) => axios.post("/topics", body);
adminApi.editTopic = async (id, body) => axios.post(`/topics/${id}`, body);
adminApi.deleteTopic = async (id) => axios.post(`/topics/${id}`);


adminApi.getAllData = async () => axios.get("/admin/")
adminApi.createHero = async (formData) => axios.post("/admin/hero", formData)
adminApi.updateHero = async (id) => axios.patch(`/admin/hero/${id}`)


export default adminApi;
