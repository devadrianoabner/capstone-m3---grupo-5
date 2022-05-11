import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input as ChakraInput,
} from "@chakra-ui/react";

const Input = ({ register, name, label, errors, ...rest }) => {
  return (
    <FormControl w={"85%"}>
      <FormLabel
        isCentered
        textAlign={"center"}
        color={"black"}
        fontSize={"13px"}
      >
        {label}
      </FormLabel>
      <ChakraInput
        {...register(name)}
        {...rest}
        name={name}
        border={"transparent"}
        bgColor={"white"}
      />
      <FormHelperText
        fontSize={"11px"}
        color={"red"}
        my={"1"}
        fontWeight={"bold"}
      >
        {errors}
      </FormHelperText>
    </FormControl>
  );
};
export default Input;
