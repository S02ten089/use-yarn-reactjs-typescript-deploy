import {
  Box,
  Flex,
  Text,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  VStack,
  HStack,
  Icon,
  Link,
} from "@chakra-ui/react";
import { FiMenu, FiHome, FiSettings, FiUser } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Sidebar = ({ onClose }: { onClose: () => void }) => (
  <Box
    as="nav"
    position={{ base: "absolute", md: "fixed" }}
    left="0"
    top="0"
    h="100vh"
    w="250px"
    bg="gray.800"
    color="white"
    p="6"
    display={{ base: "none", md: "block" }}
  >
    <VStack align="start" spacing="6">
      <Text fontSize="2xl" fontWeight="bold">
        My Dashboard
      </Text>
      <NavLink to="/" onClick={onClose}>
        <HStack spacing="3">
          <Icon as={FiHome} boxSize="5" />
          <Text>Home</Text>
        </HStack>
      </NavLink>
      <NavLink to="/users" onClick={onClose}>
        <HStack spacing="3">
          <Icon as={FiUser} boxSize="5" />
          <Text>Users</Text>
        </HStack>
      </NavLink>
      <NavLink to="/settings" onClick={onClose}>
        <HStack spacing="3">
          <Icon as={FiSettings} boxSize="5" />
          <Text>Settings</Text>
        </HStack>
      </NavLink>
    </VStack>
  </Box>
);

const Header = ({ onOpen }: { onOpen: () => void }) => (
  <Flex
    as="header"
    w="full"
    px="6"
    py="4"
    bg="gray.700"
    alignItems="center"
    justifyContent="space-between"
    color="white"
  >
    <IconButton
      icon={<FiMenu />}
      aria-label="Open menu"
      onClick={onOpen}
      variant="ghost"
      colorScheme="whiteAlpha"
      size="lg"
    />
    <Text fontSize="xl" fontWeight="bold">
      Dashboard
    </Text>
  </Flex>
);

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex minH="100vh" flexDirection="column">
      <Header onOpen={onOpen} />
      <Flex flex="1">
        <Sidebar onClose={onClose} />
        <Box flex="1" p={{ base: "4", md: "8" }} ml={{ base: "0", md: "250px" }} bg="gray.50">
          {children}
        </Box>
      </Flex>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader fontWeight="bold" fontSize="lg">
            Menu
          </DrawerHeader>
          <DrawerBody>
            <Sidebar onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Text fontSize="2xl" fontWeight="semibold">
        Welcome to your dashboard!
      </Text>
    </DashboardLayout>
  );
}
