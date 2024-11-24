const API_BASE_URL = "https://example.com/api";

const apiPaths = {
  GET_PRODUCTS: (page: number, limit: number, category?: string) =>
    `${API_BASE_URL}/products?page=${page}&limit=${limit}${
      category ? `&category=${category}` : ""
    }`,
};

export default apiPaths;
