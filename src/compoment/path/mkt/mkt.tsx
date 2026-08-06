import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Input,
  Link,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  Avatar,
  HStack,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FaHeadset,
  FaChevronDown,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaCheckCircle,
  FaQuestionCircle,
} from 'react-icons/fa';
import Footer from '../../ui/fooder/footer';

const benefits = [
  { label: 'Học nhanh thực tế', icon: FaLaptopCode },
  { label: 'Giảng viên chuyên nghiệp', icon: FaChalkboardTeacher },
  { label: 'Lộ trình rõ ràng', icon: FaCheckCircle },
  { label: 'Hỗ trợ 1-1', icon: FaHeadset },
];

const audience = ['Sinh viên', 'Người đi làm', 'Người muốn chuyển ngành', 'Chủ doanh nghiệp'];

const courses = [
  { category: 'Frontend', items: ['ReactJS'] },
  { category: 'Backend', items: ['Java', 'NodeJS', 'PHP'] },
  { category: 'Mobile', items: ['Flutter', 'Android'] },
  { category: 'AI', items: ['Python AI', 'ChatGPT', 'Automation'] },
];

const faqItems = [
  { question: 'Thời gian học kéo dài bao lâu?', answer: 'Tùy khóa học, thường từ 3-6 tháng với lộ trình thực hành.' },
  { question: 'Tôi có được cấp chứng chỉ không?', answer: 'Có, sau khi hoàn thành khóa học và bài tập bạn sẽ nhận chứng chỉ.' },
  { question: 'Học online hay offline?', answer: 'Cả hai đều có thể, bạn có thể lựa chọn theo nhu cầu.' },
];

