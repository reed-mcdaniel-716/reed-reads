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
          <Text fontSize='xs' fontStyle='italic'>
            background photo by{" "}
            <a
              title='upsplash artist profile'
              href='https://unsplash.com/de/@ranurte?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
            >
              Ranurte on{" "}
            </a>
            <a
              title='upsplash library search'
              href='https://unsplash.com/s/photos/library?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
            >
              Unsplash
            </a>
          </Text>
        </VStack>
      </Flex>
    </Center>
  );
}

export default Homepage;
