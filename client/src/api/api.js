import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:5000/api/',
});

export const getInfo = () => api.get('/get-info')
export const getStats = () => api.get('/get-stats');

const apis = {
  getInfo,
  getStats
};

export default apis;
