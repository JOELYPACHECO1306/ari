import axios from "axios";

const API_URL = "http://127.0.0.1:5000/users"; // Reemplaza con la URL de tu backend

// Inicio de sesión
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error("Error en el inicio de sesión:", error.response?.data || error.message);
    throw error;
  }
};

// Obtener lista de usuarios
export const getUsers = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/users`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.users;
  } catch (error) {
    console.error("Error al obtener usuarios:", error.response?.data || error.message);
    throw error;
  }
};

// Registrar un nuevo usuario
export const registerUser = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { username, email, password });
    return response.data;
  } catch (error) {
    console.error("Error al registrar usuario:", error.response?.data || error.message);
    throw error;
  }
};