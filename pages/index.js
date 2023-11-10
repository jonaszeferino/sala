import Head from "next/head";
import { ChakraProvider, Center, Box, Image } from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sala de Secacao</title>
        <meta name="description" content="Site do Sala de Secacao" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        <Center>
          <h1>
            <br />
            <br />
            <Center>
              <div>Sala de Secação</div>
            </Center>
            <Center>
              <div>Em Construção</div>
            </Center>
            <Box boxSize="sm">
              <Image src="/sala.png" alt="logo" />
            </Box>
          </h1>
        </Center>

        <Center>
          <a
            href="https://twitter.com/Saladesecacao"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "50px", padding: "20px" }} // Ajuste o tamanho dos ícones aqui
          >
            <FaTwitter />
          </a>
          
          <a
            href="https://www.youtube.com/@SaladeSecacao"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "50px", padding: "20px" }} // Ajuste o tamanho dos ícones aqui
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/saladesecacao/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "50px", padding: "20px" }} // Ajuste o tamanho dos ícones aqui
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@saladeseca?lang=pt-BR"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "50px", padding: "20px" }} // Ajuste o tamanho dos ícones aqui
          >
            <FaTiktok />
          </a>
        </Center>
      </ChakraProvider>
    </>
  );
}
