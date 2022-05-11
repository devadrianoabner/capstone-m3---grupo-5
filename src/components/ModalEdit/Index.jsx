import Input from "../../components/Input";
import Select from "../../components/Select";
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

const ModalEdit = () => {
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
      <Button ml={4} colorScheme="orange" onClick={onOpen}>
        Editar dieta!
      </Button>
      <Modal
        w={"100vw"}
        h={"100vh"}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        borderRadius={"8px"}
      >
        <ModalOverlay borderRadius={"8px"} />
        <form id="new-form" onSubmit={handleSubmit(handleLogin)}>
          <ModalContent borderRadius={"8px"} bgColor={"#A69C5D"}>
            <ModalHeader
              color={"black"}
              fontWeight={"bold"}
              bgColor={"#F0DC5B"}
              textAlign={"center"}
              borderRadius={"8px"}
            >
              Editar sua dieta!
              <ModalCloseButton />
            </ModalHeader>
            <ModalBody
              m={"6"}
              p={"6"}
              isCentered
              bgColor={"#F0DC5B"}
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
            <ModalFooter>
              <Button
                alignContent={"center"}
                form="new-form"
                bg="#F0DC5B"
                color={"black"}
                type="submit"
                mr={3}
              >
                Editar dieta
              </Button>
              <Button
                alignContent={"center"}
                form="new-form"
                bg="#f55aaa"
                type="submit"
                mr={3}
                color={"black"}
              >
                Deletar dieta
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};
export default ModalEdit;
