import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'http://localhost:4000/api/',
  baseURL: 'https://where-is-my-bus-rosy.vercel.app/api/',
});

export default axiosInstance;