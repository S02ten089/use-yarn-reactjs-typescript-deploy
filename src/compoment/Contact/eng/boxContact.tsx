// pages/Home.tsx
import React from 'react';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import ContactList from './Contact';

const Home: React.FC = () => {
  const { isOpen, onClose } = useDisclosure();
  return (
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="aliceblue">Danh Sách Liên Hệ</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ContactList />
          </ModalBody>
        </ModalContent>
      </Modal>
  );
};
export default Home;
