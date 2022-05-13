import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Icon,
  Image,
  Select,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { BsArrowRight } from "react-icons/bs";
import { Redirect } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import transparentImg from "../../assets/img/backgroundRegisterPNGTransparent.png";
import imgRegisterPng1 from "../../assets/img/imgRegisterPng1.png";
import imgRegisterPng2 from "../../assets/img/imgRegisterPng2.png";
import { Footer } from "../../components/Footer";
import { InputDiv } from "../../components/InputDiv";
import { Logo } from "../../components/Logo";
import { useToken } from "../../providers/token";
import api from "../../services/api";

const Signup = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup
      .string()
      .required("Campo obrigatório!")
      .email("E-mail inválido!"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos!")
      .required("Campo obrigatório!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senha não confere!")
      .required("Campo obrigatório!"),
    type: yup
      .string()
      .required("Escolha sua categoria")
      .test("chooseType", "Escolha a categoria", (value) => value),
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

  const { token } = useToken();

  if (token) {
    return <Redirect to="/dashboard" />;
  }

  const onSubmitFunction = ({ name, email, password, type }) => {
    const user = {
      name,
      email,
      password,
      type,
      qntAccepted: 0,
      qntRejected: 0,
    };
    if (type === "Prestador") user.faturado = 0;
    if (type === "Cliente") user.gasto = 0;

    api
      .post("/users", user)
      .then((_) => {
        toast({
          title: "Sua conta foi criada!",
          status: "success",
          isClosable: true,
        });
        history.push("/login");
      })
      .catch((err) => {
        toast({
          title: `${
            err.response.data === "Email already exists"
              ? "Email já existente"
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
              history.push("/login");
            }}
          >
            <Icon as={BsArrowRight} color="tertiary" ml="8px" />
            <Text color="tertiary" display="inline" ml="8px">
              Login
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
          src={imgRegisterPng1}
          maxW="400px"
          w="25%"
          display={["none", "none", "none", "block"]}
          mt="300px"
        />
        <VStack
          w={["500px"]}
          minW={["250px"]}
          h={["700px"]}
          bgColor="#FFF"
          p={["5px", "5px", "5px", "20px 20px 40px 20px"]}
          m={[0, 0, 0, "200px 40px"]}
          borderRadius="8px"
        >
          <Heading color="#000" fontSize="26px" fontWeight="normal">
            Crie sua conta
          </Heading>
          <Box w="50px" h="3px" bgColor="tertiary"></Box>
          <Text color="#000" fontSize="14px">
            Simples, rápido e fácil!
          </Text>
          <Box
            onSubmit={handleSubmit(onSubmitFunction)}
            as="form"
            w="calc(100% - 80px)"
            m="0px 20px"
          >
            <InputDiv
              label="Nome"
              name="name"
              register={register}
              error={errors.name?.message}
              placeholder="Digite seu nome"
            />
            <InputDiv
              label="Email"
              name="email"
              register={register}
              error={errors.email?.message}
              placeholder="Digite seu email"
            />

            <FormControl isInvalid={errors.type?.message}>
              <FormLabel color="#000" fontSize="xs" htmlFor="type" mt="10px">
                Selecionar categoria
              </FormLabel>
              <Select
                border="none"
                bgColor="#F3F3F3"
                color="#9E9E9E"
                {...register("type")}
              >
                <option
                  style={{ color: "#9E9E9E", backgroundColor: "#F3F3F3" }}
                  value=""
                  hidden
                >
                  Selecionar categoria
                </option>
                <option
                  value="Usuário"
                  w="100%"
                  style={{
                    color: "#9E9E9E",
                    backgroundColor: "#F3F3F3",
                  }}
                >
                  Usuário
                </option>
                <option
                  value="Prestador"
                  style={{ color: "#9E9E9E", backgroundColor: "#F3F3F3" }}
                >
                  Prestador de serviço
                </option>
              </Select>
              <FormErrorMessage>{errors.type?.message}</FormErrorMessage>
            </FormControl>

            <InputDiv
              label="Senha"
              name="password"
              register={register}
              error={errors.password?.message}
              placeholder="Digite sua senha"
            />
            <InputDiv
              label="Confirmação de senha"
              name="confirmPassword"
              register={register}
              error={errors.confirmPassword?.message}
              placeholder="Confirme sua senha"
            />

            <Button
              w="100%"
              mt="20px"
              bgColor="tertiary"
              type="submit"
              borderRadius="4px"
              fontWeight="light"
            >
              Cadastrar
            </Button>
          </Box>
          <Text fontSize="10px" pt="8px">
            Já conta? Clique{" "}
            <Link to="/login">
              <Text color="tertiary" display="inline">
                aqui
              </Text>
            </Link>
            para acessar sua conta
          </Text>
        </VStack>
        <Image
          src={imgRegisterPng2}
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
