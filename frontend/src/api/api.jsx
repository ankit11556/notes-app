import axios from "axios";

const API_URL = "http://localhost:3000"

export const getNotes = async () => {
  const response = await axios.get(`${API_URL}/notes`);
  return response;
}