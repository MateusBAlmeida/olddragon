const baseApi = "localhost:3333";

const api = axios.create({
    baseURL,
  headers: {
    "Content-Type": "application/json",
  },
})

export default api;