import axios from 'axios';

const api = axios.create({
  baseURL: 'http://93.127.139.216:443/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;