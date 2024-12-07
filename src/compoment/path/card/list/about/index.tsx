import React, { useEffect, useState } from "react";
import AboutCard from "../../about";
import styles from "./AboutList.module.scss";

interface CardData {
  id: number;
  name: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  profileImage: string;
  css: {
    bgColor: string;
    colorText: string;
    bgBox: string;
    bgAll: string;
    animationCard: string;
  };
}

const AboutList: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  const fetchData = async () => {
    try {
      // Sử dụng mock data hoặc API
      // const response = await fetch("/api/about/list");
      // if (!response.ok) throw new Error("Failed to fetch list data");
      // const data: CardData[] = await response.json();

      // Dùng mock data tạm thời
      const data: CardData[] = [
        {
          id: 1,
          name: "John Doe",
          title: "Frontend Developer",
          description: "Passionate about building interactive web applications.",
          email: "johndoe@example.com",
          phone: "+123456789",
          address: "123 Main Street, City, Country",
          socials: {
            linkedin: "https://linkedin.com/in/johndoe",
            github: "https://github.com/johndoe",
            twitter: "https://twitter.com/johndoe",
          },
          profileImage: "https://via.placeholder.com/150",
          css: {
            bgColor: "#ffffff",
            colorText: "#333333",
            bgBox: "#f0f0f0",
            bgAll: "#e5e5e5",
            animationCard: "scale(1)",
          },
        },
        {
          id: 2,
          name: "Jane Smith",
          title: "Backend Engineer",
          description: "Expert in building scalable APIs and microservices.",
          email: "janesmith@example.com",
          phone: "+987654321",
          address: "456 Another Road, City, Country",
          socials: {
            linkedin: "https://linkedin.com/in/janesmith",
            github: "https://github.com/janesmith",
            twitter: "https://twitter.com/janesmith",
          },
          profileImage: "https://via.placeholder.com/150",
          css: {
            bgColor: "#ffffff",
            colorText: "#333333",
            bgBox: "#f0f0f0",
            bgAll: "#e5e5e5",
            animationCard: "scale(1)",
          },
        },
      ];

      setCards(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.aboutList}>
      {cards.map((card) => (
        <AboutCard key={card.id} {...card} />
      ))}
    </div>
  );
};

export default AboutList;
