
import axios from "axios";

const API_BASE_URL = "https://api.al-afzahgroup.com/api";

export const getBanners = async () => {
  const response = await axios.get(`${API_BASE_URL}/banners`);
  return response.data;
};
