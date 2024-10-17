import { Box, useColorModeValue } from "@chakra-ui/react";

const ThemedBox = () => {
  const bg = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("black", "white");


  return <Box bg={bg} color={color} p={4}>This box changes color!</Box>;
};
export default ThemedBox;