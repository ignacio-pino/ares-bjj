import { Box, Button, ButtonGroup, Center, Flex, Img } from "@chakra-ui/react";
import NextLink from "next/link";
import HeaderButton from "./components/HeaderButton";

const Header = () => {
  return (
    <Box
      as="header"
      bg="black"
      color="white"
      py={4}
      zIndex={1}
      sx={{ position: "sticky", top: "0" }}
    >
      <Flex alignItems="center">
        <Center flex={1} ml={"21%"}>
          <NextLink href="/" passHref>
            <Img
              src={
                "https://static.wixstatic.com/media/5e010d_6f7bcd5b0fed44ec8ed29094d75ae3f3~mv2.png/v1/fill/w_227,h_62,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5e010d_6f7bcd5b0fed44ec8ed29094d75ae3f3~mv2.png"
              }
              alt="Ares BJJ Logo"
            />
          </NextLink>
        </Center>

        <ButtonGroup spacing={8} ml={"auto"} mr={"4rem"}>
          <HeaderButton>ARES</HeaderButton>
          <HeaderButton>NOSOTROS</HeaderButton>
          <Button
            colorScheme="blue"
            fontWeight={"bold"}
            maxW={"10vw"}
            variant={"outline"}
            onClick={() => console.log("clicked")}
          >
            CONTACTO
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};
export default Header;
