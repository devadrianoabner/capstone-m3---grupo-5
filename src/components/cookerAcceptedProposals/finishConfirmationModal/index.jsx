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
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDiets } from "../../../providers/diets";

export const FinishConfirmationModal = ({ dietId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const { modifyDiet } = useDiets();

  const [address, setAddress] = useState("");

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

            <AlertDialogBody>
              Tem certeza que deseja finalizar essa dieta?
              <Input
                mt="8px"
                placeholder="Insira o endereço de retirada"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="green"
                onClick={() => {
                  modifyDiet({ finished: true, address: address }, dietId);
                  onClose();
                }}
                ml={3}
              >
                Finalizar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};