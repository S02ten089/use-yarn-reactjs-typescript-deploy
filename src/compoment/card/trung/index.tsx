import React from 'react';
import styles from './trung.module.scss'; // Sử dụng SCSS Modules
import avt_img from './img/avt_trung.jpg';
import { Box, Heading, Image, Text, Divider, VStack, HStack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Trung() {
    return (
        <Box className={styles.Trung} textAlign="center" p={4} boxShadow="lg" borderRadius="lg">
            {/* Phần tiêu đề nổi bật */}
            <VStack spacing={2} mb={6}>
                <Heading as="h1" size="lg" color="teal.500">
                    <div className="header">
                    <h1>Phung Hai Trung</h1>
                    <div className="line-top"></div>
            </div>
                </Heading>
                {/* <Divider orientation="horizontal" className={styles.lineTop} /> */}
            </VStack>

            {/* Phần chính chứa ảnh và thông tin */}
            <HStack spacing={6} justifyContent="center" alignItems="center" className={styles.main}>
                <Image
                    src={avt_img}
                    alt="Phung Hai Trung's Avatar"
                    // boxSize="150px"
                    // borderRadius="full"
                    className={styles.img}
                />

                {/* Thanh nối ngang giữa ảnh và thông tin */}
                <div className="timeline-line"></div>

                {/* <Divider orientation="vertical" className={styles.timelineLine} /> */}

                {/* <VStack align="flex-start" className={styles.infoTrung} spacing={2}> */}
                <div className="info_trung">
                    <Text>Birthday: 29/03/2002</Text>
                    <Text>PRGM: PHP, React, Python, Java</Text>
                    <Text>Contact: Lorem ipsum dolor sit amet consectetur.</Text>
                </div>
                {/* </VStack> */}
            </HStack>

            {/* Thanh nối dưới cùng */}
            <div className="line-bottom"></div>
            <Divider orientation="horizontal" my={6} className={styles.lineBottom} />

            {/* Nút Show Info All */}
            <a href="#" className="show-info">
            <Button color="blue.400" fontWeight="bold" className={styles.showInfo}>
                Show Info All
            </Button>
            </a>
            
            <Link to="/addinfoall" className='AddInfo'>
                <Button color="blue.400" fontWeight="bold" className={styles.Addinfo}>
                    Add Info All
                </Button>
            </Link>
        </Box>
    );
}

export default Trung;