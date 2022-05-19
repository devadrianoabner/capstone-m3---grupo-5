import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";

import { useHistory } from "react-router-dom";

export const ModalLogoutIcon = ({ children, baseColor }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();
  return (
    <>
      <Button
        bg="#fff0"
        onClick={onOpen}
        display={["none", "flex", "flex", "flex"]}
        w={[5, 6]}
        h={[5, 6]}
        _hover={{ background: "#fff0" }}
      >
        {children}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="#F0DC5B" color="#000">
            Logout
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justifyContent="center">
              <Text fontSize="25px" fontWeight="600">
                Deseja mesmo sair?
              </Text>
            </Flex>
          </ModalBody>
          <Flex justifyContent="center">
            <ModalFooter>
              <Button
                _hover={{
                  background: "#056305",
                }}
                color="#fff"
                bg="green 
                
                "
                mr={3}
                onClick={() => {
                  localStorage.clear();
                  history.push("/login");
                }}
              >
                Sim
              </Button>

              <Button
                bg="#a52024"
                color="#fff"
                onClick={onClose}
                _hover={{
                  background: "#781518",
                }}
              >
                Não
              </Button>
            </ModalFooter>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};
