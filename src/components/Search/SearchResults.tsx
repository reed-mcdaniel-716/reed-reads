import React from "react";
import { Center, Heading, VStack } from "@chakra-ui/react";
import "./SearchResults.css";
import BookCard from "../BookCard/BookCard";
import { GoogleBookVolume } from "../../utils/types";

interface SearchResultsProps {
  bookVolumes: GoogleBookVolume[];
}
function SearchResults({ bookVolumes }: SearchResultsProps) {
  const bookCards = bookVolumes.map((volume: GoogleBookVolume) => {
    return <BookCard bookVolume={volume} key={volume.id} />;
  });

  if (bookCards.length > 0) {
    return (
      <VStack spacing='1rem' id='card_tray' color='brand.seasalt'>
        {bookCards}
      </VStack>
    );
  } else {
    return (
      <Center>
        <VStack>
          <Heading as='h1' size='xl'>
            Sorry, no books returned.
          </Heading>
          <Heading as='h2' size='lg'>
            Please try another search.
          </Heading>
        </VStack>
      </Center>
    );
  }
}

export default SearchResults;
