import { Flex, Image, Text } from "@chakra-ui/react";
import logoImg from "../../assets/img/img-logo.png";

export const Logo = ({ color = "white", ...rest }) => {
  return (
    <Flex gap="5px" align="center" {...rest}>
      <Text fontFamily="logo" color={color}>
        Hora do
      </Text>
      <Text fontFamily="logo" color="primary">
        rango
      </Text>
      <Image src={logoImg} alt="logo-image-hora-do-rango" />
    </Flex>
  );
};
