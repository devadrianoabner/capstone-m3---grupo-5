import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { BsArrowRight } from "react-icons/bs";
import { Link, Redirect, useHistory } from "react-router-dom";
import * as yup from "yup";
import transparentImg from "../../assets/img/backgroundRegisterPNGTransparent.png";
import imgLoginPng1 from "../../assets/img/imgLoginPng1.png";
import imgLoginPng2 from "../../assets/img/imgLoginPng2.png";
import { Footer } from "../../components/Footer";
import { InputDiv } from "../../components/InputDiv";
import { Logo } from "../../components/Logo";
import { useToken } from "../../providers/token";
import api from "../../services/api";

const Signup = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Campo obrigatório!")
      .email("E-mail inválido!"),
    password: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();
  const toast = useToast();

  const { token, setToken } = useToken();

  if (token) {
    return <Redirect to="/dashboard" />;
  }

  const onSubmitFunction = ({ email, password }) => {
    const user = {
      email,
      password,
    };

    console.log(user);

    api
      .post("/login", user)
      .then((res) => {
        toast({
          title: "Sua conta foi acessada!",
          status: "success",
          isClosable: true,
        });
        const { accessToken, user } = res.data;

        localStorage.setItem("@HDR:token", JSON.stringify(accessToken));
        localStorage.setItem("@HDR:user", JSON.stringify(user));
        setToken(accessToken);
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data);
        toast({
          title: `${
            err.response.data === "Incorrect password"
              ? "Senha incorreta"
              : err.response.data === "Cannot find user"
              ? "Email não encontrado"
              : err.response.data.message
          }`,
          status: "error",
          isClosable: true,
        });
      });
  };

  return (
    <Flex w="100vw" h="100vh" direction="column" justify="space-between">
      <Flex
        h={["48px", "48px", "48px", "80px"]}
        justify={["center", "center", "center", "space-between"]}
        m={[0, 0, 0, "0px 100px"]}
        fontSize="14px"
      >
        <Logo color="#000" />
        <Flex
          display={["none", "none", "none", "flex"]}
          justify="center"
          align="center"
          gap="40px"
          grow="1"
        >
          <Link to="/login">Home</Link>
          <Link to="/quemsomos">Quem Somos</Link>
          <Link to="/nossaequipe">Nossa Equipe</Link>
          <Link to="/cozinheiros">Ver Cozinheiros</Link>
          <Link to="/contato">Contato</Link>
        
          <Flex
            w="100px"
            h="30px"
            border="2px solid #FFDD00"
            borderRadius="5px"
            align="center"
            _hover={{ cursor: "pointer" }}
            onClick={() => {
              history.push("/register");
            }}
          >
            <Icon as={BsArrowRight} color="tertiary" ml="8px" />
            <Text color="tertiary" display="inline" ml="8px">
              Registrar
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w="100%"
        h="calc(100% - 80px - 50px)"
        grow="1"
        bgColor="#ecdf85"
        direction="row"
        justify={["center", "center", "center", "space-between"]}
        align={["center", "center", "center", "center"]}
        bgImage={transparentImg}
        p={["8px", "20px", "20px", "0px 50px"]}
        pb="10px"
      >
        <Image
          src={imgLoginPng1}
          maxW="400px"
          w="25%"
          display={["none", "none", "none", "block"]}
          mt="300px"
        />
        <VStack
          w={["500px"]}
          minW={["250px"]}
          h={["450px", "450px", "450px", "500px"]}
          bgColor="#FFF"
          p={["5px", "5px", "5px", "20px 20px 40px 20px"]}
          m={[0, 0, 0, "200px 40px"]}
          borderRadius="8px"
        >
          <Flex
            direction="column"
            gap="10px"
            m="0px 20px"
            w="calc(100% - 80px)"
          >
            <Heading
              color="#000"
              fontSize={["20px", "20px", "20px", "26px"]}
              fontWeight="normal"
              pt="15px"
            >
              Seja bem-vindo novamente!
            </Heading>
            <Box w="177px" h="3px" bgColor="tertiary"></Box>
            <Text
              color="#000"
              fontSize={["10px", "10px", "10px", "14px"]}
              w={["200px", "unset"]}
            >
              Entre com seus dados para realizar o login e ter acesso ao
              sistema!
            </Text>
          </Flex>

          <Box
            onSubmit={handleSubmit(onSubmitFunction)}
            as="form"
            w="calc(100% - 80px)"
            m="0px 20px"
          >
            <InputDiv
              label="Email"
              name="email"
              register={register}
              error={errors.email?.message}
              placeholder="Digite seu email"
            />

            <InputDiv
              label="Senha"
              name="password"
              register={register}
              error={errors.password?.message}
              placeholder="Digite sua senha"
            />

            <Button
              w="100%"
              mt="20px"
              bgColor="tertiary"
              type="submit"
              borderRadius="4px"
              fontWeight="light"
              fontSize="12px"
            >
              FAZER LOGIN
            </Button>
          </Box>
          <Text fontSize="10px" pt="8px">
            Não tem conta? Clique
            <Link to="/register">
              <Text color="tertiary" display="inline">
                aqui
              </Text>
            </Link>
            para criar uma conta
          </Text>
        </VStack>
        <Image
          src={imgLoginPng2}
          maxW="500px"
          w="25%"
          display={["none", "none", "none", "block"]}
          mt="300px"
        />
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Signup;
