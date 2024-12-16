import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { CardData } from "./CardData";

const AboutCardDetail: React.FC = () => {
  const { link } = useParams<{ link: string }>();
//   const [card, setCard] = useState(null);
  const [card, setCard] = useState<CardData | null>(null);
  const fetchData = async () => {
    try {
      const response = await fetch(`/api/about?link=${link}`);
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setCard(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [link]);

  if (!card) return <div>Loading...</div>;

  return (
    <Box p={6}>
      <Heading>{card.name}</Heading>
      <Image src={card.profileImage} alt={card.name} />
      <Text>{card.description}</Text>
      {/* Các thông tin chi tiết khác */}
    </Box>
  );
};

export default AboutCardDetail;
