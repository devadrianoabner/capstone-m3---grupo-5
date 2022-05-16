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

export const ButtonConfirmAcceptence = ({ acceptedOffer, cook, price }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <>
      <Button colorScheme="green" w="40%" mt="20px" ml="20px" onClick={onOpen}>
        Aceitar
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Aceitar Oferta
            </AlertDialogHeader>

            <AlertDialogBody>
              Tem certeza que desejar aceitar essa oferta do {cook.name} por R$
              {price.toFixed(2).replace(".", ",")}?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose} colorScheme="red">
                Cancelar
              </Button>
              <Button
                onClick={() => {
                  acceptedOffer();
                }}
                ml={3}
                colorScheme="green"
              >
                Aceitar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
