import axios from "axios";

export const githubAPI = axios.create({
	baseURL: "https://api.github.com/repos/facebook/react",
	headers: {
		Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_NOT_SECRET_CODE}`,
	},
});
