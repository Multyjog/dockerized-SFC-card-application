import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.get = function (url, params) {
  return this.request({
    method: "get",
    url,
    params,
  });
};

// POST method
api.post = function (url, data) {
  return this.request({
    method: "post",
    url,
    data,
  });
};

export default api;
