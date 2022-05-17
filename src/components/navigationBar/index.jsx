import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Button, Avatar, Image } from "@chakra-ui/react";
import logoImage from "../../assets/logo-hr.svg";

const Logo = () => {
  return (
    <Flex>
      <Text
        fontFamily={"Poppins"}
        p={"2px"}
        color={"black"}
        fontSize={"20px"}
        fontWeight={"bold"}
      >
        Hora do
      </Text>

      <Text p={"2px"} fontSize={"20px"} fontWeight={"bold"} color={"#F0DC5B"}>
        rango
      </Text>
      <Image src={logoImage} />
    </Flex>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Text
      fontWeight={"bold"}
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

const CloseIcon = () => (
  <svg width="24px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="black"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="#FFFF"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const NavigationBar = (props) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      fontFamily={"Inter"}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={"#FFFF"}
      color={"black"}
      {...props}
    >
      <Flex flexDirection={"row"} align="center">
        <Logo />
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={[
            "center",
            "space-between",
            "flex-end",
            "flex-end",
            "flex-end",
            "flex-end",
          ]}
          direction={["column", "row", "row", "row", "row", "row"]}
          pt={[4, 4, 0, 0, 0, 0]}
        >
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/people">Quem somos </MenuItem>
          <MenuItem to="/cozinheiros">Cozinheiros </MenuItem>
          <MenuItem to="/contato">Contato </MenuItem>
          <Flex
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            flexWrap={"wrap"}
          ></Flex>

          <MenuItem to="/login" isLast>
            <Button
              p={"2"}
              size="20px"
              rounded="md"
              color={"#FFFF"}
              bg={"#F0DC5B"}
            >
              <Avatar name ={"Talitta Nunes"} bg="#A69C5D" />
            </Button>
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  );
};

export default NavigationBar;
