import { Flex, Image, Text } from "@chakra-ui/react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Amanda from "../../../assets/img/amanda.jfif";
import Caio from "../../../assets/img/caio.jfif";
import Alysson from "../../../assets/img/Avatar.png";
import Talitta from "../../../assets/img/talitta.png";
import Adriano from "../../../assets/img/adriano.jfif";

export const Team = () => {
  return (
    <Flex gap={"20px"} wrap="wrap" w={"60%"} align="center" justify={"center"} m="50px 0">
      <Text w="100%" align="center" justify={"center"} fontSize="40px">
        Nossa equipe
      </Text>
      <Flex bg="#AD9D38" h="240px" w="215px" borderRadius={"20px"}>
        <Flex
          bg="#D8D8D8"
          borderRadius={"0 0 20px 20px "}
          mt="60px"
          direction={"column"}
          justify="flex-start"
          align={"center"}
          w="100%"
        >
          <Image
            src={Adriano}
            borderRadius="100%"
            w={"60px"}
            h="60px"
            transform="translateY(-25px)"
          />
          <Text>Adriano Abner</Text>
          <Text fontSize={"12px"}>Scrum Master</Text>

          <Flex mt="30px" gap="10px">
            <AiFillLinkedin color="#AD9D38" /> <AiFillGithub color="#AD9D38" />
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
          w="100%"
        >
          <Image
            src={Amanda}
            borderRadius="100%"
            w={"60px"}
            h="60px"
            transform="translateY(-25px)"
          />
          <Text>Amanda O.</Text>
          <Text fontSize={"12px"}>Tech Leader</Text>

          <Flex mt="30px" gap="10px">
            <AiFillLinkedin color="#9A4A4D" />
            <AiFillGithub color="#9A4A4D" />
          </Flex>
        </Flex>
      </Flex>

      <Flex bg=" #8075C3" h="240px" w="215px" borderRadius={"20px"}>
        <Flex
          bg="#D8D8D8"
          borderRadius={"0 0 20px 20px "}
          mt="60px"
          direction={"column"}
          justify="flex-start"
          align={"center"}
          w="100%"
        >
          <Image
            src={Caio}
            borderRadius="100%"
            w={"60px"}
            h="60px"
            transform="translateY(-25px)"
          />
          <Text>Caio Giffoni</Text>
          <Text fontSize={"12px"}>Product Owner</Text>

          <Flex mt="30px" gap="10px">
            <AiFillLinkedin color="#8075C3" />
            <AiFillGithub color="#8075C3" />
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
          w="100%"
        >
          <Image
            src={Talitta}
            borderRadius="100%"
            w={"60px"}
            h="60px"
            transform="translateY(-25px)"
          />
          <Text>Tallita Nunes</Text>
          <Text fontSize={"12px"}>Quality Assurance</Text>

          <Flex mt="30px" gap="10px">
            <AiFillLinkedin color="#AB6E65" />
            <AiFillGithub color="#AB6E65" />
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
          w="100%"
        >
          <Image
            src={Alysson}
            borderRadius="100%"
            w={"60px"}
            h="60px"
            transform="translateY(-25px)"
          />
          <Text>Alysson Colombo</Text>
          <Text fontSize={"12px"}>Quality Assurance</Text>

          <Flex mt="30px" gap="10px">
            <AiFillLinkedin color="#666363" />
            <AiFillGithub color="#666363" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