const Mkt: React.FC = () => {
  const bg = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const sectionHeadingColor = useColorModeValue('blue.700', 'blue.200');

  const heroImage = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80';
  const sampleImages = [
    'https://images.unsplash.com/photo-1555949963-aa79dcee981d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1517430816045-df4b7de01eea?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
  ];

  return (
    <Box
      bgImage={`linear-gradient(rgba(255,255,255,0.86), rgba(255,255,255,0.86)), url('${heroImage}')`}
      bgSize="cover"
      bgPosition="center"
      color={useColorModeValue('gray.900', 'gray.100')}
    >
      <Container maxW="7xl" py={8}>
        <Flex justify="space-between" align="center" mb={8}>
          <HStack spacing={4}>
            <Link href="https://hacnil.com/mkt" isExternal>
              <Avatar
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
                name="Hacnil"
                bg="blue.500"
              />
            </Link>
            <Box>
              <Text fontWeight="bold" fontSize="lg">hacnil</Text>
              <Text fontSize="sm" color="gray.500">Tư vấn khách hàng chuyên nghiệp</Text>
            </Box>
          </HStack>
          <HStack
            spacing={4}
            bg="whiteAlpha.900"
            border="1px"
            borderColor="blue.100"
            p={3}
            borderRadius="3xl"
            boxShadow="sm"
            align="center"
          >
            <Box textAlign="right">
              <Text fontWeight="bold" fontSize="sm">Hotline</Text>
              <Text color="blue.600" fontWeight="bold" fontSize="lg">0369 1800 86</Text>
            </Box>
            <Button colorScheme="whatsapp" size="sm" borderRadius="full" px={6}>
              Zalo
            </Button>
            <Button colorScheme="blue" size="sm" borderRadius="9px" px={4}>
              Messenger
            </Button>
          </HStack>
        </Flex>

        <Box bg={cardBg} borderRadius="3xl" p={10} boxShadow="xl" mb={12}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} alignItems="center">
            <Box>
              <Heading size="2xl" mb={4}>Tư vấn giải pháp học chuyên sâu</Heading>
              <Text fontSize="lg" mb={6} color="gray.600">
                Tạo lộ trình học phù hợp với mục tiêu, giúp bạn nhanh chóng nắm vững kỹ năng và đạt được chứng chỉ.
              </Text>
              <Button colorScheme="blue" size="lg">Đăng ký tư vấn</Button>
            </Box>
            <Box>
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80"
                alt="Teamwork" 
                borderRadius="2xl"
                boxShadow="lg"
                objectFit="cover"
                w="100%"
                h="100%"
                minH="320px"
              />
            </Box>
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mt={8}>
            {sampleImages.map((src, index) => (
              <Box key={index} overflow="hidden" borderRadius="2xl" boxShadow="md">
                <Image src={src} alt={`Sample ${index + 1}`} objectFit="cover" w="100%" h="200px" />
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box mb={12}>
          <Heading size="lg" mb={6} color={sectionHeadingColor}>Tại sao nên học?</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={6}>
            {benefits.map((item) => (
              <Box key={item.label} bg={cardBg} p={6} borderRadius="2xl" boxShadow="md">
                <Icon as={item.icon} w={10} h={10} color="blue.500" mb={4} />
                <Text fontWeight="semibold" fontSize="lg">{item.label}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box mb={12}>
          <Heading size="lg" mb={6} color={sectionHeadingColor}>Khóa học phù hợp với ai?</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {audience.map((person) => (
              <Box key={person} bg={cardBg} p={5} borderRadius="2xl" boxShadow="sm">
                <Text fontSize="lg" fontWeight="semibold">{person}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box mb={12}>
          <Heading size="lg" mb={6} color={sectionHeadingColor}>Lộ trình học</Heading>
          <Stack spacing={4}>
            {['Bước 1', 'Bước 2', 'Bước 3', 'Có việc / Chứng chỉ'].map((step, index) => (
              <Flex key={step} align="center" gap={4}>
                <Box minW="80px" bg="blue.500" color="white" p={4} borderRadius="2xl" textAlign="center">
                  {step}
                </Box>
                {index < 3 && <Icon as={FaChevronDown} w={6} h={6} color="gray.400" />}
              </Flex>
            ))}
          </Stack>
        </Box>

        <Box mb={12}>
          <Heading size="lg" mb={6} color={sectionHeadingColor}>Danh sách khóa học</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {courses.map((course) => (
              <Box key={course.category} bg={cardBg} p={6} borderRadius="2xl" boxShadow="sm">
                <Text fontWeight="bold" mb={4}>{course.category}</Text>
                <Stack spacing={3}>
                  {course.items.map((item) => (
                    <HStack key={item} spacing={3}>
                      <Icon as={FaCheckCircle} color="green.400" />
                      <Text>{item}</Text>
                    </HStack>
                  ))}
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box mb={12} bg={cardBg} p={10} borderRadius="3xl" boxShadow="xl">
          <Heading size="lg" mb={6} color={sectionHeadingColor}>Đăng ký tư vấn</Heading>
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
            <GridItem>
              <FormControl mb={4}>
                <FormLabel>Tên</FormLabel>
                <Input placeholder="Nhập tên của bạn" />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>SĐT</FormLabel>
                <Input placeholder="Nhập số điện thoại" />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Email</FormLabel>
                <Input placeholder="Nhập email" type="email" />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl mb={4}>
                <FormLabel>Khóa học quan tâm</FormLabel>
                <Select placeholder="Chọn khóa học">
                  <option>ReactJS</option>
                  <option>Java</option>
                  <option>NodeJS</option>
                  <option>PHP</option>
                  <option>Flutter</option>
                  <option>Android</option>
                  <option>Python AI</option>
                  <option>ChatGPT</option>
                  <option>Automation</option>
                </Select>
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Mục tiêu học</FormLabel>
                <Textarea placeholder="Nhập mục tiêu của bạn" rows={6} />
              </FormControl>
              <Button colorScheme="blue" size="lg">Gửi</Button>
            </GridItem>
          </Grid>
        </Box>

        <Box mb={12}>
          <Heading size="lg" mb={6} color={sectionHeadingColor}>Feedback học viên</Heading>
          <Box bg={cardBg} p={8} borderRadius="3xl" boxShadow="md">
            <Text fontWeight="bold" mb={4}>★★★★★</Text>
            <Text>"Khóa học giúp tôi nâng cao kỹ năng và có công việc mới nhanh chóng."</Text>
          </Box>
        </Box>

        <Box mb={12}>
          <Heading size="lg" mb={6} color={sectionHeadingColor}>FAQ</Heading>
          <Stack spacing={4}>
            {faqItems.map((item) => (
              <Box key={item.question} bg={cardBg} p={5} borderRadius="2xl" boxShadow="sm">
                <HStack spacing={3} mb={3} alignItems="flex-start">
                  <Icon as={FaQuestionCircle} color="blue.500" mt={1} />
                  <Text fontWeight="semibold">{item.question}</Text>
                </HStack>
                <Text color="gray.600">{item.answer}</Text>
              </Box>
            ))}
          </Stack>
        </Box>

        <Divider mb={8} />
      </Container>
      <Footer />
    </Box>
  );
};

export default Mkt;
