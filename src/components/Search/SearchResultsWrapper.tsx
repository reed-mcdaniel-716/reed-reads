import React from "react";
import { useParams } from "react-router-dom";
import { Container, Flex, HStack, VStack, Text } from "@chakra-ui/react";
import { useAppSelector } from "../../hooks";
import "./SearchResults.css";
import { GoogleBookVolume } from "../../utils/types";
import SearchResults from "./SearchResults";

function SearchResultsWrapper() {
  // TODO: refetch data on refresh
  const { searchQuery } = useParams();
  const bookVolumes: GoogleBookVolume[] = useAppSelector(
    (state) => state.search.bookVolumes
  );
  return (
    <Container bg='brand.ash_gray' maxWidth='100%' minHeight='100vh'>
      <HStack bg='brand.ash_gray' align={"top"}>
        <Flex id='search_text_frame'>
          <VStack id='search_text_box'>
            {/* I want this text right justified... */}
            <Text fontSize='md' fontWeight={800} color='brand.black_olive'>
              {`Results for: ${searchQuery}`}
            </Text>
          </VStack>
        </Flex>
        <SearchResults bookVolumes={bookVolumes} />
      </HStack>
    </Container>
  );
}

export default SearchResultsWrapper;
