import { Box, Flex, Input } from "@chakra-ui/react";
import { Logo } from "../Logo";

import { Icon, Button } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { ModalLogoutIcon } from "../modalLougoutIcon";
import { NotificationButton } from "../notificationButton";
import { ConfigurationButton } from "./configurationButton";

export const Header = ({ onOpen }) => {
  return (
    <Flex
      w={["100%"]}
      h={["50px", "50px", "90px"]}
      align="center"
      justify="space-between"
      mt={["8px", "8px", "0px"]}
    >
      <Box
        p="8px"
        ml="10px"
        display={["block", "block", "block", "block", "none", "none"]}
      >
        <Button bg="#0000" onClick={onOpen}>
          <Icon as={GiHamburgerMenu} w={[5, 6]} h={[5, 6]} />
        </Button>
      </Box>
      <Logo
        color={"#000"}
        display={["flex", "flex", "flex", "flex", "none"]}
        mb="5px"
      />

      <Flex align="center" display={["none", "none", "none", "none", "flex"]}>
        <Flex
          w={["0vw", "0vw", "0vw", "0vw", "19.3vw", "14.7vw"]}
          h="50px"
          bgColor="secondary"
          borderRadius="0px 15px 15px 0px"
          align="center"
          justify="center"
        >
          <Logo color="#000" />
        </Flex>
      </Flex>
      <Flex mr={["10px", "20px"]} direction="row">
        <Box mr="15px">
          <NotificationButton />
        </Box>
        <Box p="8px">
          <ConfigurationButton />
        </Box>
        <Box p="8px" display={["none", "block"]}>
          <Button
            bgColor="#fff0"
            w={[5, 6]}
            h={[5, 6]}
            _hover={{ background: "#fff0" }}
          >
            <ModalLogoutIcon>
              <Icon as={BiLogOut} w={[5, 6]} h={[5, 6]} />
            </ModalLogoutIcon>
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};
