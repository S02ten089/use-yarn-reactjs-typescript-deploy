import {Button, useColorMode } from "@chakra-ui/react";

const ToggleThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      {colorMode === "light" ? "Switch to Dark" : "Switch to Light"}
    </Button>
  );
};

export default ToggleThemeButton;
