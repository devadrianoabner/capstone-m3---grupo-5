import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
  Input,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDiets } from "../../../providers/diets";
import { useUser } from "../../../providers/user";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { InputDiv } from "../../InputDiv";

export const FinishConfirmationModal = ({ dietId, clientId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const { modifyDiet, sendNotification } = useDiets();

  //const [address, setAddress] = useState("");

  const { user } = useUser();

  const schema = yup.object().shape({
    address: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const insertAddress = ({ address }) => {
    modifyDiet({ finished: true, address: address }, dietId);
    sendNotification(
      {
        message: `${user.name} finalizou sua dieta`,
        seen: false,
      },
      clientId
    );
    onClose();
  };

  return (
    <>
      <Button ml="10px" w="80px" h="30px" colorScheme="green" onClick={onOpen}>
        Finalizar{" "}
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Finalizar Dieta
            </AlertDialogHeader>

            <Box as="form" onSubmit={handleSubmit(insertAddress)}>
              <AlertDialogBody>
                Tem certeza que deseja finalizar essa dieta?
                <InputDiv
                  name="address"
                  register={register}
                  error={errors.address?.message}
                  placeholder="Insira o endereço de retirada"
                />
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="green" type="submit" ml={3}>
                  Finalizar
                </Button>
              </AlertDialogFooter>
            </Box>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
