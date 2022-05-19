import {
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Logo from "../../assets/img/logo2.png";
import { useDiets } from "../../providers/diets";
import { useToken } from "../../providers/token";
import api from "../../services";
import { ProposalCard } from "../diets/proposalsCard";

const ModalViewProposal = ({ dietId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [proposals, setProposals] = useState([]);
  const { token } = useToken();

  const { diets } = useDiets();

  useEffect(() => {
    api
      .get(`/proposals?dietId=${dietId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setProposals(res.data))
      .catch((e) => console.log(e));
  }, [diets]);

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
        Ver Propostas
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered textAlign={"center"}>
        <ModalOverlay />
        <ModalContent borderRadius={"8px"}>
          <ModalHeader
            color={"#292822"}
            fontWeight={"bold"}
            bgColor={"primary"}
            textAlign={"center"}
            borderRadius="8px 8px 0 0"
            pos="relative"
            fontSize="22"
          >
            Escolha a melhor proposta!
            <Image
              src={Logo}
              alt="teste"
              w="120px"
              pos="absolute"
              top="0"
              left="-7"
              color="#faf4cf"
              transform="translateY(-29px)"
            />
          </ModalHeader>
          <ModalBody
            p={"3px"}
            isCentered
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius="8px"
            flexDirection="column"
          >
            <Flex
              bgColor={"#ffffff"}
              p={"10px"}
              isCentered
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexWrap={"wrap"}
              borderRadius="8px"
              m="8px"
            >
            </Flex>
            <Text fontSize="15px" fontWeight="bold">
              Você tem {proposals.length} proposta
              {proposals.length === 1 ? "" : "s"}:
            </Text>

            <Flex direction="column" h="500px" overflow="auto">
              {proposals.map((proposal, i, proposals) => (
                <ProposalCard
                  proposal={proposal}
                  proposals={proposals}
                  onClose={onClose}
                />
              ))}
            </Flex>
          </ModalBody>
          <ModalFooter
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
          >
            <Button colorScheme="red" mr={3} w="40%" onClick={onClose}>
              Fechar
            </Button>
            {/*
              <Image
                src={testeImagem}
                alt="teste"
                w="120px"
                pos="absolute"
                bottom="-70"
                right="-10"
                color="#faf4cf"
                transform="translateY(-29px)"
              />*/}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalViewProposal;
