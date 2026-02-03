// src/services/clientService.js
import axios from "axios";

const API_BASE_URL = "https://api.al-afzahgroup.com/api";

export const getProjects = async () => {
  const response = await axios.get(`${API_BASE_URL}/projects`);
  return response.data;
};

export const getProjectById = async (id) => {
  // Fetch all projects and find the one with matching ID
  const response = await axios.get(`${API_BASE_URL}/projects`);
  const project = response.data.find(p => p.id === id);
  if (!project) {
    throw new Error('Project not found');
  }
  return project;
};
