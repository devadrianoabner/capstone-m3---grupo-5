import {
  FormControl,
  FormHelperText,
  FormLabel,
  Textarea as ChakraTextarea,
} from "@chakra-ui/react";

const Textarea = ({ register, name, label, errors, ...rest }) => {
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
      <ChakraTextarea
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
export default Textarea;
