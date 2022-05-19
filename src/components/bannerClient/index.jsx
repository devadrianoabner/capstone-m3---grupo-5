import { Flex, Image, Heading, Text, Box } from "@chakra-ui/react";

export const BannerClient = ({ bg, title, decpripTion, img }) => {
  return (
    <>
      <Flex w={"100%"} h="100%">
        <Flex
          bg={bg}
          justify={["space-between"]}
          align={["center", "flex-start"]}
          p="20px"
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
                w={["230px", "230px", "250px", "280px", "300px"]}
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
                w={["350px", "350px", "350px", "300px"]}
                display={["none", "flex", "flex"]}
                transform="translateY(25px)"
              />
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
