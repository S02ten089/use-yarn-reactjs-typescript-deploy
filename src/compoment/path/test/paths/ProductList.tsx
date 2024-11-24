// ProductList.tsx
import React, { useEffect, useState } from "react";
import { fetchProducts } from "./apiClient";
import { Box, Text, Spinner, Button, Grid, Image } from "@chakra-ui/react";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(10);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts(page, limit);
        setProducts(data.items); // `items` là cấu trúc trả về từ API
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [page, limit]);

  return (
    <Box>
      {loading ? (
        <Spinner />
      ) : (
        <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
          {products.map((product) => (
            <Box key={product.id} border="1px solid #ccc" p={4} borderRadius="md">
              <Image src={product.image} alt={product.title} />
              <Text fontWeight="bold">{product.title}</Text>
              <Text>${product.price}</Text>
            </Box>
          ))}
        </Grid>
      )}
      <Box mt={4} textAlign="center">
        <Button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          isDisabled={page === 1}
          mr={2}
        >
          Previous
        </Button>
        <Button onClick={() => setPage((prev) => prev + 1)}>Next</Button>
      </Box>
    </Box>
  );
};

export default ProductList;
