import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

export const ButtonConfirmDelete = ({ removeDiet, dietId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <>
      <Button
        fontSize={"sm"}
        maxH={"30px"}
        borderRadius="8px"
        isCentered
        bg={"#6c663F"}
        color={"white"}
        _focus={{
          bg: "gray.500",
        }}
        onClick={onOpen}
      >
        Excluir
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Deletar Dieta
            </AlertDialogHeader>

            <AlertDialogBody>
              Tem certeza que desejar deletar essa dieta?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button
                onClick={() => {
                  removeDiet(dietId);
                  onClose();
                }}
                ml={3}
                colorScheme="red"
              >
                Deletar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
