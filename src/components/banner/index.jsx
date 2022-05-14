import { Flex, Image, Heading, Text } from "@chakra-ui/react";

const Banner = ({ bg, title, decpripTion, img }) => {
  return (
    <>
      <Flex
        w={"100%"}
        h={["160px", "187px", "220px", "368px"]}
        // m={["5px", "8px", "11px", "16px", "27px"]}
        px="1"
      >
        <Flex
          bg={bg}
          justify={["space-between"]}
          align={["center", "flex-start"]}
          px={["1", "10"]}
          w="100%"
          h="100%"
          mx="auto"
          borderRadius="10px"
          pos="relative"
        >
          <div>
            <Heading
              color="#12120E"
              fontWeight="900"
              fontSize={["12px", "17px", "22px", "27px"]}
              w={["155px", "180px", "220px", "270px", "380px"]}
              mt={["5px", "20px", "50px"]}
            >
              {title}
            </Heading>
            <Text
              color="#12120E"
              mt={["2", "5", "5", "5"]}
              mb={["2", "5", "5", "5"]}
              w={["170px", "230px", "350px", "450px", "571px"]}
              fontSize={["8px", "10px", "12px", "15px"]}
              fontWeight="500"
            >
              {decpripTion}
            </Text>
          </div>
          <Image
            src={img}
            alt="um card"
            w={["120px", "200px", "250px", "500px"]}
            ml="1"
            pos="absolute"
            bottom={["2", "2", "4", "6"]}
            right={["2", "2", "4", "6"]}
            transform={[
              "translateY(0)",
              "translateY(15px)",
              "translateY(30px)",
              "translateY(65px)",
            ]}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default Banner;
