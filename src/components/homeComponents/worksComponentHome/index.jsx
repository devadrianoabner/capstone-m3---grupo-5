import { Flex, Image, Text, Box } from "@chakra-ui/react";
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
      mb="100px"
    >
      <Text fontSize={"50px"}>Como Funciona?</Text>

      <Flex mt="25px" align={"center"} justify="center" gap="10px" w="98vw">
        <Flex align={"center"} justify="center" direction={"column"} gap="25px">
          <Flex
            border={"3px solid #FFC727"}
            borderRadius="100%"
            justify={"center"}
            align="center"
            p={"20px"}
          >
            <Image src={NewAccount} w="100%" maxW="45px" />
          </Flex>
          <Text align={"center"} justify="center" fontWeight={"700"}>
            Crie sua conta
          </Text>
        </Flex>

        <Flex
          maxW="300px"
          w="300px"
          h="4px"
          bg="#000"
          borderRadius={"10px"}
          mb="50px"
          display={["none", "none", "none", "flex", "flex", "flex"]}
        />

        <Flex align={"center"} justify="center" direction={"column"} gap="25px">
          <Flex
            border={"3px solid #FFC727"}
            borderRadius="100%"
            justify={"center"}
            align="center"
            p={"20px"}
          >
            <Image src={Food} w="100%" maxW="45px" />
          </Flex>

          <Text align={"center"} justify="center" fontWeight={"700"}>
            Personalize sua dieta
          </Text>
        </Flex>

        <Flex
          maxW="300px"
          w="300px"
          h="4px"
          bg="#000"
          borderRadius={"10px"}
          mb="50px"
          display={["none", "none", "none", "flex", "flex"]}
        />

        <Flex align={"center"} justify="center" direction={"column"} gap="25px">
          <Flex
            border={"3px solid #FFC727"}
            borderRadius="100%"
            justify={"center"}
            align="center"
            p={"20px"}
          >
            <Image src={Agree} w="100%" maxW="45px" />
          </Flex>

          <Text align={"center"} justify="center" fontWeight={"700"}>
            Escolha a melhor proposta
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
