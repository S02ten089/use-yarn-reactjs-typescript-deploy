import React, { useState, useEffect } from 'react';
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
    localStorage.setItem("user", JSON.stringify({ username }));
    // localStorage.setItem("user", JSON.stringify({ username, token, id }));
  };
  
  const handleMenuClick = (value: string) => {
  switch (value) {
    case "share":
      handleShare();
      break;
    case "look-up":
      updateSearch();
      break;
    case "out":
      outLogin();
      break;
    default:
      break;
  }
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
    // alert(`Chế độ đăng xuất đăng được update!\nLoading lại trang để đăng xuất!\n Cảm ơn đã trải nghiệm dịch vụ của chúng tôi!`)
    alert(`Đăng xuất thành công! Vui lòng tải lại trang.`);
    localStorage.removeItem("user"); // Xóa localStorage
    setLoggedInUser(null); // Reset lại state
    window.location.reload(); // Reload lại để giao diện cập nhật
  }
  const verticalMenuItems = [
    { label: loggedInUser ? `${loggedInUser}` : "User Account", value: "look-up", icon: <MdOutlineAccountCircle /> },
    { label: "Share", value: "share" },
    { label: 'Đăng Xuất' , value:'out'}
  ];
 useEffect(() => {
  try {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const parsed = JSON.parse(savedUser);
      setLoggedInUser(parsed.username);
    }
  } catch (error) {
    console.error("Lỗi khi parse dữ liệu user từ localStorage:", error);
    localStorage.removeItem("user");
  }
}, []);


  return (
    <Box>
      {loggedInUser ? (
        <Box display="flex" alignItems="center">
          {/* <Icon as={MdOutlineAccountCircle} mr={2} /> */}
          {/* <Heading size="md" mr={4}>Chào mừng, {loggedInUser}!</Heading> */}
          <Menu>
            <MenuButton className={styles.loginCssMobile} as={Button} onClick={toggleMenu} variant="outline" size="sm">
            <Icon as={MdOutlineAccountCircle}  />
            <Heading size="sm" ml={2}>Xin Chào, {loggedInUser}</Heading>
            </MenuButton>
            <MenuList>
              {verticalMenuItems.map((item) => (
                <MenuItem
                  key={item.value}
                  onClick={() => handleMenuClick(item.value)}
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
