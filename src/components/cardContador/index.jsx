import { Flex, Image, Heading, Text, Button } from "@chakra-ui/react";

export const CardContador = ({ bg, title, decpripTion, img, bgCount }) => {
  return (
    <>
      <Flex w="100%" h={["133px", "200px", "219px"]}>
        <Flex
          bg={bg}
          justify={["space-between", "space-between"]}
          align="center"
          px="0.8rem"
          w="100%"
          h="100%"
          mx="auto"
          borderRadius="10px"
          pos="relative"
        >
          <div>
            <Heading
              color="#12120E"
              fontWeight="800"
              fontSize={["12px", "15px", "20px", "25px"]}
              w={["150px", "160px", "200px", "250px", "360px"]}
            >
              {title}
            </Heading>
            <Text
              bg={bgCount}
              color="#12120E"
              pt="8px"
              pb="8px"
              borderRadius="10px"
              fontSize={["8px", "10px", "12px", "25px"]}
              fontWeight="500"
            >
              {decpripTion}
            </Text>
          </div>
          <Image
            src={img}
            alt="um card"
            w={["60px", "90px", "130px", "150px", "170px"]}
            pos="absolute"
            bottom={["2", "2", "4", "6"]}
            right={["2", "2", "4", "6"]}
          />
        </Flex>
      </Flex>
    </>
  );
};
