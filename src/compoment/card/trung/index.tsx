import React, {useState} from 'react';
import styles from './trung.module.scss'; // Sử dụng SCSS Modules
import avt_img from './img/avt_trung.jpg';
import { Box, Heading, Image, Text, Divider, VStack, HStack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface cardInfo{
    id: number;
    name: string;
    birthday: Date;
    skill_programer: string[];
    email: string; // Email riêng biệt
    phone: string; // Số điện thoại riêng biệt
    contach: string; // Chuỗi chứa thông tin liên hệ (email và phone kết hợp)
}

const Trung: React.FC = () => {
    const [card, setCard] = useState<cardInfo | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            // Tạo promise timeout sẽ bị reject sau 2 giây
            const timeout = new Promise<cardInfo>((_, reject) =>
                setTimeout(() => reject(new Error("Request timeout")), 2000)
            );
    
            // Thực hiện fetch dữ liệu từ API và race với timeout
            const response = await Promise.race([
                fetch("/api/about").then((res) => {
                    if (!res.ok) throw new Error("Failed to fetch data");
                    return res.json();
                }),
                timeout
            ]);
    
            // Nếu thành công, gán dữ liệu từ API
            setCard(response);
        } catch (error) {
            console.error(error);
            
            // Dữ liệu giả (mock data) khi gặp lỗi hoặc timeout
            const mockData: cardInfo = {
                id: 12345,
                name: "Nguyễn Văn A",
                birthday: new Date("1990-01-01"),
                skill_programer: ["JavaScript", "TypeScript", "Python"],
                email: "nguyenvana@example.com", // Email riêng biệt
                phone: "+84123456789", // Số điện thoại riêng biệt
                contach: "Email: nguyenvana@example.com, Phone: +84123456789" // Chuỗi chứa thông tin liên hệ
            };
            // Gán dữ liệu giả vào state
            setCard(mockData);
        }
    };
    

    return (
        <Box className={styles.Trung} textAlign="center" p={4} boxShadow="lg" borderRadius="lg">
            <VStack spacing={2} mb={6}>
                <Heading as="h1" size="lg" color="teal.500">
                    <div className="header">
                        <h1>{card?.name}</h1>
                        <div className="line-top"></div>
                    </div>
                </Heading>
            </VStack>

            <HStack spacing={6} justifyContent="center" alignItems="center" className={styles.main}>
                <Image
                    src={avt_img}
                    alt="Phung Hai Trung's Avatar"
                    className={styles.img}
                />

                <div className="timeline-line">
                    <h1>
                        {card?.name}
                    </h1>
                </div>

                <div className="info_trung">
                    <Text>Birthday: {card?.birthday?.toDateString()} </Text>
                    <Text>PRGM: {card?.skill_programer} </Text>
                    <Text>Contact: {card?.contach} </Text>
                </div>
            </HStack>

            <div className="line-bottom"></div>
            <Divider orientation="horizontal" my={6} className={styles.lineBottom} />
            <Box textAlign="center" p={4} boxShadow="lg" borderRadius="lg" bg="gray.100">
                <Button
                    as="a"
                    href="#"
                    fontWeight="bold"
                    colorScheme="blue"
                    sx={{
                        margin: "0.5rem",
                        transition: "all 0.3s ease",
                        "&:hover": {
                            transform: "scale(1.05)",
                            backgroundColor: "#2b6cb0",
                            color: "#fff",
                        },
                    }}
                >
                    Show Info All
                </Button>

                <Link to="/addinfoall">
                    <Button
                        fontWeight="bold"
                        colorScheme="blue"
                        variant="outline"
                        sx={{
                            margin: "0.5rem",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                transform: "scale(1.05)",
                                backgroundColor: "#3182ce",
                                color: "#fff",
                            },
                        }}
                    >
                        Add Info All
                    </Button>
                </Link>
            </Box>
        </Box>
    );
}

export default Trung;