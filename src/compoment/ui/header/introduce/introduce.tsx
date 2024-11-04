// IntroducePage.tsx
import React from 'react';
import { Box, Button, Heading, Text, Image, HStack, VStack, Link } from '@chakra-ui/react';
import styles from './introduce.module.scss';
import Avatar from '../../../../showimg/img/test.png'
import BackButton from '../../../ux/button/hover/Hover5s';
const IntroducePage: React.FC = () => {
  return (
    <Box className={styles.container}>
      {/* Navbar */}
      <HStack className={styles.navbar}>
        <Heading as="h1" className={styles.logo}>Img Avatar Tien</Heading>
        <HStack className={styles.navLinks}>
          <Link href="#">WORK</Link>
          <Link href="#">ABOUT ME</Link>
          <Link href="/lienhe">CONTACT</Link>
        </HStack>
      </HStack>

      {/* Main Content */}
      <HStack className={styles.mainContent}>
        {/* Profile Image */}
        <Box className={styles.imageContainer}>
          <Image
            // src="https://via.placeholder.com/200"
            src={Avatar}
            alt="Profile"
            className={styles.profileImage}
          />
        </Box>

        {/* Text Content */}
        <VStack align="start" className={styles.textContent}>
          <Heading as="h2" className={styles.greeting}>Hello, I'm <span className={styles.name}>Tien Vu</span></Heading>
          <Text className={styles.title}>UI/UX Designer</Text>
          <Text className={styles.description}>
            Passionate about crafting visually stunning and user-friendly web experiences, I specialize in UI/UX design that not only looks good but feels seamless. My work is driven by a deep understanding of user needs and a commitment to innovative design solutions. With a meticulous eye for detail and a dedication to staying ahead of industry trends, I transform complex ideas into intuitive, impactful designs that connect with audiences.
          </Text>
          <Text className={styles.description}>
          Whether you're looking to build a new brand identity, enhance your website, or develop a unique digital experience, I bring expertise, creativity, and enthusiasm to every project. Let’s collaborate to bring your vision to life and create a memorable digital experience that stands out in todays competitive market.
          </Text>
          <Button className={styles.contactButton}>Get in Touch</Button>
          <Text className={styles.email}>VTT-S02.com</Text>

          {/* Social Icons */}
          <HStack spacing={4} className={styles.socialIcons}>
            <Link href="#" aria-label="Facebook">🌐</Link>
            <Link href="#" aria-label="Instagram">📷</Link>
            <Link href="#" aria-label="Twitter">🐦</Link>
          </HStack>
        </VStack>
      </HStack>
      <BackButton/>
    </Box>
  );
};

export default IntroducePage;
