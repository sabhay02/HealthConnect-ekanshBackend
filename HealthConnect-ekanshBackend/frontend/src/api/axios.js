import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "http://localhost:4002/api",
	withCredentials: true, // send cookies when making requests
});

export default axiosInstance;
