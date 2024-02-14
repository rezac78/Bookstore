import api from "../api";
export const BookService = async () => {
  try {
    const response = await api.get("/books");
    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
};
export const GetOneBook = async (Id) => {
  try {
    const response = await api.get(`/books/${Id}`);
    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
};
export const CreateBook = async (Data) => {
  try {
    const response = await api.post("/books", Data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteBook = async (Id) => {
  try {
    const response = await api.delete(`/books/${Id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
export const updateBook = async (id, updatedData) => {
  try {
    const response = await api.put(`/books/${id}`, updatedData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
