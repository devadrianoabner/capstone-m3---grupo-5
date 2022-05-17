import Select from "../Select";
import Textarea from "../Textarea";
import { useToast } from "@chakra-ui/react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDiets } from "../../providers/diets";
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

const ModalDiet = () => {
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
  const { addDiet } = useDiets();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlePostDiet = (data) => {
    toast({
      title: "Dieta enviada!",
      description: "Agora cuidaremos disso para você!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    console.log(data);
    addDiet(data);
    onClose();
  };
  return (
    <>
      <Button
        width={["74px", "100px", "147px"]}
        height={["22px", "30px", "39px"]}
        px="5"
        bg="#706B4C"
        color="#fff"
        fontSize={["8px", "12px", "15px", "15px"]}
        fontWeight="500"
        onClick={onOpen}
      >
        Fazer pedido
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        borderRadius={"8px"}
        textAlign={"center"}
      >
        <ModalOverlay borderRadius={"8px"} />
        <form w={"95%"} id="new-form" onSubmit={handleSubmit(handlePostDiet)}>
          <ModalContent maxW={"350px"} borderRadius={"8px"} bgColor={"#D9D9D9"}>
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
                label=" Opções para dietas restritas"
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
              justifyContent={"center"}
            >
              <Button
                alignContent={"center"}
                form="new-form"
                bg="#A69C5D"
                color={"black"}
                type="submit"
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
