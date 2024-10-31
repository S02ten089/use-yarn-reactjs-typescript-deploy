import React from "react";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { LuClipboard, LuCopy, LuFileSearch, LuMessageSquare, LuScissors, LuShare } from "react-icons/lu";
import { Box } from "@chakra-ui/react";
import styles from './menu.module.scss'

const horizontalMenuItems = [
  { label: "Cut", value: "cut", icon: <LuScissors /> },
  { label: "Copy", value: "copy", icon: <LuCopy /> },
  { label: "Paste", value: "paste", icon: <LuClipboard /> },
]

const verticalMenuItems = [
  { label: "Look Up", value: "look-up", icon: <LuFileSearch /> },
  { label: "Translate", value: "translate", icon: <LuMessageSquare /> },
  { label: "Share", value: "share", icon: <LuShare /> },
]

type MobileMenuToggleProps = {
  toggleMenu: () => void;
};

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({ toggleMenu }) => {
  return (
    <Menu>
      <MenuButton as={Button} onClick={toggleMenu} variant="outline" size="sm">
        <FaBars />
      </MenuButton>
      <MenuList 
      bg='none' 
      >
      <Box display="flex" justifyContent="space-around" padding="4px">
          {horizontalMenuItems.map((item) => (
            <MenuItem
              key={item.value}
              value={item.value}
              width="14"
              gap="1"
              flexDirection="column"
              justifyContent="center"
              borderRadius='50px'
              outline='2px solid white'
              bg='#ffffff85'
              _hover={{
                bgGradient: "linear(to-r, teal.400, blue.400)",
              }}
              className={styles.transition}
            >
              {item.icon}
              {item.label}
            </MenuItem>
          ))}
        </Box>
        {verticalMenuItems.map((item) => (
          <MenuItem key={item.value} value={item.value}
          // borderRadius='20px'
          width='100%'
          bg=''
          fontWeight='600'
          color='black'  
          >
            <Box flex="1">{item.label}</Box>
            {item.icon}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default MobileMenuToggle;
