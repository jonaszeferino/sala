import Head from "next/head";

import { Inter } from "next/font/google";
import { ChakraProvider, Center, Image, Box } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

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
            </Box>{" "}
          </h1>
        </Center>
      </ChakraProvider>
    </>
  );
}
