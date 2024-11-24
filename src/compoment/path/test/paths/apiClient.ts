import axios from "axios";
import apiPaths from "./apiPaths";

const apiClient = axios.create({
  baseURL: "https://example.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchProducts = async (
  page: number,
  limit: number,
  category?: string
) => {
  try {
    const response = await apiClient.get(
      apiPaths.GET_PRODUCTS(page, limit, category)
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
