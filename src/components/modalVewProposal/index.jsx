import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  Image,
  Flex,
  WrapItem,
  Avatar,
  Text,
} from "@chakra-ui/react";
import { AiFillLike, AiFillStar } from "react-icons/ai";

import testeImagem from "../../assets/img/testeImage.png";
import Logo from "../../assets/img/logo2.png";
import Alysson from "../../assets/img/Avatar.png";
import Amanda from "../../assets/img/amanda.jfif";
import Caio from "../../assets/img/caio.jfif";
import Talitta from "../../assets/img/talitta.png";

// 1 - Ao clicar no botão Fazer um get na API das propostas enviadas para a proposta em questão
// 2 - Renderizar as propostas no modal
// 3 - Ao clicar no like perguntar se o cliente quer realmente aceitar aquela proposta
// 5 - Alterar o status de todas as propostas referente ao card
// 6 - Proposta aceita vai alterar o state para proposta aceita e card do cozinheiro fica verde
// 7 - Cozinheiro recebe uma notificação avisando que a sua proposta foi aceita e ele já pode começar a cozinhar
// 8 - Propostas recusadas vão alterar seus states para propostas recusadas, card do cozinheiro fica cinza com uma mensagem "Outro cozinheiro já está preparando essa refeição"
// 9 - Cozinheiro rece uma notificação avisando que o status de uma de suas propostas foi atualizado

const VewProposal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button w={"100px"} bg="#F0DC5B" onClick={onOpen}>
        Ver Propostas
      </Button>
      <Modal
        maxW={"500px"}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        textAlign={"center"}
      >
        <ModalOverlay />
        <form w={"100%"} id="new-form">
          <ModalContent borderRadius={"8px"} bgColor={"#faf4cf"}>
            <ModalHeader
              color={"#292822"}
              fontWeight={"bold"}
              bgColor={"#f0d62d"}
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
              p={"3"}
              isCentered
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius="8px"
              flexDirection="column"
            >
              <Flex
                bgColor={"#f5eaaf"}
                p={"3"}
                isCentered
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexWrap={"wrap"}
                borderRadius="8px"
              >
                <h1>Aqui vai aparecer o nome da dieta e uma breve descrição</h1>
              </Flex>

              <Flex justify={"center"} align={"center"} wrap={"wrap"}>
                <Flex minW="125px" p="5" direction="column" align="center">
                  <WrapItem m="1">
                    <Avatar name="Dan Abrahmov" src={Alysson} />
                  </WrapItem>

                  <Flex>
                    {/* Usar biblioteca do material ui para renderizar as estrelas */}
                    <AiFillStar size="10" color="#FFC727" />
                    <AiFillStar size="10" color="#FFC727" />
                    <AiFillStar size="10" color="#FFC727" />
                    <AiFillStar size="10" color="#FFC727" />
                    <AiFillStar size="10" color="#FFC727" />
                  </Flex>
                  <Text fontSize="22">Alysson</Text>
                  <Text fontSize="15">R$ 35,96</Text>
                  <Button>
                    <AiFillLike color="#57B929" size="30px" />
                  </Button>

                  <Text fontSize="10">Aceitar proposta</Text>
                </Flex>
                <Flex minW="125px" p="5" direction="column" align="center">
                  <WrapItem m="1">
                    <Avatar name="Dan Abrahmov" src={Amanda} />
                  </WrapItem>
                  <Flex>
                    {/* Usar biblioteca do material ui para renderizar as estrelas */}
                    <AiFillStar size="10" color="#FFC727" />
                    <AiFillStar size="10" color="#FFC727" />
                    <AiFillStar size="10" color="#FFC727" />
                    <AiFillStar size="10" color="#FFC727" />
                    <AiFillStar size="10" color="#FFC727" />
                  </Flex>
                  <Text fontSize="22">Amanda</Text>
                  <Text fontSize="15">R$ 35,96</Text>
                  <Button>
                    <AiFillLike color="#57B929" size="30px" />
                  </Button>

                  <Text fontSize="10">Aceitar proposta</Text>
                </Flex>
                <Flex minW="125px" p="5" direction="column" align="center">
                  <WrapItem m="1">
                    <Avatar name="Dan Abrahmov" src={Caio} />
                  </WrapItem>
                  <Flex>
                    {/* Usar biblioteca do material ui para renderizar as estrelas */}
                    <AiFillStar size="10" color="#FFC727" />
                    <AiFillStar size="10" color="#FFC727" />
                    <AiFillStar size="10" color="#FFC727" />
                    <AiFillStar size="10" color="#FFC727" />
                    <AiFillStar size="10" color="#FFC727" />
                  </Flex>
                  <Text fontSize="22">Caio</Text>
                  <Text fontSize="15">R$ 35,69</Text>
                  <Button>
                    <AiFillLike color="#57B929" size="30px" />
                  </Button>

                  <Text fontSize="10">Aceitar proposta</Text>
                </Flex>

                <Flex minW="125px" p="5" direction="column" align="center">
                  <WrapItem m="1">
                    <Avatar name="Dan Abrahmov" src={Talitta} />
                  </WrapItem>
                  <Flex>
                    {/* Usar biblioteca do material ui para renderizar as estrelas */}
                    <AiFillStar size="10" color="#FFC727" />
                    <AiFillStar size="10" color="#FFC727" />
                    <AiFillStar size="10" color="#FFC727" />
                    <AiFillStar size="10" color="#FFC727" />
                    <AiFillStar size="10" color="#FFC727" />
                  </Flex>
                  <Text fontSize="22">Talitta</Text>
                  <Text fontSize="15">R$ 35,96</Text>
                  <Button>
                    <AiFillLike color="#57B929" size="30px" />
                  </Button>

                  <Text fontSize="10">Aceitar proposta</Text>
                </Flex>
              </Flex>
            </ModalBody>
            <ModalFooter
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
            >
              <h1>Confirme atentamente os valores</h1>
              <Image
                src={testeImagem}
                alt="teste"
                w="120px"
                pos="absolute"
                bottom="-70"
                right="-10"
                color="#faf4cf"
                transform="translateY(-29px)"
              />
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};
export default VewProposal;
