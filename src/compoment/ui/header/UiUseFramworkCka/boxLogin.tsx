import React, { useState } from 'react';
import styles from './header.module.scss';
import ModalDangNhap from '../../../auth/ui/cka/login';
import ModalDangKy from '../../../auth/ui/cka/register';
import { Box, Button, Heading, Menu, MenuButton, MenuItem, MenuList, Icon } from '@chakra-ui/react';
import { MdOutlineAccountCircle } from "react-icons/md";

type MobileMenuToggleProps = {
  toggleMenu: () => void;
};

const BoxLG: React.FC<MobileMenuToggleProps> = ({ toggleMenu }) => {
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  const handleLoginSuccess = (username: string) => {
    setLoggedInUser(username);
  };

  const handleShare = () => {
    const url = 'http://www.vtt-s02.com/';
    const text = `Page VTT-S02.com\n------------------\n${loggedInUser}`;
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookShareUrl, '_blank');
  };

  const updateSearch = () => {
    alert(" Đang update Account! ");
  };
  const outLogin = () => {
    alert(`Chế độ đăng xuất đăng được update!\nLoading lại trang để đăng xuất!\n Cảm ơn đã trải nghiệm dịch vụ của chúng tôi!`)
  }
  const verticalMenuItems = [
    { label: loggedInUser ? `${loggedInUser}` : "User Account", value: "look-up", icon: <MdOutlineAccountCircle /> },
    { label: "Share", value: "share" },
    { label: 'Đăng Xuất' , value:'out'}
  ];

  return (
    <Box>
      {loggedInUser ? (
        <Box display="flex" alignItems="center">
          {/* <Icon as={MdOutlineAccountCircle} mr={2} /> */}
          {/* <Heading size="md" mr={4}>Chào mừng, {loggedInUser}!</Heading> */}
          <Menu>
            <MenuButton as={Button} onClick={toggleMenu} variant="outline" size="sm">
            <Icon as={MdOutlineAccountCircle}  />
            </MenuButton>
            <MenuList>
              {verticalMenuItems.map((item) => (
                <MenuItem
                  key={item.value}
                  onClick={
                    item.value === "share"
                      ? handleShare
                      : item.value === "look-up"
                      ? updateSearch
                      : item.value === "out"
                      ? outLogin
                      : undefined
                  }
                >
                  {/* {item.icon && <Icon as={MdOutlineAccountCircle} mr={2} />} */}
                  {item.label}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>
      ) : (
        <div className={styles.authButtons}>
          <button className={styles.loginBtn}>
            <ModalDangNhap onLoginSuccess={handleLoginSuccess} />
          </button>
          <button className={styles.signupBtn}>
            <ModalDangKy />
          </button>
        </div>
      )}
    </Box>
  );
};

export default BoxLG;
