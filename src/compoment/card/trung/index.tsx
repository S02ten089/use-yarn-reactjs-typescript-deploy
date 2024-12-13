import React, {useEffect, useState} from 'react';
import styles from './trung.module.scss'; // Sử dụng SCSS Modules
import avt_img from './img/avt_trung.jpg';
import { Box, Heading, Image, Text, Divider, VStack, HStack, Button, styled } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { cardInfo } from './cardInfo';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; 

const Trung: React.FC = () => {
    const [card, setCard] = useState<cardInfo | null>(null);
    // const [loading, setLoading] = useState(true);

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
                name: "Phùng Hải Trung",
                birthday: "29",
                birthdayThang: "03",
                birthdayNam: "2002",
                skillProgramer: {
                    skill1:"JavaScript",
                    skill2:"Vue JS",
                    skill3:"Python",
                    skill:"",
                },
                email: "trung1234@gmail.com", // Email riêng biệt
                phone: {
                    ese:"84",
                    phoneNumber:'9221456',
                },
                contach: 
                {
                    header:"Giới Thiệu Bản Thân",
                    main:"Hiểu biết tốt về lập trình AI. Muốn tạo dự án bot AI có kèm API AI chuyên dụng",
                    footer:{
                        linkedin:"https://www.linkedin.com/in/troy-phung-72006b315/",
                        github:"https://github.com/trung-dev-del",
                        twitter:""
                    }
                },
            };
            // Gán dữ liệu giả vào state
            setCard(mockData);
        }
    };
    
    useEffect(() => {
        fetchData();
      });
    
    return (
        <Box className={styles.Trung} p={4} boxShadow="lg" borderRadius="lg">
            <VStack spacing={2} mb={6}>

                <Heading as="h1">
                    <div className={styles.header}>
                        <h1 >Hello, I'm: 
                            <span>  </span>
                            <span>{card?.name}</span>
                            </h1>
                    </div>
                    <div className={styles.linkInfo}>
                        <Link to="/work">Work</Link> 
                        <Link to="/about-for-me">About for Me</Link> 
                        <Link to="/contact">Contact</Link>
                    </div>
                </Heading>
            </VStack>

            <HStack spacing={6} justifyContent="center" alignItems="center" className={styles.main}>
                <Image
                    src={avt_img}
                    alt="Phung Hai Trung's Avatar"
                    className={styles.img}
                />
                <div className={styles.infoTrung}>
                    <h2> Devlopver fontend & AI</h2>
                    <Text as="p" className={styles.text}>Birthday: Ngày {card?.birthday} Tháng {card?.birthdayThang} Năm {card?.birthdayNam} </Text>
                    <Text as="p" className={styles.text}>PRGM: 
                        
                        - {card?.skillProgramer.skill1} {' '}
                        - {card?.skillProgramer.skill2} {' '}
                        - {card?.skillProgramer.skill3} {' '}
                        - {card?.skillProgramer.skill} </Text>
                    <Text as="p" className={styles.text}> Địa Chỉ LH: <br/>
                    - Email: {card?.email}<br/>
                    - Phone: +{card?.phone.ese}
                    {' '} 
                    {card?.phone.phoneNumber}
                    
                    </Text>
                    <Text as="p" className={`${styles.textContact} ${styles.text}`}>
                        Contact:{' '} 
                        {card?.contach.header}<br/>
                        {card?.contach.main}<br/>
                    </Text>
                    <br /><br />
                    <Text as="p" className={styles.textIcon}>
                        <a href={card?.contach.footer.github} target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} />
                        </a>
                        <a href={card?.contach.footer.linkedin} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} />
                        </a>
                        <a href={card?.contach.footer.twitter} target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={30} />
                        </a> 
                    </Text>
                <br />
                
                <Button
                    as="a"
                    href="#"
                    fontWeight="bold"
                    sx={{
                        margin: "0.5rem",
                        transition: "all 0.3s ease",
                        backgroundColor:"#663399",
                        color:"#fff",
                        "&:hover": {
                            transform: "scale(1.05)",
                            backgroundColor: "#663399",
                            color: "#fff",
                        },
                    }}
                >
                    Show Info All
                </Button>
                </div>
            </HStack>

            <div className={styles.footer}>
                <Divider orientation="horizontal" my={6} className={styles.lineBottom} />
                <Box textAlign="center" p={4} boxShadow="lg" borderRadius="lg" bg="gray.100">
                    <Link to="/addinfoall">
                        <Button
                            fontWeight="bold"
                            variant="outline"
                            sx={{
                                margin: "0.5rem",
                                transition: "all 0.3s ease",
                                backgroundColor:"#fff",
                                color:"#663399",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    backgroundColor: "#663399",
                                    color: "#fff",
                                },
                            }}
                        >
                            Add Info All
                        </Button>
                    </Link>

                    <Link to="/">
                        <Button
                            fontWeight="bold"
                            variant="outline"
                            sx={{
                                margin: "0.5rem",
                                transition: "all 0.3s ease",
                                backgroundColor:"#fff",
                                color:"#663399",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    backgroundColor: "#ccc",
                                    color: "#663399",
                                },
                            }}
                        >
                            To the Home page
                        </Button>
                    </Link>
                </Box>
            </div>
        </Box>
    );
}

export default Trung;