import {
  Box,
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { BsFillGearFill } from "react-icons/bs";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { InputDiv } from "../../InputDiv";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import api from "../../../services";
import { useUser } from "../../../providers/user";
import { useToken } from "../../../providers/token";
import { ModalLogoutIcon } from "../../modalLougoutIcon";

export const ConfigurationButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { user, refreshUser } = useUser();
  const { token } = useToken();

  const schema = yup.object().shape({
    avatarUrl: yup
      .string()
      .url("Insira o link do seu avatar")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const insertAvatarUrl = ({ avatarUrl }) => {
    api
      .patch(
        `users/${user.id}`,
        {
          avatarUrl,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => refreshUser());
    onClose();
  };

  return (
    <>
      <Menu>
        <MenuButton>
          <Icon as={BsFillGearFill} w={[5, 6]} h={[5, 6]} />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={onOpen}>Mudar sua foto de avatar</MenuItem>
          <MenuItem display={["block", "none"]}>
            <ModalLogoutIcon>Logout</ModalLogoutIcon>
          </MenuItem>
        </MenuList>
      </Menu>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mudar Avatar</ModalHeader>
          <ModalCloseButton />
          <Box as="form" onSubmit={handleSubmit(insertAvatarUrl)}>
            <ModalBody>
              <InputDiv
                name="avatarUrl"
                register={register}
                error={errors.avatarUrl?.message}
                placeholder="Insira o link da sua foto de avatar"
              />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="green" type="submit">
                Enviar
              </Button>
            </ModalFooter>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};
