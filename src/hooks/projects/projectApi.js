// src/services/clientService.js
import axios from "axios";

const API_BASE_URL = "https://api.al-afzahgroup.com/api";

export const getProjects = async () => {
  const response = await axios.get(`${API_BASE_URL}/projects`);
  return response.data;
};
