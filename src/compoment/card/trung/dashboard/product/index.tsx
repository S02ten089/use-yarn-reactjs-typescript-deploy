import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const products = [
  { id: 1, name: "Sản phẩm A", village: "Làng 1", commune: "Xã 1", city: "Hà Nội" },
  { id: 2, name: "Sản phẩm B", village: "Làng 2", commune: "Xã 2", city: "Hồ Chí Minh" },
  { id: 3, name: "Sản phẩm C", village: "Làng 3", commune: "Xã 3", city: "Đà Nẵng" }
];

export default function ProductTable() {
  return (
    <Box p={4} boxShadow="lg" borderRadius="2xl" bg="white">
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Tên</Th>
              <Th>Làng</Th>
              <Th>Xã</Th>
              <Th>Thành phố</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product) => (
              <Tr key={product.id}>
                <Td>{product.id}</Td>
                <Td>{product.name}</Td>
                <Td>{product.village}</Td>
                <Td>{product.commune}</Td>
                <Td>{product.city}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}