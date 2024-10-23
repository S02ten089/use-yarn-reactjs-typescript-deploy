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

const HeroSection: React.FC = () => {
  return (
    <Box>
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
            <Heading as="h1" size="3xl" fontWeight="bold" lineHeight="shorter">
              Welcome to Our Digital World
            </Heading>

            {/* Hero Subheading */}
            <Text fontSize="lg" color="gray.200">
              Providing cutting-edge digital solutions for businesses of all sizes.
            </Text>

            {/* Call-to-action Buttons */}
            <Stack direction={["column", "row"]} spacing={4}>
              <Button colorScheme="teal" size="lg" variant="solid">
                Get Started
              </Button>
              <Button colorScheme="whiteAlpha" size="lg" variant="outline">
                Learn More
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
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
