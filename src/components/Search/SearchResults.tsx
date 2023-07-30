import React from "react";
import { useParams } from "react-router-dom";
import { Flex, HStack, VStack, Text } from "@chakra-ui/react";
import { useAppSelector } from "../../hooks";
import "./SearchResults.css";
import BookCard from "../BookCard/BookCard";
import { GoogleBookVolume } from "../../utils/types";

function SearchResults() {
  // TODO: refetch data on refresh
  const { searchQuery } = useParams();
  const bookVolumes: GoogleBookVolume[] = useAppSelector(
    (state) => state.search.bookVolumes
  );
  const bookCards = bookVolumes.map((volume: GoogleBookVolume) => {
    return <BookCard bookVolume={volume} />;
  });
  return (
    <HStack bg='brand.ash_gray' align={"top"}>
      <Flex id='search_text_frame'>
        <VStack id='search_text_box'>
          {/* I want this text right justified... */}
          <Text fontSize='md' fontWeight={800} color='brand.black_olive'>
            {`Results for: ${searchQuery}`}
          </Text>
        </VStack>
      </Flex>
      <VStack spacing='1rem' id='card_tray' color='brand.seasalt'>
        {bookCards}
      </VStack>
    </HStack>
  );
}

export default SearchResults;
