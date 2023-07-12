import React from "react";
import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import SearchBar from "../SeachBar/SearchBar";

function NavBar() {
  return (
    <Flex
      minWidth='max-content'
      alignItems='center'
      bg='brand.black_olive'
      color='brand.ash_gray'
      padding='0.75rem'
    >
      <Box>
        <Image
          boxSize='2rem'
          objectFit='cover'
          alt="Reed's Reads Logo"
          src='/android-chrome-192x192.png'
        />
      </Box>
      <Spacer />
      <Box>
        <SearchBar />
      </Box>
      <Spacer />
    </Flex>
  );
}

export default NavBar;
