import axios from "axios";

const API_URL = "http://localhost:3000"

export const getNotes = async () => {
  const response = await axios.get(`${API_URL}/notes`);
  return response;
}

export const addNote = async (noteData) => {
  const response = await axios.post(`${API_URL}/notes`,noteData);
  return response;
}

export const deleteNote = async (id) => {
  const response = await axios.delete(`${API_URL}/notes/${id}`)
  return response;
}