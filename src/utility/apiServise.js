import axios from "axios";

// const baseURL = "http://localhost:5000/api";
const baseURL = "https://tour-server-w1p6.onrender.com/api";

const makeUrl = (endPoint) => {
  return `${baseURL}${endPoint}`;
};
export default class API {
  async get(endPoint, body) {
    const urlString = makeUrl(endPoint);
    try {
      const response = await axios.get(urlString, body);
      return response.data;
    } catch (err) {
      console.log(err);
      return err.response.data;
    }
  }

  async post(endPoint, body) {
    const urlString = makeUrl(endPoint);
    try {
      const response = await axios.post(urlString, body);
      return response.data;
    } catch (err) {
      console.log(err);
      return err.response.data;
    }
  }

  async update(endPoint, body) {
    const urlString = makeUrl(endPoint);
    try {
      const response = await axios.put(urlString, body);
      return response.data;
    } catch (err) {
      return err.response.data;
    }
  }

  async delete(endPoint, body) {
    const urlString = makeUrl(endPoint);
    try {
      const response = await axios.delete(urlString, body);
      return response.data;
    } catch (err) {
      return err.response.data;
    }
  }
}
