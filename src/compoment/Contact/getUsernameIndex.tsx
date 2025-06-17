import {
  useToast,
  Box,
  Heading,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { useState, useEffect, useMemo } from "react";
import { SearchIcon } from "@chakra-ui/icons";

interface Contact {
  name: string;
}

const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_LINK_SERVER || "",
  ENDPOINTS: {
    POST_LINK: process.env.REACT_APP_API_LINK_GET_CONTACT || "",
    IMG_BG_BUTTON_ABOUT: process.env.REACT_APP_API_IMG_GET_BG || "",
    IMG_BG_BUTTON_OPENCLICK_ABOUT: process.env.REACT_APP_API_IMG_GET_BG_CLICK || "",
  },
};

const ContactListDrawer: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Kiểm tra xem ảnh nền có tồn tại hay không
  const [bgImageExists, setBgImageExists] = useState(false);
  const imageUrl = `${API_CONFIG.ENDPOINTS.IMG_BG_BUTTON_ABOUT}`;
  const imageOpenClickUrl = `${API_CONFIG.ENDPOINTS.IMG_BG_BUTTON_OPENCLICK_ABOUT}`;
  
  // Fetch danh sách liên hệ
  useEffect(() => {
    const img = new Image();
      img.src = imageUrl;
      img.src = imageOpenClickUrl;
      img.onload = () => setBgImageExists(true);
      img.onerror = () => setBgImageExists(false);

    const fetchContacts = async () => {
      try {
        const response = await fetch(
          `${API_CONFIG.BASE_URL}/database/${API_CONFIG.ENDPOINTS.POST_LINK}`
        );
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Failed to fetch contacts");
        }

        setContacts(result.data || []);
      } catch (error: any) {
        toast({
          title: "Lỗi",
          description: error.message || "Không thể tải danh sách liên hệ",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, [toast]);

  // Lọc danh sách liên hệ theo tìm kiếm
  const filteredContacts = useMemo(() => {
    if (!searchQuery) return contacts;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [contacts, searchQuery]);

  //css hover cho open click
  const hoverStyle = useMemo(() => {
    return {
      bg: "teal.600",
      transform: "scale(1.1) translateY(-2px)",
      boxShadow: "0 6px 20px rgba(0, 128, 128, 0.6)",
      backgroundImage: bgImageExists
        ? `url('${imageOpenClickUrl}')`
        : "linear-gradient(45deg, #00bcd4, #009688)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };
  }, [bgImageExists, imageOpenClickUrl]);

  return (
    <>
      {/* CSS cho hiệu ứng gradient động và thời tiết sinh động */}
      <style>
        {`
          .particles-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 0;
            background: linear-gradient(45deg, #0d1b2a, #1b263b, #415a77);
            background-size: 300%;
            animation: gradientShift 15s ease infinite;
          }

          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .particle {
            position: absolute;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
            animation: fall 4s linear infinite, sway 2s ease-in-out infinite alternate;
          }

          .particle:nth-child(1) { width: 5px; height: 5px; left: 5%; animation-delay: 0s; }
          .particle:nth-child(2) { width: 7px; height: 7px; left: 15%; animation-delay: 0.5s; }
          .particle:nth-child(3) { width: 4px; height: 4px; left: 25%; animation-delay: 1s; }
          .particle:nth-child(4) { width: 6px; height: 6px; left: 35%; animation-delay: 1.5s; }
          .particle:nth-child(5) { width: 5px; height: 5px; left: 45%; animation-delay: 2s; }
          .particle:nth-child(6) { width: 8px; height: 8px; left: 55%; animation-delay: 2.5s; }
          .particle:nth-child(7) { width: 4px; height: 4px; left: 65%; animation-delay: 3s; }
          .particle:nth-child(8) { width: 6px; height: 6px; left: 75%; animation-delay: 3.5s; }
          .particle:nth-child(9) { width: 5px; height: 5px; left: 85%; animation-delay: 4s; }
          .particle:nth-child(10) { width: 7px; height: 7px; left: 95%; animation-delay: 4.5s; }
          .particle:nth-child(11) { width: 6px; height: 6px; left: 10%; animation-delay: 0.2s; }
          .particle:nth-child(12) { width: 5px; height: 5px; left: 20%; animation-delay: 0.7s; }
          .particle:nth-child(13) { width: 4px; height: 4px; left: 30%; animation-delay: 1.2s; }
          .particle:nth-child(14) { width: 7px; height: 7px; left: 40%; animation-delay: 1.7s; }
          .particle:nth-child(15) { width: 5px; height: 5px; left: 50%; animation-delay: 2.2s; }

          @keyframes fall {
            0% {
              transform: translateY(-20%) translateX(0);
              opacity: 0.8;
            }
            100% {
              transform: translateY(100vh) translateX(30px);
              opacity: 0;
            }
          }

          @keyframes sway {
            0% { transform: translateX(0); }
            100% { transform: translateX(15px); }
          }

          .glow-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.5) 70%);
            z-index: 0;
            animation: glowPulse 6s ease-in-out infinite;
          }

          @keyframes glowPulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
        `}
      </style>

      {/* Nút mở Drawer với hiệu ứng 3D */}
      <Button
        position="fixed"
        bottom="30px"
        right="30px"
        colorScheme="teal"
        size="lg"
        borderRadius="full"
        boxShadow="0 4px 15px rgba(0, 128, 128, 0.4)"
        _hover={hoverStyle}
        _active={{ transform: "scale(0.95)" }}
        transition="all 0.3s ease"
        onClick={onOpen}
        zIndex="10"
        backgroundImage={
          bgImageExists
            ? `url('${imageUrl}')`
            : "linear-gradient(45deg, #00bcd4, #009688)"  //sau thay thành logo or thêm vào phần không ảnh của url
        }
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        Xem Danh Sách Liên Hệ
      </Button>

      {/* Drawer chứa danh sách liên hệ */}
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay bg="rgba(0, 0, 0, 0.3)" />
        <DrawerContent
          maxH="60vh"
          bg="gray.900"
          color="white"
          borderTopRadius="2xl"
          boxShadow="0 -10px 30px rgba(0, 0, 0, 0.5)"
          position="relative"
          overflow="hidden"
        >
          {/* Hiệu ứng gradient động và thời tiết sinh động */}
          <Box className="particles-container">
            <Box className="glow-overlay" />
            {[...Array(15)].map((_, i) => (
              <Box key={i} className="particle" />
            ))}
          </Box>

          <DrawerCloseButton
            size="lg"
            _hover={{ bg: "teal.500", transform: "rotate(180deg)" }}
            transition="all 0.3s"
            zIndex="1"
            display='none'  //tam thời ẩn nút đóng
          />
          <DrawerHeader p={6} zIndex="1">
            <Heading as="h2" size="lg" color="aliceblue" textAlign="center">
              Danh Sách Liên Hệ
            </Heading>
          </DrawerHeader>

          <DrawerBody overflowY="auto" p={6} zIndex="1">
            <VStack spacing={4} align="stretch">
              {/* Thanh tìm kiếm */}
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={SearchIcon} color="gray.400" />
                </InputLeftElement>
                <Input
                  placeholder="Tìm kiếm liên hệ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  bg="gray.800"
                  border="none"
                  borderRadius="md"
                  _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px teal.500" }}
                  _hover={{ bg: "gray.700" }}
                  transition="all 0.3s"
                />
              </InputGroup>

              {loading ? (
                <Box textAlign="center" py={4}>
                  Đang tải...
                </Box>
              ) : filteredContacts.length === 0 ? (
                <Box textAlign="center" py={4}>
                  {searchQuery
                    ? "Không tìm thấy liên hệ phù hợp."
                    : "Chưa có liên hệ nào."}
                </Box>
              ) : (
                <Table variant="simple" colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th color="#f0f8ff9c" fontSize="md">
                        Tên
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {filteredContacts.map((contact, index) => (
                      <Tr
                        key={index}
                        _hover={{
                          bg: "teal.800",
                          transform: "translateY(-2px)",
                          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                        }}
                        transition="all 0.3s"
                      >
                        <Td>{contact.name}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              )}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ContactListDrawer;