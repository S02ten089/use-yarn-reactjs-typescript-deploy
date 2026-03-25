import {
  Box,
  Button,
  Heading,
  Text,
  Image,
  Stack,
  Flex,
  VStack,
} from "@chakra-ui/react";
import styles from './hero.module.scss';
const HeroSection: React.FC = () => {
  
  const handleStar = () => {
    window.location.href = "/services";
    // alert("Đang đợi nội dung cập nhật! ")
  };
  return (
    <Box
    // p={5}
    >
      <Box
        as="section"
        height="100vh"
        position="relative"
        overflow="hidden"
        zIndex={0}
      >
        {/* Background Image with Blur */}
        <Image
          src="https://s3.cloud.cmctelecom.vn/tinhte2/2020/01/4875839_united_arab_emirates_skyscrapers_dubai_megapolis-wallpaper-1920x1080.jpg"
          alt="Hero Background"
          objectFit="cover"
          width="100%"
          height="100%"
          position="absolute"
          top={0}
          left={0}
          zIndex={0}
          filter="blur(5px)" // Làm mờ ảnh nền
        />

        {/* Overlay */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.600"
          zIndex={1}
        />

        {/* Content */}
        <Flex
          position="relative"
          zIndex={2}
          align="center"
          justify="center"
          height="100%"
          px={8}
        >
          <VStack
            spacing={6}
            textAlign="center"
            maxW="lg"
            color="white"
            zIndex={2}
          >
            {/* Hero Heading */}
            <Heading as="h1" 
            // size="3xl" 
            fontWeight="bold" lineHeight="shorter"
            className={styles.cssMobilehero}
            >
              Nơi khởi đầu cho hành trình số của bạn
            </Heading>

            {/* Hero Subheading */}
            <Text 
            // fontSize="lg"
            color="gray.200">
              Chúng tôi mang đến những giải pháp phù hợp, giúp bạn từng bước xây dựng và phát triển trong môi trường công nghệ hiện đại.
            </Text>

            {/* Call-to-action Buttons */}
            <Stack direction={["column", "row"]} spacing={4}>
              <Button colorScheme="teal" size="lg" variant="solid"
              onClick={handleStar}
              backgroundColor={"#81E6D9"}
              color={"black"}
              >
                Cùng bắt đầu nào!
              </Button>
              <Button colorScheme="whiteAlpha" size="lg" variant="outline"
              color={"rgba(255, 255, 255, 0.08)"}>
                Tìm Hiểu Thêm
              </Button>
            </Stack>
          </VStack>
        </Flex>

        {/* Right-side Image */}
        <Box
          position="absolute"
          bottom={10}
          right={10}
          width="300px"
          height="auto"
          zIndex={3}
        >
          <Image
            src="https://s3.cloud.cmctelecom.vn/tinhte2/2020/01/4875839_united_arab_emirates_skyscrapers_dubai_megapolis-wallpaper-1920x1080.jpg"
            alt="Hero Image"
            borderRadius="full"
            border="4px solid white"
            className={styles.imgShow}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
