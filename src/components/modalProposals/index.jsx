import { Textarea } from "../textarea";
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
//import { useToken } from "../../providers/token";
import { useDiets } from "../../providers/diets";
import { useUser } from "../../providers/user";
import { useEffect } from "react";
import { normalizePrice } from "../../utils/mask";
import { InputMask } from "../inputMask";

const ModalProposals = ({ dietId, description }) => {
  const { postProposals } = useDiets();
  const { user } = useUser();

  const formSchema = Yup.object().shape({
    price: Yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlePostProposals = (data) => {
    toast({
      title: "Proposta enviada!",
      description: "Aguarde o retorno do cliente!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    postProposals(data, dietId, user.id);
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
        <form
          w={"95%"}
          id="new-form"
          onSubmit={handleSubmit(handlePostProposals)}
        >
          <ModalContent
            maxW={"350px"}
            minH={"400px"}
            borderRadius={"8px"}
            bgColor={"#D9D9D9"}
          >
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
                name={"description"}
                textarea={"textarea"}
                placeholder={description}
                label="Plano alimentar"
                register={register}
                fontSize={"sm"}
                mb={"2"}
              />
              <Input
                bg={"#fff"}
                label="Mensagem"
                placeholder="Mensagem do cozinheiro"
                register={register}
                name={"message"}
                fontSize={"sm"}
                mb={"2"}
              />

              <InputMask
                bg={"#fff"}
                label="Valor"
                placeholder="R$00,00"
                register={register}
                name={"price"}
                fontSize={"sm"}
                mb={"2"}
                errors={errors.price?.message}
                watch={watch}
                setValue={setValue}
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
export default ModalProposals;
