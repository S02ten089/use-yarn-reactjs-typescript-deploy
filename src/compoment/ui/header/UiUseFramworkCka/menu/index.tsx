import React from "react";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { LuClipboard, LuCopy, LuFileSearch, LuMessageSquare, LuScissors, LuShare } from "react-icons/lu";
import { Box } from "@chakra-ui/react";
import styles from './menu.module.scss';

const horizontalMenuItems = [
  { label: "Cut", value: "cut", icon: <LuScissors /> },
  { label: "Copy", value: "copy", icon: <LuCopy /> },
  { label: "Paste", value: "paste", icon: <LuClipboard /> },
];

const verticalMenuItems = [
  { label: "Look Up", value: "look-up", icon: <LuFileSearch /> },
  { label: "Translate", value: "translate", icon: <LuMessageSquare /> },
  { label: "Share", value: "share", icon: <LuShare /> },
];

type MobileMenuToggleProps = {
  toggleMenu: () => void;
};

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({ toggleMenu }) => {
  // Hàm xử lý chia sẻ
  const handleShare = () => {
    const url = 'http://www.vtt-s02.com/'; // Đường dẫn trang web cần chia sẻ
    const text = "Check out this page!"; // Nội dung chia sẻ
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;

    // Mở liên kết chia sẻ trong tab mới
    window.open(facebookShareUrl, '_blank');
    // Bạn có thể thay thế bằng twitterShareUrl nếu muốn chia sẻ lên Twitter
    // window.open(twitterShareUrl, '_blank');
  };

  // Hàm xử lý chuyển hướng đến dịch
  const handleTranslate = (type: 'image' | 'text') => {
    if (type === 'image') {
      window.open('https://translate.yandex.com/ocr', '_blank');
    } else if (type === 'text') {
      window.open('https://www.google.com/search?q=translate', '_blank');
    }
  };

  // Hàm sao chép URL vào clipboard
  const handleCopy = () => {
    const url = window.location.href; // Lấy URL hiện tại của trang
    navigator.clipboard.writeText(url) // Sao chép URL vào clipboard
      .then(() => {
        alert(" Đã sao chép URL vào khay nhớ tạm! "); // Hiển thị thông báo thành công
      })
      .catch((err) => {
        console.error("Failed to copy: ", err); // Xử lý lỗi
      });
  };
  const handleCut =()=> {
    const url = window.location.href; // Lấy URL hiện tại của trang
    navigator.clipboard.writeText(url) // Sao chép URL vào clipboard
      .then(() => {
        alert(" Cắt Thành Công! "); // Hiển thị thông báo thành công
      })
      .catch((err) => {
        console.error("Failed to copy: ", err); // Xử lý lỗi
      });
  };
  const update = () => {
    // console.log("Đang update!")
    alert(" Đang update! ");
  };
  const updateSearh = () => {
    // console.log("Đang update!")
    alert(" Đang update tìm kiếm! ");
  };

  return (
    <Menu>
      <MenuButton as={Button} onClick={toggleMenu} variant="outline" size="sm">
        <FaBars />
      </MenuButton>
      <MenuList bg='none'>
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
              onClick={item.value === "copy" ? handleCopy : item.value === "cut" ? handleCut : item.value === "paste" ? update : undefined} // Gọi hàm sao chép khi nhấp vào "Copy"
            >
              {item.icon}
              {item.label}
            </MenuItem>
          ))}
        </Box>
        {verticalMenuItems.map((item) => (
          <MenuItem 
            key={item.value} 
            value={item.value}
            onClick={item.value === "share" ? handleShare : item.value === "look-up" ? updateSearh : item.value === "translate" ? () => handleTranslate('text') : undefined} // Gọi hàm chia sẻ hoặc dịch
            width='100%'
            fontWeight='600'
            color='black'  
            bg=''
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
