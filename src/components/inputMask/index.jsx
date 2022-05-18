import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input as ChakraInput,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { normalizePrice } from "../../utils/mask";

export const InputMask = ({
  register,
  name,
  label,
  errors,
  watch,
  setValue,
  ...rest
}) => {
  const priceValue = watch("price");

  useEffect(() => {
    setValue("price", normalizePrice);
  }, [priceValue]);

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
