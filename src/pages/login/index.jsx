import { useForm } from "react-hook-form";
import { useHistory, Redirect } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import api from "../../services/api";
import {
  Box,
  Text,
  VStack,
  Flex,
  Button,
  Heading,
  useToast,
} from "@chakra-ui/react";

const Login = ({ authenticated, setAuthenticated }) => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Campo obrigatório!")
      .email("E-mail inválido!"),
    password: yup
      .string()
      .required("Campo obrigatório!")
      .min(8, "Mínimo de 8 dígitos!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  // const onSubmitFunction = (data) => {
  //   api.post("/sessions", data).then((response) => {
  //     const { user, token } = response.data;
  //     localStorage.setItem("user", JSON.stringify(user));
  //     localStorage.setItem("token", JSON.stringify(token));

  //     setAuthenticated(true);

  //     return history.push("/dashboard");
  //   });
    // .catch((err) => toast.error("E-mail ou senha inválidos!"));
  };

  if (authenticated) {
    // return <Redirect to="/dashboard" />;
  }

  return (
    <Flex>
      <VStack>
        <Heading>Seja bem-vindo(a) novamente!</Heading>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <InputDiv
            label="E-mail"
            type="text"
            placeholder="Digite aqui seu e-mail"
            register={register}
            name="email"
            error={errors.email?.message}
          />
          <InputDiv
            label="Senha"
            type="password"
            placeholder="Digite aqui sua senha"
            register={register}
            name="password"
            error={errors.password?.message}
          />
          <Button type="submit">Fazer login</Button>
        </form>
        <Box>Ainda não possui uma conta?</Box>
        <Button>Cadastre-se</Button>
      </VStack>
    </Flex>
  );
};

export default Login;
