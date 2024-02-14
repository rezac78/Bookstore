import api from "../api";
export const LoginService = async (data) => {
  try {
    const response = await api.post("/login", data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
