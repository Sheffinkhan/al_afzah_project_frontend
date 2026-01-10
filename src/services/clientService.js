import axios from "axios";

const API_BASE_URL = "http://3.111.31.155:5000/api";

export const getClients = async () => {
  const response = await axios.get(`${API_BASE_URL}/clients`);
  return response.data;
};
