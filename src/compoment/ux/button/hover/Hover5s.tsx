// BackButton.tsx
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Button
      leftIcon={<ArrowBackIcon />}
      colorScheme="teal"
      variant="solid"
      onClick={() => navigate("/home")}
      _hover={{
        bg: "teal.600",
        transform: "scale(1.05)",
        transitionDuration: "5s", // Set hover duration to 5 seconds
        backgroundColor: "red"
      }}
      _active={{
        bg: "teal.700",
      }}
      paddingX="1.5rem"
      background='#1b1b8954'
    >
      Back to Home
    </Button>
  );
};

export default BackButton;
