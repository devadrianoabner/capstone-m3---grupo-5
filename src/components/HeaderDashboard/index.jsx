import { Box, Flex, Input } from "@chakra-ui/react";
import { Logo } from "../Logo";

import { Icon } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {
  return (
    <Flex
      w="100%"
      h={["50px", "50px", "90px"]}
      align="center"
      justify="space-between"
      mt={["8px", "8px", "0px"]}
    >
      <Box p="8px" ml="10px" display={["block", "block", "none", "none"]}>
        <Icon as={GiHamburgerMenu} w={[5, 6]} h={[5, 6]} />
      </Box>
      <Logo
        color={"#000"}
        display={["flex", "flex", "none", "none"]}
        mb="5px"
      />

      <Flex align="center" display={["none", "none", "flex"]}>
        <Flex
          w="385px"
          h="50px"
          bgColor="secondary"
          borderRadius="0px 15px 15px 0px"
          align="center"
          justify="center"
        >
          <Logo fontSize="25px" />
        </Flex>
        <Flex
          w={["200px", "200px", "230px", "300px"]}
          h="36px"
          align="center"
          border="1px solid #625710"
          borderRadius="54px"
          p="15px"
          ml={{ md: "50px", lg: "70px" }}
        >
          <Icon as={AiOutlineSearch} />
          <Input
            placeholder="Pesquise para filtrar"
            border="none"
            focusBorderColor="none"
          />
        </Flex>
      </Flex>
      <Flex mr={["10px", "20px"]} gap="8px">
        <Box p="8px">
          <Icon as={BsFillGearFill} w={[5, 6]} h={[5, 6]} />
        </Box>
        <Box p="8px">
          <Icon as={BiLogOut} w={[5, 6]} h={[5, 6]} />
        </Box>
      </Flex>
    </Flex>
  );
};