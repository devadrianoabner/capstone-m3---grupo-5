import Textarea from "../Textarea";
import { useToast } from "@chakra-ui/react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "../Input/index";
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

const ModalDiet = () => {
  const formSchema = Yup.object().shape({
    dieta: Yup.string()
      .required("Campo obrigatório")
      .max(50, " máximo de 50 caracteres"),
    combo: Yup.string()
      .required("Campo obrigatório")
      .test("choosenMod", "Escolha sua opção", (value) => value),
  });

  const {diets} = useDiets();
  // console.log(diets)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogin = (data) => {
    toast({
      title: "Proposta enviada!",
      description: "Aguarde o retorno do cliente!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

  };
  return (
    <>
      <Button w={"140px"} bg="#F0DC5B" onClick={onOpen}>
        Fazer proposta
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        borderRadius={"8px"}
        textAlign={"center"}
      >
        <ModalOverlay borderRadius={"8px"} />
        <form w={"95%"} id="new-form" onSubmit={handleSubmit(handleLogin)}>
          <ModalContent maxW={"350px"} minH={"400px"}borderRadius={"8px"} bgColor={"#D9D9D9"}>
            <ModalHeader
              color={"black"}
              fontWeight={"bold"}
              bgColor={"#A69C5D"}
              textAlign={"center"}
              borderRadius={"8px"}
            >
              Envie sua proposta
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
                bg={"#FFFF"}
                name={"dieta"}
                textarea={"textarea"}
                isDisabled placeholder={diets.description}
                label="Plano alimentar"
                register={register}
                fontSize={"sm"}
                mb={"2"}
                errors={errors.dieta?.message}
              />

              <Input
                bg={"#fff"}
                label="Valor"
                placeholder="R$00,00"
                register={register}
                name={"combo"}
                fontSize={"sm"}
                mb={"2"}
                errors={errors.combo?.message}
              />
            </ModalBody>
            <ModalFooter
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
            >
              <Button
                alignContent={"center"}
                form="new-form"
                bg="#A69C5D"
                color={"black"}
                type="submit"
              >
                Enviar
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};
export default ModalDiet;