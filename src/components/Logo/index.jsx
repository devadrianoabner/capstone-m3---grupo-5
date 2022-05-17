import { Flex, Image, Text } from "@chakra-ui/react";
import logoImg from "../../assets/img/img-logo.png";

export const Logo = ({ color = "white", ...rest }) => {
  return (
    <Flex gap="1" align="center" {...rest}>
      <Flex>
        <Text
          fontFamily="logo"
          minW="60px"
          color={color}
          fontSize={["12px", "16px"]}
        >
          Hora do
        </Text>
        <Text
          fontFamily="logo"
          color="primary"
          ml={["0px", "7px"]}
          fontSize={["12px", "16px"]}
        >
          {/* ALTERAÇÃO PARA AJUSTE DA LOGO (ESPAÇO)*/}
          rango
        </Text>
      </Flex>

      <Image src={logoImg} alt="logo-image-hora-do-rango" />
    </Flex>
  );
};
