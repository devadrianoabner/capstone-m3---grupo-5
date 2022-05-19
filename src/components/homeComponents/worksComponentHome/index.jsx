import { Flex, Image, Text } from "@chakra-ui/react";
import NewAccount from "../../../assets/img/home/avatarCreateAccount.svg";
import Food from "../../../assets/img/home/imgFood.svg";
import Agree from "../../../assets/img/home/imgAgreement2.svg";

export const WorksHome = () => {
  return (
    <Flex
      w={"100%"}
      maxW="100vw"
      mt="100px"
      align={"center"}
      justify="center"
      direction={"column"}
      gap="100px"
    >
      <Text fontSize={"50px"}>Como Funciona?</Text>

      <Flex align={"center"} justify="center" gap="10px">
        <Flex align={"center"} justify="center" direction={"column"} gap="25px">
          <Flex
            border={"3px solid #FFC727"}
            borderRadius="100%"
            justify={"center"}
            align="center"
            p={"20px"}
          >
            <Image src={NewAccount} w="100%" />
          </Flex>

          <Text>Crie sua conta</Text>
        </Flex>

        <Flex
          maxW="300px"
          w="300px"
          h="4px"
          bg="#000"
          borderRadius={"10px"}
          mb="50px"
        />

        <Flex align={"center"} justify="center" direction={"column"} gap="25px">
          <Flex
            border={"3px solid #FFC727"}
            borderRadius="100%"
            justify={"center"}
            align="center"
            p={"10px"}
          >
            <Image src={Food} w="100%" />
          </Flex>

          <Text>Personalize sua dieta</Text>
        </Flex>

        <Flex
          maxW="300px"
          w="300px"
          h="4px"
          bg="#000"
          borderRadius={"10px"}
          mb="50px"
        />

        <Flex align={"center"} justify="center" direction={"column"} gap="25px">
          <Flex
            border={"3px solid #FFC727"}
            borderRadius="100%"
            justify={"center"}
            align="center"
            p={"30px 20px"}
          >
            <Image src={Agree} maxW="75px" />
          </Flex>

          <Text align={"center"} justify="center">
            Escolha a melhor <br /> proposta
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
