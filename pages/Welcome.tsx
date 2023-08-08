import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Img,
  ScaleFade,
  Text,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import React from "react";

export default function Welcome() {
  return (
    <Flex
      height={"95vh"}
      backgroundImage={"/assets/img/portada.jpg"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      boxShadow={"dark-lg"}
    >
      <ScaleFade in={true} initialScale={0.9}>
        <Flex flexDirection={"column"} m="10vw" maxW={"50vw"}>
          <Heading color={"white"} fontWeight={"900"} fontSize={"64px"}>
            DESCUBRE EL ARTE DEL <br /> JIU JITSU BRASILEÑO
          </Heading>
          <Divider
            maxWidth={"5vw"}
            mb={"3rem"}
            mt={"1rem"}
            borderWidth={"2px"}
          />
          <Text color={"white"} fontFamily={"Poppins"}>
            Bienvenido a Ares BJJ, tu destino principal para dominar en Jiu
            Jitsu Brasileño en Uruguay. Nuestros instructores expertos son
            apasionados del Jiu-Jitsu Brasileño, adaptándose a todos los niveles
            de practicantes.
          </Text>
          <Text mt="1rem" color={"white"} fontFamily={"Poppins"}>
            Únete a nuestra comunidad, experimenta sus beneficios físicos y
            mentales, ¡y descubre tu máximo potencial con nosotros!
          </Text>
          <Button
            colorScheme="blue"
            fontWeight={"bold"}
            mt="3rem"
            maxW={"10vw"}
            height={"3rem"}
            variant={"solid"}
            onClick={() => console.log("clicked")}
            rightIcon={
              <Box mt={"1.5px"}>
                <FaArrowRight />
              </Box>
            }
          >
            COMENZAR AHORA
          </Button>
        </Flex>
      </ScaleFade>
    </Flex>
  );
}
