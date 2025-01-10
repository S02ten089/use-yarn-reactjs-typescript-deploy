import React, { useEffect, useState } from "react";
import {Box,Text} from "@chakra-ui/react";
import { Link } from 'react-router-dom'; 
import styles from './allInfo.module.scss'; // Sử dụng SCSS Modules
import avt_img from './img/avt_trung.jpg';
import { FaFacebook, FaInstagram, FaDiscord, FaLinkedin, FaWhatsapp,FaEnvelope } from 'react-icons/fa';
import { PiThreadsLogoBold } from 'react-icons/pi';
import { mockApi } from "./cardInfo";

const AllInfo: React.FC = () => {
  const [card, setCard] = useState<mockApi | null>(null);
  const fetchData = async () => {
    try {
      const response = await fetch("/api/about");
      if (!response.ok) throw new Error("Failed to fetch data");
      const data: mockApi = await response.json();
      setCard(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Mock data dùng khi gặp lỗi hoặc timeout
  const mockData: mockApi = {
    id: 1,
    name: "Phùng Hải Trung",
    avatar: avt_img,
    linkname: "",
    info: "trung_dc_2002",
    content: "Follow tớ để kiểm ny nè, ưu tiên tìm bà la sát",
    nameIcon: {
      nameIcon1: "Facebook",
      nameIcon2: "Instagram",
      nameIcon3: "Discord",
      nameIcon4: "LinkedIn",
      nameIcon5: "Whatsapp",
      nameIcon: "",
    },
    link: {
      link1: "https://facebook.com",
      link2: "https://instagram.com",
      link3: "https://discord.com",
      link4: "https://linkedin.com",
      link: "https://whatsapp.com",
    },
    icon: {
      icon1: "",
      icon2: "",
      icon3: "",
      icon4: "",
      icon: "",
    },
    iconbutton: {
      iconbutton1: "",
      iconbutton2: "",
      iconbutton3: "",
      iconbutton: "",
    },
    linkiconbutton: {
      linkiconbutton1: "https://discord.com",
      linkiconbutton2: "https://linkedin.com",
      linkiconbutton3: "https://threads.com",
      linkiconbutton4: "mailto:trung1234@gmail.com",
      linkiconbutton: "",
    },
    //css
      cssAvatar: "100%", //border-radius
      cssInfo: "32px", //cỡ chữ linkInfo
      cssContent: "24px",
      cssButton: "50px",
      cssBgButton: "3%",
      cssButtonClick:"",//không hỗ trợ khai báo hover trực tiếp cần qua css
      cssColorButton: "#3333CC",
      cssBg: "lavender",
      cssImgBg: "",
      linkInfo:"trung.Info",
    //
  };

  useEffect(() => {
    fetchData();
    const timeout = setTimeout(() => {
      if (!card) setCard(mockData);
    }, 2000);
    return () => clearTimeout(timeout); // Dọn dẹp timeout
  }, []);

  return (
    <Link
      to={`/${card?.linkInfo}`}
      // className={styles.}
      // style={{ backgroundColor:  }}
    >
    <Box className={styles.rightContainer} style={{background:card?.cssImgBg,
                                                    backgroundColor:card?.cssBg}}>
      <img src={avt_img} alt="Phung Hai Trung avt" 
      className={styles.miniAVT}
      style={{borderRadius: card?.cssAvatar}}
      />
      <Text style={{fontSize: card?.cssInfo}}>@{card?.info}</Text>
      <Text style={{fontSize: card?.cssContent}}>{card?.content}</Text>
      <Box className={styles.infoFull}>
        {card?.nameIcon && card.link && (
          <>
            <Link to={card.link.link1} className={styles.socialLink}>
              <FaFacebook className={styles.icon} />
              <span>{card.nameIcon.nameIcon1}</span>
            </Link>
            <Link to={card.link.link2} className={styles.socialLink}>
              <FaInstagram className={styles.icon} />
              <span>{card.nameIcon.nameIcon2}</span>
            </Link>
            <Link to={card.link.link3} className={styles.socialLink}>
              <FaDiscord className={styles.icon} />
              <span>{card.nameIcon.nameIcon3}</span>
            </Link>
            <Link to={card.link.link4} className={styles.socialLink}>
              <FaLinkedin className={styles.icon} />
              <span>{card.nameIcon.nameIcon4}</span>
            </Link>
            <Link to={card.link.link} className={styles.socialLink}>
              <FaWhatsapp className={styles.icon} />
              <span>{card.nameIcon.nameIcon5}</span>
            </Link>
          </>
        )}
      </Box>

      {/* Các nút dưới footer */}
      <div className={styles.footer}>
        {card?.linkiconbutton && (
          <>
            <Link to={card.linkiconbutton.linkiconbutton1}  style={{
                width:card.cssButton,
                height: card.cssButton,
                color:card.cssColorButton
              }}>
              <FaDiscord className={styles.icon} />
            </Link>
            <Link to={card.linkiconbutton.linkiconbutton2} style={{
                width:card.cssButton,
                height: card.cssButton,
                color:card.cssColorButton
              }}>
              <FaLinkedin className={styles.icon}  />
            </Link>
            <Link to={card.linkiconbutton.linkiconbutton3} style={{
                width:card.cssButton,
                height: card.cssButton, color:card.cssColorButton
              }}>
              <PiThreadsLogoBold className={styles.icon} />
            </Link>
            <Link to={card.linkiconbutton.linkiconbutton4} style={{
                width:card.cssButton,
                height: card.cssButton, color:card.cssColorButton
              }}>
              <FaEnvelope className={styles.icon} />
            </Link>
          </>
        )}
      </div>
    </Box>
    </Link>
  );
}
export default AllInfo;