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
} from "@chakra-ui/react";
import { FiMenu, FiHome, FiSettings, FiUser } from "react-icons/fi";

const Sidebar = () => (
  <Box
    as="nav"
    position="fixed"
    left="0"
    top="0"
    h="100vh"
    w="250px"
    bg="gray.800"
    color="white"
    p="4"
  >
    <VStack align="start" spacing="4">
      <Text fontSize="lg" fontWeight="bold">My Dashboard</Text>
      <HStack>
        <Icon as={FiHome} />
        <Text>Home</Text>
      </HStack>
      <HStack>
        <Icon as={FiUser} />
        <Text>Users</Text>
      </HStack>
      <HStack>
        <Icon as={FiSettings} />
        <Text>Settings</Text>
      </HStack>
    </VStack>
  </Box>
);

const Header = ({ onOpen }: { onOpen: () => void }) => (
  <Flex
    as="header"
    w="full"
    px="4"
    py="2"
    bg="gray.700"
    alignItems="center"
    justifyContent="space-between"
    color="white"
  >
    <IconButton
      icon={<FiMenu />}
      aria-label="Open menu"
      onClick={onOpen}
      variant="outline"
      colorScheme="whiteAlpha"
    />
    <Text fontSize="lg" fontWeight="bold">
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
        <Sidebar />
        <Box flex="1" p="6" ml="250px" bg="gray.50">
          {children}
        </Box>
      </Flex>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="start">
              <Text>Home</Text>
              <Text>Users</Text>
              <Text>Settings</Text>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Text fontSize="xl">Welcome to your dashboard!</Text>
    </DashboardLayout>
  );
}