
import axios from "axios";

const API_BASE_URL = "https://api.al-afzahgroup.com/api";

export const getClients = async () => {
  const response = await axios.get(`${API_BASE_URL}/clients`);
  return response.data;
};
