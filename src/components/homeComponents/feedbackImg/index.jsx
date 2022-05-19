import Star from "../../../assets/img/home/estrelaHome.svg";
import Like from "../../../assets/img/home/likeHome.svg";
import Phone from "../../../assets/img/home/holdingCellHome.svg";
import Agree from "../../../assets/img/home/agreeHome.svg";
import { Flex, Image, Text } from "@chakra-ui/react";

export const FeedBackImg = () => {
  return (
    <Flex
      align="center"
      justify="center"
      gap={["20px", "40px", "80px", "100px"]}
      m="30px 0"
      flexWrap={"wrap"}
    >
      <Flex direction="column" align="center" gap="10px">
        <Image
          src={Star}
          w={["50%", "60%", "80%", "100%"]}
          alt="estrela amarela de cinco pontas"
        />
        <Text fontWeight={"700"}>Qualidade</Text>
      </Flex>

      <Flex direction="column" align="center" gap="10px">
        <Image
          src={Like}
          alt="estrela amarela de cinco pontas"
          transform="translateY(-10px)"
          w={["50%", "60%", "80%", "100%"]}
        />
        <Text fontWeight={"700"}>Satisfação</Text>
      </Flex>

      <Flex direction="column" align="center" gap="10px">
        <Image
          src={Phone}
          alt="estrela amarela de cinco pontas"
          transform="translateY(-10px)"
          w={["50%", "60%", "80%", "100%"]}
        />
        <Text fontWeight={"700"}>Facilidade</Text>
      </Flex>

      <Flex direction="column" align="center" gap="10px">
        <Image
          src={Agree}
          alt="estrela amarela de cinco pontas"
          transform="translateY(10px)"
          w={["50%", "60%", "80%", "100%"]}
        />
        <Text fontWeight={"700"}>Confiança</Text>
      </Flex>
    </Flex>
  );
};
