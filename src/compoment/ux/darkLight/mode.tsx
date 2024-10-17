import {Button, useColorMode } from "@chakra-ui/react";

const ToggleThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Button onClick={toggleColorMode}>
      {colorMode === "light" ? "Switch to Dark" : "Switch to Light"}
    </Button>
  );
};

export default ToggleThemeButton;
