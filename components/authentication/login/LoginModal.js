import { Button } from '@chakra-ui/button';
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { LoginTabs } from './LoginTabs';

export const LoginModal = ({ onClose, isOpen }) => {
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
        <ModalFooter>
          <Button id="close-modal" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
