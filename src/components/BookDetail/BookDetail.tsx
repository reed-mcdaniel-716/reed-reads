import React from "react";
import { useParams } from "react-router-dom";
import { GoogleBookVolume } from "../../utils/types";
import { useAppSelector } from "../../hooks";
import {
  Box,
  Card,
  CardBody,
  Heading,
  Text,
  Image,
  Center,
  VStack,
} from "@chakra-ui/react";
import "./BookDetail.css";

function BookDetail() {
  const { bookId } = useParams();
  const bookVolume: GoogleBookVolume | undefined = useAppSelector((state) =>
    state.search.bookVolumes.find((book) => book.id === bookId)
  );
  return (
    <Center bg='brand.ash_gray' height='100vh'>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow='hidden'
        borderRadius='0.625rem'
        width={"90%"}
        bg='brand.chamoisee'
      >
        <Box bg='brand.seasalt' margin='1rem' borderRadius='0.625rem'>
          <Image
            objectFit='contain'
            src={bookVolume!.imageLinks.thumbnail}
            alt={bookVolume!.title}
            boxSize='16rem'
            margin='2rem'
          />
        </Box>
        <CardBody bg='brand.chamoisee' borderRadius='0.625rem'>
          <VStack>
            <Box bg='brand.seasalt' borderRadius='0.625rem' padding='1rem'>
              <Heading
                size='md'
                color='brand.black_olive'
                textDecor={"underline"}
              >{`${bookVolume!.title}`}</Heading>
              {bookVolume!.subTitle && (
                <Heading size='sm' textDecor={"underline"}>{`${
                  bookVolume!.subTitle
                }`}</Heading>
              )}
              {bookVolume!.authors && (
                <Heading
                  size='sm'
                  color='brand.black_olive'
                  as='i'
                >{`Author(s): ${bookVolume!.authors.join(", ")}`}</Heading>
              )}
            </Box>
            <Box
              bg='brand.seasalt'
              borderRadius='0.625rem'
              padding='1rem'
              overflowY='scroll'
              maxHeight='10rem'
            >
              <Heading size='md' color='brand.black_olive'>
                Description:
              </Heading>
              <Text py='2' color='brand.black_olive'>
                {bookVolume!.description}
              </Text>
            </Box>
            <Box bg='brand.seasalt' borderRadius='0.625rem' padding='1rem'>
              {bookVolume!.publisher && bookVolume!.publishedDate && (
                <Text py='2' color='brand.black_olive'>
                  <span className='label' color='brand.black_olive'>
                    Published:
                  </span>
                  {` ${bookVolume!.publisher} (${bookVolume!.publishedDate})`}
                </Text>
              )}
              {bookVolume!.pageCount && (
                <Text py='2' color='brand.black_olive'>
                  {" "}
                  <span className='label' color='brand.black_olive'>
                    Page count:
                  </span>
                  {` ${bookVolume!.pageCount}`}
                </Text>
              )}
              {bookVolume!.categories && (
                <Text py='2' color='brand.black_olive'>
                  <span className='label' color='brand.black_olive'>
                    Categories:
                  </span>
                  {` ${bookVolume!.categories.join(", ")}`}
                </Text>
              )}
            </Box>
          </VStack>
        </CardBody>
      </Card>
    </Center>
  );
}

export default BookDetail;
