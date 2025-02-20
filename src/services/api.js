import axios from "axios";

const API_URL = "http://localhost:5000/api/finances";

export const getFinances = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createFinance = async (finance) => {
  const response = await axios.post(API_URL, finance);
  return response.data;
};

export const deleteFinance = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
