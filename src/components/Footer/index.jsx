import { Flex, Text } from "@chakra-ui/react";

export const Footer = ({ color = "footerDashboard" }) => {
  return (
    <Flex
      w="100%"
      minH="50px"
      bgColor={color} //TEM QUE COLOCAR A COR SE É DO DASHBOARD OU LOGIN / REGISTRO. PADRÃO É DASHBOARD
      justify="center"
      align="center"
      position="fixed"
      bottom="0" // coloquei position fixed no bottom, mas tbm poderemos usar height como %
    >
      <Text fontSize="12px">© Todos os direitos reservados</Text>
    </Flex>
  );
};
