import React from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { GoogleBookVolume } from "../../utils/types";
import { useNavigate, useParams } from "react-router-dom";

interface ResultProps {
  bookVolume: GoogleBookVolume;
}
function Result(props: ResultProps) {
  const navigate = useNavigate();
  const { searchQuery } = useParams();
  const bookVolume = props.bookVolume;

  const handleClickDetails = () => {
    navigate(`/searchResults/${searchQuery}/${bookVolume.id}/details`);
  };
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow='hidden'
      borderRadius='0.625rem'
    >
      <Stack>
        <Image
          objectFit='scale-down'
          src={bookVolume.imageLinks.thumbnail}
          alt={bookVolume.title}
        />
        <CardFooter>
          <Button
            bg='brand.black_olive'
            color='brand.seasalt'
            onClick={handleClickDetails}
          >
            Buy Latte
          </Button>
        </CardFooter>
      </Stack>
      <CardBody bg='brand.chamoisee' borderRadius='0.625rem'>
        <Box bg='brand.seasalt' borderRadius='0.625rem' padding='1rem'>
          <Heading size='md'>{`${bookVolume.title}`}</Heading>
          {bookVolume.subTitle && (
            <Heading size='sm'>{`${bookVolume.subTitle}`}</Heading>
          )}
          {bookVolume.authors && (
            <Heading size='sm'>{`Author(s): ${bookVolume.authors.join(
              ", "
            )}`}</Heading>
          )}
          <Text py='2' noOfLines={4}>
            {bookVolume.description}
          </Text>
        </Box>
      </CardBody>
    </Card>
  );
}

export default Result;
