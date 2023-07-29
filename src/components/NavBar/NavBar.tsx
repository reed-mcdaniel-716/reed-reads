import React from "react";
import { Box, Button, Flex, Image, Spacer, HStack } from "@chakra-ui/react";
import SearchBar from "../Search/SearchBar";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <Flex
      minWidth='max-content'
      alignItems='center'
      bg='brand.black_olive'
      color='brand.ash_gray'
      padding='0.75rem'
    >
      <HStack>
        <Button
          id='homepage-button'
          onClick={handleLogoClick}
          bg='brand.ash_gray'
          color='brand.black_olive'
          leftIcon={
            <Image
              boxSize='2rem'
              objectFit='cover'
              alt="Reed's Reads Logo"
              src='/android-chrome-192x192.png'
            />
          }
          size='sm'
        >
          Homepage
        </Button>
      </HStack>
      <Spacer />
      <Box>
        <SearchBar />
      </Box>
      <Spacer />
    </Flex>
  );
}

export default NavBar;
