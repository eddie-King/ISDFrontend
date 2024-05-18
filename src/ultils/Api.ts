import axios from "axios";
import token from "../Token";
import { Navigate, useNavigate } from "react-router-dom";
function handleError(e: any) {
  const navigate = useNavigate();
  if (e.response.status == 401) token.clearToken();
  navigate("/login");
}
export default {
  getOriginal() {
    var instance = axios.create();
    instance.interceptors.request.use((request) => {
      request.baseURL = process.env.REACT_APP_API_BASE_URL || "/api";
      request.headers["Content-Type"] = "application/json";
      return request;
    });
    return instance;
  },
  async get(url: string, params: any = {}) {
    var r = await this.getOriginal().get(url, { params });
    return r.data;
  },
  postOriginal() {
    var instance = axios.create();
    instance.interceptors.request.use((request) => {
      request.baseURL = process.env.REACT_APP_API_BASE_URL || "/api";
      request.headers["Authorization"] = token.getTokenFromStorage();
      return request;
    });
    instance.interceptors.response.use((response) => {
      if (response.data.code == 401) {
        console.log("Token expired");
        token.clearToken();
      }
      return response;
    });
    return instance;
  },
  async post(url: string, data: any = {}, config: any = {}) {
    var r = await this.postOriginal()
      .post(url, data)
      .then((res) => {
        return res.data;
      })
      .catch((e) => {
        handleError(e);
      });
    return r;
  },
  async put(url: string, data: any = {}) {
    var r = await this.postOriginal()
      .put(url, data)
      .then((res) => {
        return res.data;
      })
      .catch((e) => {
        handleError(e);
      });
    return r;
  },
  async patch(url: string, data: any = {}) {
    var r = await this.postOriginal()
      .patch(url, data)
      .then((res) => {
        return res.data;
      })
      .catch((e) => {
        handleError(e);
      });
    return r;
  },
  async delete(url: string) {
    var r = await this.postOriginal()
      .delete(url)
      .then((res) => {
        return res.data;
      })
      .catch((e) => {
        handleError(e);
      });
    return r;
  }
};
