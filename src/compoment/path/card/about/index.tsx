import React, { useEffect, useState } from "react";
import styles from "./AboutCard.module.scss";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

interface SocialLinks {
  linkedin?: string;
  github?: string;
  twitter?: string;
}
interface Css {
  bgColor: string;
  colorText: string;
  bgBox: string;
  bgAll: string;
  animationCard: string;
}

interface CardData {
  id: number;
  name: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  socials: SocialLinks;
  profileImage: string;
  css: Css;
}

const AboutCard: React.FC = () => {
  const [card, setCard] = useState<CardData | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/about");
      if (!response.ok) throw new Error("Failed to fetch data");
      const data: CardData = await response.json();
      setCard(data);
    } catch (error) {
      console.error(error);
    }
  };

  
  const fakeData: CardData = {
    id: 1,
    name: "John Doe",
    title: "Full Stack Developer",
    description: "A passionate developer with expertise in React and Node.js.",
    email: "john.doe@example.com",
    phone: "+123456789",
    address: "123 Main St, Anytown, USA",
    socials: {
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
      twitter: "https://twitter.com/johndoe",
    },
    profileImage: "https://via.placeholder.com/150",
    css: {
      bgColor: "#ffffff",
      colorText: "#333333",
      bgBox: "rgba(0, 0, 0, 0.10)",
      bgAll: "#e0e0e0",
      animationCard: "scale(1.05)",
    },
  };

  useEffect(() => {
    fetchData();
    setTimeout(() => {
      setCard(fakeData);
    }, 1000);
  }, []);

  if (!card) return <div>Loading...</div>;

  return (
    <div
      className={styles.aboutCardWrapper}
      style={{ backgroundColor: card.css.bgAll }}
    >
      <div
        className={styles.aboutCard}
        style={{
          backgroundColor: card.css.bgBox,
          color: card.css.colorText,
          transform: card.css.animationCard,
        }}
      >
        <img src={card.profileImage} alt={card.name} className={styles.avatar} />
        <h2 className={styles.name}>{card.name}</h2>
        <p className={styles.title}>{card.title}</p>
        <p className={styles.description}>{card.description}</p>
        <div className={styles.contact}>
          <p>Email: <a href={`mailto:${card.email}`}>{card.email}</a></p>
          <p>Phone: <a href={`tel:${card.phone}`}>{card.phone}</a></p>
          <p>Address: {card.address}</p>
        </div>
        <div className={styles.socials}>
          {card.socials.linkedin && (
            <a href={card.socials.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          )}
          {card.socials.github && (
            <a href={card.socials.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          )}
          {card.socials.twitter && (
            <a href={card.socials.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
