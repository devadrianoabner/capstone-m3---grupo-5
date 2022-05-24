import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";

export const ProposalSent = ({ proposals }) => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Você realizou propostas para essa dieta!
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {proposals.map((pro) => {
            return (
              <Text>
                Uma proposta de R$ {pro.price.toFixed(2).replace(".", ",")}
              </Text>
            );
          })}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
