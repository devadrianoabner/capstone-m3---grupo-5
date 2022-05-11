import Input from "../Input";
import Select from "../Select";
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
  Textarea,
} from "@chakra-ui/react";

const ModalDiet = () => {
  const formSchema = Yup.object().shape({
    proposta: Yup.string().required("Campo obrigatório"),
  });

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
      title: "Dieta enviada.",
      description: "Agora cuidaremos disso para você.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    console.log(data);
  };
  return (
    <>
      <Button colorScheme="orange" onClick={onOpen}>
        Enviar dieta!
      </Button>
      <Modal
        maxW={"500px"}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        borderRadius={"8px"}
        textAlign={"center"}
      >
        <ModalOverlay borderRadius={"8px"} />
        <form id="new-form" onSubmit={handleSubmit(handleLogin)}>
          <ModalContent borderRadius={"8px"} bgColor={"#F0DC5B"}>
            <ModalHeader
              color={"black"}
              fontWeight={"bold"}
              bgColor={"#A69C5D"}
              textAlign={"center"}
              borderRadius={"8px"}
            >
              Monte sua dieta aqui!
              <ModalCloseButton />
            </ModalHeader>
            <ModalBody
              m={"6"}
              p={"6"}
              isCentered
              bgColor={"#A69C5D"}
              borderRadius={"8px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexWrap={"wrap"}
            >
              <Textarea
                w={"85%"}
                bg={"white"}
                name={"dieta"}
                textarea={"textarea"}
                placeholder="Digitar aqui sua dieta"
                label="Plano alimentar"
                register={register}
              />
              <Input
                color={"black"}
                name={"proposta"}
                placeholder="Faça uma proposta de valor"
                label="Valor da proposta"
                register={register}
                errors={errors.proposta?.message}
              />
              <Select
                label=" Opções para dietas restritas"
                placeholder="Escolha o seu combo"
                register={register}
                name={"combo"}
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
                mr={3}
              >
                Enviar sua dieta!
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};
export default ModalDiet;
