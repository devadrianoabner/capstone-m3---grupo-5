import { useToast } from "@chakra-ui/react";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
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
} from "@chakra-ui/react";
import { useDiets } from "../../providers/diets";

const ModalEdit = ({ dietId }) => {
  const formSchema = Yup.object().shape({
    description: Yup.string()
      .required("Campo obrigatório")
      .max(50, " máximo de 50 caracteres"),
    meal: Yup.string()
      .required("Escolha uma opção")
      .test("choosenMod", "Escolha sua opção", (value) => value),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const toast = useToast();
  const { modifyDiet } = useDiets();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDiet = (data) => {
    toast({
      title: "Dieta enviada!",
      description: "Agora cuidaremos disso para você!",
      status: "success",
      isClosable: true,
    });
    console.log(data);
    modifyDiet(data, dietId);
    onClose();
  };
  return (
    <>
      <Button
        fontSize={"sm"}
        borderRadius="8px"
        maxH={"30px"}
        bg={"#A69C5D"}
        _focus={{
          bg: "gray.200",
        }}
        onClick={onOpen}
      >
        Editar dieta
      </Button>
      <Modal
        w={"100vw"}
        h={"100vh"}
        isOpen={isOpen}
        onClose={onClose}
        borderRadius={"8px"}
      >
        <ModalOverlay borderRadius={"8px"} />
        <form w={"95%"} id="new-form" onSubmit={handleSubmit(handleDiet)}>
          <ModalContent maxW={"350px"} borderRadius={"8px"} bgColor={"#D9D9D9"}>
            <ModalHeader
              color={"black"}
              fontWeight={"bold"}
              bgColor={"#A69C5D"}
              textAlign={"center"}
              borderRadius={"8px"}
            >
              Editar sua dieta!
              <ModalCloseButton />
            </ModalHeader>
            <ModalBody
              m={"6"}
              isCentered
              bgColor={"#A69C5D"}
              borderRadius={"8px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexWrap={"wrap"}
            >
              <Textarea
                bg={"white"}
                name={"description"}
                textarea={"textarea"}
                placeholder="Digitar aqui sua dieta"
                label="Plano alimentar"
                register={register}
                fontSize={"sm"}
                mb={"2"}
                errors={errors.description?.message}
              />

              <Select
                label="Opções para dietas restritas"
                placeholder="Escolha o seu combo"
                register={register}
                name={"meal"}
                fontSize={"sm"}
                mb={"2"}
                errors={errors.meal?.message}
              />
            </ModalBody>
            <ModalFooter
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-evenly"}
            >
              <Button
                alignContent={"center"}
                form="new-form"
                bg="#A69C5D"
                color={"black"}
                onClick={onClose}
              >
                Cancelar
              </Button>
              <Button
                alignContent={"center"}
                form="new-form"
                bg="#5e5555"
                type="submit"
                color={"black"}
              >
                Editar dieta
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};
export default ModalEdit;
