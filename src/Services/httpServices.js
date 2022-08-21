import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/comments";

axios.interceptors.request.use(
  (req) => {
    console.log(req);
    return req;
  },
  (err) => {
    console.log(err);
    return Promise.reject();
  }
);

axios.interceptors.response.use(
  (req) => {
    console.log(req);
    return req;
  },
  (err) => {
    console.log(err);
    return Promise.reject();
  }
);

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;