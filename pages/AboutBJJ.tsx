import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Img,
  Divider,
  Text,
  VStack,
  Fade,
  SlideFade,
} from "@chakra-ui/react";

export default function AboutBJJ() {
  return (
    <Grid
      height={"95vh"}
      templateColumns={"repeat(2, 1fr)"}
      background="linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%)"
    >
      <GridItem>
        <SlideFade in={true}>
          //
          <Img
            src="/assets/img/image9.jpeg"
            boxShadow="dark-lg"
            rounded="md"
            w={"30vw"}
            mt={"15vh"}
            mx={"2vw"}
          />
          <Img
            rounded="md"
            boxShadow="dark-lg"
            src="/assets/img/image5.jpeg"
            w={"30vw"}
            mt={"-8vh"}
            mx={"17vw"}
          />
        </SlideFade>
      </GridItem>

      <GridItem>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          my="10vh"
          pb={"5vh"}
          mt={"30vh"}
          borderLeft={"2px"}
          borderLeftColor={"gray"}
        >
          <Heading
            fontFamily={"Poppins"}
            color={"black"}
            fontWeight={"900"}
            fontSize={"32px"}
            textAlign={"center"}
          >
            MAS QUE UN DEPORTE
          </Heading>
          <Divider
            maxWidth={"5vw"}
            mb={"3rem"}
            mt={"1rem"}
            borderWidth={"2px"}
            borderColor="gray"
          />
          <VStack
            spacing={10}
            fontSize={"20px"}
            fontWeight={600}
            fontFamily={"Poppins"}
          >
            <Text maxW={"80%"}>
              El Jiu Jitsu Brasileño nos brinda una transformación mental con
              disciplina y resistencia inquebrantables, enseñando cómo superar
              desafíos con confianza. Fomenta camaradería, creando una familia
              de entrenamiento unida por pasión, sin importar fronteras o
              culturas. Además de crecimiento personal, ofrece técnicas de
              autodefensa, empoderando seguridad física y mental en un mundo
              inestable.
            </Text>
            <Text maxW={"80%"}>
              Jiu Jitsu no es solo un deporte, es una forma de vida que cultiva
              valores profundos y conexiones en sus practicantes. Explora
              nuestro sitio para descubrir su poder transformador.
            </Text>
          </VStack>
        </Flex>
      </GridItem>
    </Grid>
  );
}
