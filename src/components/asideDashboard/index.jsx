import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  List,
  ListItem,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Avatar,
} from "@chakra-ui/react";
import { ModalLogout } from "../modalLogout";
import { useHistory, Link } from "react-router-dom";
import iconSeta from "../../assets/iconsDashboard/iconSeta.svg";
import { useUser } from "../../providers/user";

export const AsideDashboard = ({
  corBody,
  fotoUser,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  textIcon1,
  textIcon2,
  textIcon3,
  textIcon4,
  textIcon5,
  baseColor,
  isOpen,
  onOpen,
  onClose,
  link1,
  link2,
  link3,
  link4,
  link5,
}) => {
  /* const { isOpen, onOpen, onClose } = useDisclosure(); */

  const history = useHistory();

  const { user } = useUser();
  return (
    <Flex
      bgColor={corBody}
      direction="column"
      display={["none", "none", "none", "none", "fixed"]}
      h="100%"
      borderRadius="0 4px 0 0"
    >
      <Flex direction="column">
        <Flex direction="column" pl="15px" h="80%">
          <Box
            borderBottom="2px"
            borderColor={baseColor}
            display={["flex", "none", "none", "none"]}
          >
            <Flex h="40px" justify="flex-end" align="center" pr="20px">
              <Text fontSize="15px" color={baseColor} fontWeight="extrabold">
                X
              </Text>
            </Flex>
          </Box>

          <Box borderBottom="2px" borderColor={baseColor} pb="13px">
            <Avatar boxSize="82px" mt="22px" name={user.name} size={"xl"} />
            <Text fontSize="25px" fontWeight="600" mt="15px" color={baseColor}>
              {user.name}
            </Text>
          </Box>

          <List mr="15px" spacing={4} mt="10px">
            <ListItem
              w="100%"
              _hover={{
                background: "#847b45",
              }}
            >
              <Link to={link1}>
                <Flex align="center">
                  <Image src={icon1} />
                  <Flex align="flex-end">
                    <Text
                      fontSize="17px"
                      fontWeight="600"
                      color={baseColor}
                      ml="5px"
                      mt="6px"
                    >
                      {textIcon1}
                    </Text>
                  </Flex>
                </Flex>
              </Link>
            </ListItem>

            <ListItem
              w="100%"
              _hover={{
                background: "#847b45",
              }}
            >
              <Link to={link2}>
                <Flex align="center">
                  <Image src={icon2} />
                  <Flex align="flex-end">
                    <Text
                      fontSize="17px"
                      fontWeight="600"
                      color={baseColor}
                      ml="5px"
                      mt="6px"
                    >
                      {textIcon2}
                    </Text>
                  </Flex>
                </Flex>
              </Link>
            </ListItem>

            <ListItem
              w="100%"
              _hover={{
                background: "#847b45",
              }}
            >
              <Link to={link3}>
                <Flex align="center">
                  <Image mt="5px" src={icon3} />
                  <Flex align="flex-end">
                    <Text
                      fontSize="17px"
                      fontWeight="600"
                      color={baseColor}
                      ml="5px"
                      mt="6px"
                    >
                      {textIcon3}
                    </Text>
                  </Flex>
                </Flex>
              </Link>
            </ListItem>

            <ListItem
              w="100%"
              _hover={{
                background: "#847b45",
              }}
            >
              <Link to={link4}>
                <Flex align="center">
                  <Image src={icon4} />
                  <Flex align="flex-end">
                    <Text
                      fontSize="17px"
                      fontWeight="600"
                      color={baseColor}
                      ml="5px"
                      mt="6px"
                    >
                      {textIcon4}
                    </Text>
                  </Flex>
                </Flex>
              </Link>
            </ListItem>

            <ListItem
              w="100%"
              _hover={{
                background: "#847b45",
              }}
            >
              <Link to={link5}>
                <Flex align="center">
                  <Image src={icon5} />
                  <Flex align="flex-end">
                    <Text
                      fontSize="17px"
                      fontWeight="600"
                      color={baseColor}
                      ml="5px"
                      mt="6px"
                    >
                      {textIcon5}
                    </Text>
                  </Flex>
                </Flex>
              </Link>
            </ListItem>
          </List>
        </Flex>

        <Flex pl="15px" align="flex-end" h="10vh">
          <ModalLogout baseColor={baseColor}>
            <Flex>
              <Image src={iconSeta} />
              <Text fontSize="14px" ml="2px" color={baseColor}>
                Logout
              </Text>
            </Flex>
          </ModalLogout>
        </Flex>
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={corBody}>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <Box borderBottom="2px" borderColor={baseColor} pb="13px">
              <Avatar boxSize="82px" mt="22px" name={user.name} size={"xl"} />
              <Text
                fontSize="27px"
                fontWeight="600"
                mt="15px"
                color={baseColor}
              >
                {user.name}
              </Text>
            </Box>

            <List mr="15px" spacing={3} mt="15px">
              <ListItem>
                <Link to={link1}>
                  <Flex align="center">
                    <Image src={icon1} />
                    <Flex align="flex-end">
                      <Text
                        fontSize="18px"
                        fontWeight="600"
                        color={baseColor}
                        ml="5px"
                        mt="6px"
                      >
                        {textIcon1}
                      </Text>
                    </Flex>
                  </Flex>
                </Link>
              </ListItem>

              <ListItem>
                <Link to={link2}>
                  <Flex align="center">
                    <Image src={icon2} />
                    <Flex align="flex-end">
                      <Text
                        fontSize="18px"
                        fontWeight="600"
                        color={baseColor}
                        ml="5px"
                        mt="6px"
                      >
                        {textIcon2}
                      </Text>
                    </Flex>
                  </Flex>
                </Link>
              </ListItem>

              <ListItem>
                <Link to={link3}>
                  <Flex align="center">
                    <Image mt="5px" src={icon3} />
                    <Flex align="flex-end">
                      <Text
                        fontSize="18px"
                        fontWeight="600"
                        color={baseColor}
                        ml="5px"
                        mt="6px"
                      >
                        {textIcon3}
                      </Text>
                    </Flex>
                  </Flex>
                </Link>
              </ListItem>

              <ListItem>
                <Link to={link4}>
                  <Flex align="center">
                    <Image src={icon4} />
                    <Flex align="flex-end">
                      <Text
                        fontSize="18px"
                        fontWeight="600"
                        color={baseColor}
                        ml="5px"
                        mt="6px"
                      >
                        {textIcon4}
                      </Text>
                    </Flex>
                  </Flex>
                </Link>
              </ListItem>

              <ListItem>
                <Link to={link5}>
                  <Flex align="center">
                    <Image src={icon5} />
                    <Flex align="flex-end">
                      <Text
                        fontSize="18px"
                        fontWeight="600"
                        color={baseColor}
                        ml="5px"
                        mt="6px"
                      >
                        {textIcon5}
                      </Text>
                    </Flex>
                  </Flex>
                </Link>
              </ListItem>
            </List>
          </DrawerBody>

          <DrawerFooter>
            <ModalLogout baseColor={baseColor}>
              <Flex>
                <Image src={iconSeta} />
                <Text fontSize="14px" ml="2px" color={baseColor}>
                  Logout
                </Text>
              </Flex>
            </ModalLogout>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
