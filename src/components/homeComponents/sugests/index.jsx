import { Button, Flex, Image, Input, Text, Textarea } from "@chakra-ui/react";
import Camada from "../../../assets/img/home/camada.svg";
import Email1 from "../../../assets/img/home/email1ImageForm.svg";
import Email2 from "../../../assets/img/home/email2ImageForm.svg";

export const Sugests = () => {
  return (
    <Flex m="100px 0">
      <Flex
        maxW="500px"
        maxH="500px"
        h="500px"
        w={"500px"}
        direction="column"
        justify={"center"}
        align="flex-start"
        gap="20px"
        p="30px"
        bgColor="#e7e7e7"
      >
        <Text fontSize={"25px"}>
          Tem alguma sugestão <br />
          para melhorarmos?
        </Text>

        <Flex
          direction="column"
          justify={"center"}
          align="flex-start"
          gap="5px"
        >
          <Text fontSize={"10px"}>Nome</Text>
          <Input />
        </Flex>

        <Flex
          direction="column"
          justify={"center"}
          align="flex-start"
          gap="5px"
        >
          <Text fontSize={"10px"}>Email</Text>
          <Input />
        </Flex>

        <Flex
          direction="column"
          justify={"center"}
          align="flex-start"
          gap="5px"
        >
          <Text>Sugestão:</Text>
          <Textarea />
        </Flex>
        <Button bg="#BFB14E">Enviar</Button>
      </Flex>
      <Flex
        bgImage={Camada}
        bgColor="#fff7c4"
        maxW="500px"
        maxH="500px"
        h="500px"
      >
        <Image src={Email1} w="50%" transform="translateY(150px)" />
        <Image src={Email2} w="50%" transform="translateY(-170px)" />
      </Flex>
    </Flex>
  );
};
