import Star from "../../../assets/img/home/estrelaHome.svg";
import Like from "../../../assets/img/home/likeHome.svg";
import Phone from "../../../assets/img/home/holdingCellHome.svg";
import Agree from "../../../assets/img/home/agreeHome.svg";
import { Flex, Image, Text } from "@chakra-ui/react";

export const FeedBackImg = () => {
  return (
    <Flex align="center" justify="center" gap="100px" m="30px 0">
      <Flex direction="column" align="center" gap="10px">
        <Image src={Star} alt="estrela amarela de cinco pontas" />
        <Text>Qualidade</Text>
      </Flex>

      <Flex direction="column" align="center" gap="10px">
        <Image
          src={Like}
          alt="estrela amarela de cinco pontas"
          transform="translateY(-10px)"
        />
        <Text>Satisfação</Text>
      </Flex>

      <Flex direction="column" align="center" gap="10px">
        <Image
          src={Phone}
          alt="estrela amarela de cinco pontas"
          transform="translateY(-10px)"
        />
        <Text>Facilidade</Text>
      </Flex>

      <Flex direction="column" align="center" gap="10px">
        <Image
          src={Agree}
          alt="estrela amarela de cinco pontas"
          transform="translateY(10px)"
        />
        <Text>Confiança</Text>
      </Flex>
    </Flex>
  );
};
