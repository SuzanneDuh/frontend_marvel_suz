import axios from "axios";

const herokuapp = axios.create({
  baseURL: "https://marvel-back-suz.herokuapp.com/",
});

export default herokuapp;
