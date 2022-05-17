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

import iconSeta from "../../assets/iconsDashboard/iconSeta.svg";

export const AsideDashboard = ({
  corBody,
  fotoUser,
  nomeUser,
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
}) => {
  /*   const { isOpen, onOpen, onClose } = useDisclosure();
   */
  return (
    <Flex
      bgColor={corBody}
      direction="column"
      display={["none", "none", "none", "flex"]}
    >
      <Flex direction="column">
        <Flex h="75vh" direction="column" pl="15px">
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
            <Avatar boxSize="82px" mt="22px" src={fotoUser} name={nomeUser} />
            <Text fontSize="15px" fontWeight="600" mt="15px" color={baseColor}>
              {nomeUser}
            </Text>
          </Box>

          <List mr="15px">
            <ListItem borderBottom="1px" borderColor={baseColor}>
              <Button backgroundColor="#0000" h="45px">
                <Flex align="center">
                  <Image src={icon1} />
                  <Flex align="flex-end">
                    <Text fontSize="12px" color={baseColor} ml="5px" mt="6px">
                      {textIcon1}
                    </Text>
                  </Flex>
                </Flex>
              </Button>
            </ListItem>

            <ListItem borderBottom="1px" borderColor={baseColor}>
              <Button backgroundColor="#0000" h="45px">
                <Flex align="center">
                  <Image src={icon2} />
                  <Flex align="flex-end">
                    <Text fontSize="12px" color={baseColor} ml="5px" mt="6px">
                      {textIcon2}
                    </Text>
                  </Flex>
                </Flex>
              </Button>
            </ListItem>

            <ListItem borderBottom="1px" borderColor={baseColor}>
              <Button backgroundColor="#0000" h="45px">
                <Flex align="center">
                  <Image mt="5px" src={icon3} />
                  <Flex align="flex-end">
                    <Text fontSize="12px" color={baseColor} ml="5px" mt="6px">
                      {textIcon3}
                    </Text>
                  </Flex>
                </Flex>
              </Button>
            </ListItem>

            <ListItem borderBottom="1px" borderColor={baseColor}>
              <Button backgroundColor="#0000" h="45px">
                <Flex align="center">
                  <Image src={icon4} />
                  <Flex align="flex-end">
                    <Text fontSize="12px" color={baseColor} ml="5px" mt="6px">
                      {textIcon4}
                    </Text>
                  </Flex>
                </Flex>
              </Button>
            </ListItem>

            <ListItem borderBottom="1px" borderColor={baseColor}>
              <Button backgroundColor="#0000" h="45px">
                <Flex align="center">
                  <Image src={icon5} />
                  <Flex align="flex-end">
                    <Text fontSize="12px" color={baseColor} ml="5px" mt="6px">
                      {textIcon5}
                    </Text>
                  </Flex>
                </Flex>
              </Button>
            </ListItem>
          </List>
        </Flex>

        <Flex h="26vh" pl="15px" align="flex-end">
          <Button
            backgroundColor="#0000"
            border="1px"
            borderColor={baseColor}
            w="110px"
            h="30px"
            mb="5vh"
          >
            <Flex>
              <Image src={iconSeta} />
              <Text fontSize="14px" ml="2px" color={baseColor}>
                Logout
              </Text>
            </Flex>
          </Button>
        </Flex>
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={corBody}>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <Box borderBottom="2px" borderColor={baseColor} pb="13px">
              <Image boxSize="82px" mt="22px" src={fotoUser} />
              <Text
                fontSize="15px"
                fontWeight="600"
                mt="15px"
                color={baseColor}
              >
                {nomeUser}
              </Text>
            </Box>

            <List mr="15px">
              <ListItem borderBottom="1px" borderColor={baseColor}>
                <Button backgroundColor="#0000" h="45px">
                  <Flex align="center">
                    <Image src={icon1} />
                    <Flex align="flex-end">
                      <Text fontSize="12px" color={baseColor} ml="5px" mt="6px">
                        {textIcon1}
                      </Text>
                    </Flex>
                  </Flex>
                </Button>
              </ListItem>

              <ListItem borderBottom="1px" borderColor={baseColor}>
                <Button backgroundColor="#0000" h="45px">
                  <Flex align="center">
                    <Image src={icon2} />
                    <Flex align="flex-end">
                      <Text fontSize="12px" color={baseColor} ml="5px" mt="6px">
                        {textIcon2}
                      </Text>
                    </Flex>
                  </Flex>
                </Button>
              </ListItem>

              <ListItem borderBottom="1px" borderColor={baseColor}>
                <Button backgroundColor="#0000" h="45px">
                  <Flex align="center">
                    <Image mt="5px" src={icon3} />
                    <Flex align="flex-end">
                      <Text fontSize="12px" color={baseColor} ml="5px" mt="6px">
                        {textIcon3}
                      </Text>
                    </Flex>
                  </Flex>
                </Button>
              </ListItem>

              <ListItem borderBottom="1px" borderColor={baseColor}>
                <Button backgroundColor="#0000" h="45px">
                  <Flex align="center">
                    <Image src={icon4} />
                    <Flex align="flex-end">
                      <Text fontSize="12px" color={baseColor} ml="5px" mt="6px">
                        {textIcon4}
                      </Text>
                    </Flex>
                  </Flex>
                </Button>
              </ListItem>

              <ListItem borderBottom="1px" borderColor={baseColor}>
                <Button backgroundColor="#0000" h="45px">
                  <Flex align="center">
                    <Image src={icon5} />
                    <Flex align="flex-end">
                      <Text fontSize="12px" color={baseColor} ml="5px" mt="6px">
                        {textIcon5}
                      </Text>
                    </Flex>
                  </Flex>
                </Button>
              </ListItem>
            </List>
          </DrawerBody>

          <DrawerFooter>
            <Button
              backgroundColor="#0000"
              border="1px"
              borderColor={baseColor}
              w="110px"
              h="30px"
              mb="5vh"
            >
              <Flex>
                <Image src={iconSeta} />
                <Text fontSize="14px" ml="2px" color={baseColor}>
                  Logout
                </Text>
              </Flex>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
