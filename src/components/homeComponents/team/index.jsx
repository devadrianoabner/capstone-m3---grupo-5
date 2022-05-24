import { Flex, Image, Text, Box } from "@chakra-ui/react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";
import Amanda from "../../../assets/img/amanda.jfif";
import Caio from "../../../assets/img/caio.jfif";
import Alysson from "../../../assets/img/Avatar.png";
import Talitta from "../../../assets/img/talitta.png";
import Adriano from "../../../assets/img/adriano.jfif";

import { Link as ChakraLink } from "@chakra-ui/react";

export const Team = () => {
  return (
    <>
      <Box id="nossaequipe" />
      <Flex justify={"center"} align="center" direction={"column"}>
        <Text w="100%" align="center" justify={"center"} fontSize="40px">
          Nossa equipe
        </Text>
        <Box
          w="100%"
          overflowX={["scroll", "scroll", "scroll", "hidden", "hidden"]}
        >
          <Flex
            gap={"20px"}
            wrap={["nowrap", "nowrap", "nowrap", "wrap", "wrap"]}
            w={["100vw", "100vw", "100vw", "60vw", "60vw"]}
            align="center"
            justify={["flex-start", "flex-start", "flex-start", "center"]}
            m="50px 0"
          >
            <Flex bg="#AD9D38" h="240px" w="215px" borderRadius={"20px"}>
              <Flex
                bg="#D8D8D8"
                borderRadius={"0 0 20px 20px "}
                mt="60px"
                direction={"column"}
                justify="flex-start"
                align={"center"}
                w="215px"
              >
                <Image
                  src={Adriano}
                  borderRadius="100%"
                  w={"60px"}
                  h="60px"
                  transform="translateY(-25px)"
                />
                <Text fontSize={"22px"} fontWeight={"600"}>
                  Adriano Abner
                </Text>
                <Text fontSize={"15px"}>Scrum Master</Text>

                <Flex mt="25px" gap="10px">
                  <ChakraLink
                    href="https://www.linkedin.com/in/adriano-abner-275736a7/"
                    isExternal
                  >
                    <AiFillLinkedin color="#AD9D38" w="50px" />
                  </ChakraLink>
                  <ChakraLink
                    href="https://github.com/devadrianoabner"
                    isExternal
                  >
                    <AiFillGithub color="#AD9D38" />
                  </ChakraLink>
                </Flex>
              </Flex>
            </Flex>

            <Flex bg="#666363" h="240px" w="215px" borderRadius={"20px"}>
              <Flex
                bg="#D8D8D8"
                borderRadius={"0 0 20px 20px "}
                mt="60px"
                direction={"column"}
                justify="flex-start"
                align={"center"}
                w="215px"
              >
                <Image
                  src={Alysson}
                  borderRadius="100%"
                  w={"60px"}
                  h="60px"
                  transform="translateY(-25px)"
                />
                <Text fontSize={"22px"} fontWeight={"600"}>
                  Alysson Colombo
                </Text>
                <Text fontSize={"15px"}>Quality Assurance</Text>

                <Flex mt="30px" gap="10px">
                  <ChakraLink
                    href="https://www.linkedin.com/in/alysson-colombo-7b5b84207/"
                    isExternal
                  >
                    <AiFillLinkedin color="#666363" />
                  </ChakraLink>
                  <ChakraLink href="https://github.com/alysson1346" isExternal>
                    <AiFillGithub color="#666363" />
                  </ChakraLink>
                </Flex>
              </Flex>
            </Flex>

            <Flex bg="#9A4A4D" h="240px" w="215px" borderRadius={"20px"}>
              <Flex
                bg="#D8D8D8"
                borderRadius={"0 0 20px 20px "}
                mt="60px"
                direction={"column"}
                justify="flex-start"
                align={"center"}
                w="215px"
              >
                <Image
                  src={Amanda}
                  borderRadius="100%"
                  w={"60px"}
                  h="60px"
                  transform="translateY(-25px)"
                />
                <Text fontSize={"22px"} fontWeight={"600"}>
                  Amanda Oliveira
                </Text>
                <Text fontSize={"15px"}>Tech Leader</Text>

                <Flex mt="30px" gap="10px">
                  <ChakraLink
                    href="https://www.linkedin.com/in/amandaolits/"
                    isExternal
                  >
                    <AiFillLinkedin color="#9A4A4D" />
                  </ChakraLink>

                  <ChakraLink href="https://github.com/amandaolits" isExternal>
                    <AiFillGithub color="#9A4A4D" />
                  </ChakraLink>
                </Flex>
              </Flex>
            </Flex>

            <Flex bg="#8075C3" h="240px" w="215px" borderRadius={"20px"}>
              <Flex
                bg="#D8D8D8"
                borderRadius={"0 0 20px 20px "}
                mt="60px"
                direction={"column"}
                justify="flex-start"
                align={"center"}
                w="215px"
              >
                <Image
                  src={Caio}
                  borderRadius="100%"
                  w={"60px"}
                  h="60px"
                  transform="translateY(-25px)"
                />
                <Text fontSize={"22px"} fontWeight={"600"}>
                  Caio Giffoni
                </Text>
                <Text fontSize={"15px"}>Product Owner</Text>

                <Flex mt="30px" gap="10px">
                  <ChakraLink
                    href="https://www.linkedin.com/in/caiocgfg/"
                    isExternal
                  >
                    <AiFillLinkedin color="#8075C3" />
                  </ChakraLink>
                  <ChakraLink href="https://github.com/caiogiffoni" isExternal>
                    <AiFillGithub color="#8075C3" />
                  </ChakraLink>
                </Flex>
              </Flex>
            </Flex>

            <Flex bg="#AB6E65" h="240px" w="215px" borderRadius={"20px"}>
              <Flex
                bg="#D8D8D8"
                borderRadius={"0 0 20px 20px "}
                mt="60px"
                direction={"column"}
                justify="flex-start"
                align={"center"}
                w="215px"
              >
                <Image
                  src={Talitta}
                  borderRadius="100%"
                  w={"60px"}
                  h="60px"
                  transform="translateY(-25px)"
                />
                <Text fontSize={"22px"} fontWeight={"600"}>
                  Talitta Nunes
                </Text>
                <Text fontSize={"15px"}>Quality Assurance</Text>

                <Flex mt="30px" gap="10px">
                  <ChakraLink
                    href="https://www.linkedin.com/in/talitta-nunes-ba17b252/"
                    isExternal
                  >
                    <AiFillLinkedin color="#AB6E65" />
                  </ChakraLink>
                  <ChakraLink
                    href="https://github.com/talitta-nunes"
                    isExternal
                  >
                    <AiFillGithub color="#AB6E65" />
                  </ChakraLink>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};
