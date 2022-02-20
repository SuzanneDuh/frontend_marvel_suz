import axios from "axios";

const instance = axios.create({
  baseURL: "https://marvel-back-suz.herokuapp.com/",
});

export default instance;
