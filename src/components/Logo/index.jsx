import { Flex, Image, Text } from "@chakra-ui/react";
import logoImg from "../../assets/img/img-logo.png";

export const Logo = ({ color = "white", ...rest }) => {
  return (
    <Flex gap="1" align="center" {...rest}>
      <Flex>
        <Text fontFamily="logo" minW="60px" color={color}>
          Hora do
        </Text>
        <Text fontFamily="logo" color="primary">
          rango
        </Text>
      </Flex>

      <Image src={logoImg} alt="logo-image-hora-do-rango" />
    </Flex>
  );
};
