import axios from 'axios';
import qs from 'qs';

const service = axios.create({
  baseURL: 'api/',
  timeout: 5000,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  transformRequest: [
    function change(data) {
      return qs.stringify(data);
    },
  ],
});

export default service;

