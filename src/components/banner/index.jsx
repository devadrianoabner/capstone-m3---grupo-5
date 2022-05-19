import { Flex, Image, Heading, Text, Box } from "@chakra-ui/react";

const Banner = ({ bg, title, decpripTion, img }) => {
  return (
    <>
      <Flex w={"100%"} h="100%">
        <Flex
          p="10px"
          bg={bg}
          justify={["space-between"]}
          align={["center", "flex-start"]}
          w="100%"
          h="100%"
          mx="auto"
          borderRadius="10px"
          pos="relative"
        >
          <Box w="60%">
            <div>
              <Heading
                color="#12120E"
                fontWeight="900"
                fontSize={["15px", "20px", "25px", "30px"]}
                w={["240px", "300px", "290px", "320px", "380px"]}
                mt={["5px", "20px", "50px"]}
              >
                {title}
              </Heading>
              <Text
                color="#12120E"
                mt={["2", "5", "5", "5"]}
                mb={["2", "5", "5", "5"]}
                w={["200px", "280px", "290px", "320px", "380px"]}
                fontSize={["8px", "10px", "12px", "15px"]}
                fontWeight="500"
              >
                {decpripTion}
              </Text>
            </div>
          </Box>

          <Box w="40%" h="100%">
            <Flex h="100%" alignItems="flex-end">
              <Image
                src={img}
                alt="um card"
                w={["350px", "350px", "350px", "380px"]}
                display={["none", "flex", "flex"]}
                transform="translateY(30px)"
              />
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Banner;
