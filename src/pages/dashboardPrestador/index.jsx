import { Header } from "../../components/HeaderDashboard";
import { MainAreaCooker } from "../../components/mainAreaCokker";
import { AsideCozinheiro } from "../../components/asideCozinheiro";
import { Footer } from "../../components/Footer";

import { Flex, Box, useDisclosure, Button, Text } from "@chakra-ui/react";

import { useContext } from "react";
import { UserContext } from "../../providers/user/index";

import { Icon } from "@chakra-ui/react";
import { AiOutlineBell } from "react-icons/ai";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

export const DashboardPrestador = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, setUser } = useContext(UserContext);
  console.log(user.notification);
  return (
    <Box>
      <Box h="10vh">
        <Header onOpen={onOpen} />
      </Box>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<Icon as={AiOutlineBell} />}
        ></MenuButton>
        <MenuList>
          {user.notification.map((notif) => {
            return <MenuItem>{notif.message}</MenuItem>;
          })}
        </MenuList>
      </Menu>

      <Box>
        <Flex h="90vh">
          <Box w={["0vw", "0vw", "0vw", "0vw", "20vw", "15vw"]}>
            <AsideCozinheiro
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
            />
          </Box>

          <Box
            w={["100vw", "100vw", "100vw", "100vw", "80vw", "85vw"]}
            ml={["10px", "10px", "15px", "25px", "37px"]}
            mr={["10px", "10px", "15px", "25px", "37px"]}
          >
            <MainAreaCooker
              concluidos={user.qntAccepted}
              faturamento={user.revenue}
            />
          </Box>
        </Flex>
      </Box>
      <Box h="5vh">
        <Footer />
      </Box>
    </Box>
  );
};
