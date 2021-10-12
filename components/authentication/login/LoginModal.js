import { Button, useColorModeValue } from '@chakra-ui/react';
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from '@chakra-ui/react';
import { LoginTabs } from './LoginTabs';

export const LoginModal = ({ onClose, isOpen }) => {
  const footerBg = useColorModeValue('white', '#33332d');

  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="scale"
      scrollBehavior={'inside'}
      size="sm"
    >
      <ModalOverlay />
      <ModalContent>
        <LoginTabs />
        <ModalFooter bg={footerBg}>
          <Button id="close-modal" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
