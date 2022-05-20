import { Flex, Icon, Text } from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";

export const HeaderDefault = () => {
  const history = useHistory();

  return (
    <Flex
      h={["48px", "48px", "48px", "80px"]}
      justify={"space-between"}
      fontSize="14px"
      bg={"#fff"}
      w="98vw"
      p="0 20px"
    >
      <Logo color="#000" />
      <Flex
        display={["flex", "flex", "flex", "none"]}
        alignItems={"center"}
        justifyContent={"flex-end"}
        w="50%"
      >
        <AiOutlineUser
          onClick={() => {
            return history.push("/login");
          }}
        />
      </Flex>
      <Flex
        display={["none", "none", "none", "flex"]}
        justify="center"
        align="center"
        gap="40px"
        grow="1"
      >
        <Link to="/">Home</Link>
        <HashLink to="#quemsomos" smooth>
          Quem Somos
        </HashLink>
        <HashLink to="#nossaequipe" smooth>
          Nossa Equipe
        </HashLink>
        <HashLink to="#contato" smooth>
          Contato
        </HashLink>

        <Flex
          ml="50px"
          w="100px"
          h="30px"
          border="2px solid #FFDD00"
          borderRadius="5px"
          align="center"
          _hover={{ cursor: "pointer" }}
          onClick={() => {
            history.push("/login");
          }}
        >
          <Icon as={BsArrowRight} color="tertiary" ml="8px" />
          <Text color="tertiary" display="inline" ml="8px">
            Login
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
