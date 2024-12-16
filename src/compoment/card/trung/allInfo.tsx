import React, { useState } from "react";
import {Box,} from "@chakra-ui/react";
import { Link } from 'react-router-dom'; 
import styles from './allInfo.module.scss'; // Sử dụng SCSS Modules
import avt_img from './img/avt_trung.jpg';
import { FaFacebook, FaInstagram, FaDiscord, FaLinkedin, FaWhatsapp,FaEnvelope } from 'react-icons/fa';
import { PiThreadsLogoBold } from 'react-icons/pi';

const AllInfo: React.FC = () => {
    return (
        <div className={styles.rightContainer}>
            <button

            ></button>
            <img src={avt_img} alt="Phung Hai Trung avt" className={styles.avtMini} />
            <h3>@trung_dc_2002</h3>
            <p>follow tớ để kiểm ny nè, ưu tiên tìm bà la sát</p>
            <Box className={styles.infoFull}>
                <Link to="" className={styles.socialLink}>
                    <FaFacebook className={styles.icon} />
                    <span>Facebook</span>
                </Link>
                <Link to="" className={styles.socialLink}>
                    <FaInstagram className={styles.icon} />
                    <span>Instagram</span>
                </Link>
                <Link to="" className={styles.socialLink}>
                    <FaDiscord className={styles.icon} />
                    <span>Discord</span>
                </Link>
                <Link to="" className={styles.socialLink}>
                    <FaLinkedin className={styles.icon} />
                    <span>LinkedIn</span>
                </Link>
                <Link to="" className={styles.socialLink}>
                    <FaWhatsapp className={styles.icon} />
                    <span>Whatsapp</span>
                </Link>
            </Box>
            <div className={styles.footer}>
                <Link to="" className="">
                    <FaDiscord className={styles.icon} />
                </Link>
                <Link to="" className="">
                    <FaLinkedin className={styles.icon} />
                </Link>
                <Link to="" className="">
                    <PiThreadsLogoBold className={styles.icon} />
                </Link>
                <Link to="" className="">
                    <FaEnvelope className={styles.icon} />
                </Link>
            </div>
        </div>   
    );
}
export default AllInfo;