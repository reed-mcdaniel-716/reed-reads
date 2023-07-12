import React from "react";
import { Flex, Text, VStack, Center } from "@chakra-ui/react";
import "./Homepage.css";

function Homepage() {
  return (
    <Center id='homepage_background' h='100vh' w='full'>
      <Flex id='text_frame'>
        <VStack id='text_box'>
          {/* I want this text right justified... */}
          <Text fontSize='4xl' fontWeight={800}>
            Reed's Reads
          </Text>
          <Text fontSize='2xl' fontStyle='italic'>
            Your next great adventure awaits...
          </Text>
        </VStack>
      </Flex>
    </Center>
  );
}

export default Homepage;
