import React from "react";
import { Box, Flex, Image, Input, Spacer, Text } from "@chakra-ui/react";

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
      <Input
        width='20rem'
        placeholder='Search for your next great adventure...'
        backgroundColor='brand.ash_gray'
        color='brand.black_olive'
        borderColor='brand.black_olive'
        _placeholder={{ color: "brand.black_olive" }}
      />
      <Spacer />
    </Flex>
  );
}

export default NavBar;
