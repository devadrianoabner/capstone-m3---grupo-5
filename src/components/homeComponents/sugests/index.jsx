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
        w={["300px", "400px", "500px", "500px", "500px"]}
        direction="column"
        justify={"center"}
        align="flex-start"
        gap="20px"
        p="30px"
        bgColor="#DDDDDD"
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
          <Input bg="#AEADAD" placeholder="Seu nome" />
        </Flex>

        <Flex
          direction="column"
          justify={"center"}
          align="flex-start"
          gap="5px"
        >
          <Text fontSize={"10px"}>Email</Text>
          <Input bg="#AEADAD" placeholder="Seu e-mail" />
        </Flex>

        <Flex
          direction="column"
          justify={"center"}
          align="flex-start"
          gap="5px"
        >
          <Text>Sugestão:</Text>
          <Textarea bg="#AEADAD" placeholder="Escreva aqui sua sugestão!" />
        </Flex>
        <Button bg="#BFB14E">Enviar</Button>
      </Flex>
      <Flex
        bgImage={Camada}
        bgColor="#DECD5B"
        maxW="500px"
        maxH="500px"
        h="500px"
        display={["none", "none", "none", "flex", "flex"]}
      >
        <Image src={Email1} w="50%" transform="translateY(150px)" />
        <Image src={Email2} w="50%" transform="translateY(-120px)" />
      </Flex>
    </Flex>
  );
};
