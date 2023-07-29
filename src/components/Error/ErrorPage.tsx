import React from "react";
import { VStack, Text, Flex, Center } from "@chakra-ui/react";
import "./ErrorPage.css";

function ErrorPage() {
  return (
    <Center id='error_background' h='100vh' w='full'>
      <Flex id='text_frame'>
        <VStack id='text_box'>
          {/* I want this text right justified... */}
          <Text fontSize='4xl' fontWeight={800}>
            Oops!
          </Text>
          <Text fontSize='2xl' fontStyle='italic'>
            Sorry, an unexpected error has occurred.
          </Text>
        </VStack>
      </Flex>
    </Center>
  );
}

export default ErrorPage;
