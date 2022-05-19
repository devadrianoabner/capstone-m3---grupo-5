import { Flex, Icon, Text } from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { BsArrowRight } from "react-icons/bs";

export const HeaderDefault = () => {
  const history = useHistory();

  return (
    <Flex
      h={["48px", "48px", "48px", "80px"]}
      justify={["center", "center", "center", "space-between"]}
      m={[0, 0, 0, "0px 100px"]}
      fontSize="14px"
      bg={"#fff"}
      w="100vw"
      p="0 20px"
    >
      <Logo color="#000" />
      <Flex
        display={["none", "none", "none", "flex"]}
        justify="center"
        align="center"
        gap="40px"
        grow="1"
      >
        <Link to="/login">Home</Link>
        <Link to="/quemsomos">Quem Somos</Link>
        <Link to="/nossaequipe">Nossa Equipe</Link>
        <Link to="/under-construction">Ver Cozinheiros</Link>
        <Link to="/contato">Contato</Link>

        <Flex
          w="100px"
          h="30px"
          border="2px solid #FFDD00"
          borderRadius="5px"
          align="center"
          _hover={{ cursor: "pointer" }}
          onClick={() => {
            history.push("/register");
          }}
        >
          <Icon as={BsArrowRight} color="tertiary" ml="8px" />
          <Text color="tertiary" display="inline" ml="8px">
            Registrar
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
