import { Flex, Icon, Text } from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

export const HeaderDefault = () => {
  const history = useHistory();

  return (
    <Flex
      h={["48px", "48px", "48px", "80px"]}
      justify={"space-between"}
      m={[0, 0, 0, "0px 100px"]}
      fontSize="14px"
      bg={"#fff"}
      w="100vw"
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
        <Link to="/">Quem Somos</Link>
        <Link to="/">Nossa Equipe</Link>
        <Link to="/">Contato</Link>

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
