import { Flex, Image, Heading, Text } from "@chakra-ui/react";

export const CardContador = ({
  bg,
  title,
  decpripTion,
  img,
  bgCount,
  type,
}) => {
  return (
    <>
      <Flex w="100%" h="100%">
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
          alignItems="flex-start"
          pt="20px"
        >
          <div>
            <Heading
              color="#12120E"
              fontWeight="800"
              fontSize={["12px", "15px", "20px", "25px"]}
              w={["140px", "190px", "250px", "300px", "360px"]}
            >
              {title}
            </Heading>
            <Flex>
              <Text
                bg={bgCount}
                color="#12120E"
                mt={["2", "5", "5", "5"]}
                mb={["2", "5", "5", "5"]}
                borderRadius="10px"
                fontSize={["15px", "20px", "30px", "25px"]}
                fontWeight="500"
                p={["10px", "10px", "10px", "10px"]}
              >
                {type ? (
                  <Text>R$ {decpripTion}</Text>
                ) : (
                  <Text>{decpripTion}</Text>
                )}
              </Text>
            </Flex>
          </div>
          <Image
            src={img}
            alt="um card"
            w={["60px", "90px", "120px", "120px"]}
            pos="absolute"
            bottom={["2", "2", "4"]}
            right={["2", "2", "4"]}
            ml="5px"
          />
        </Flex>
      </Flex>
    </>
  );
};
