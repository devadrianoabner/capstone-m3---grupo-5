import { Flex, Text } from "@chakra-ui/react";

export const Footer = ({ color = "footerDashboard" }) => {
  return (
    <Flex
      w="100%"
      maxW="100vw"
      minH="50px"
      bgColor={color} //TEM QUE COLOCAR A COR SE É DO DASHBOARD OU LOGIN / REGISTRO. PADRÃO É DASHBOARD
      justify="center"
      align="center" // tirei position fixed
    >
      <Text fontSize="12px">© Todos os direitos reservados</Text>
    </Flex>
  );
};
