import { Heading, Center, Box, Image } from "@chakra-ui/react";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Center>
        <Box boxSize="xxl">
          <Image
            src="./imagenes/after-chabon.jpg"
            alt="After-Chabon"
            className="discos"
          />

          <Image
            src="./imagenes/divididos-por-la-felicidad.jpg"
            alt="divididos-por-la-felicidad"
            className="discos"
          />

          <Image src="./imagenes/artaud.jpg" alt="artaud" className="discos" />

          <Image
            src="./imagenes/clics-modernos.jpg"
            alt="clips-modernos"
            className="discos"
          />

          <Image
            src="./imagenes/oktubre.jpg"
            alt="oktubre"
            className="discos"
          />
        </Box>
      </Center>
    </div>
  );
};

export default Welcome;
