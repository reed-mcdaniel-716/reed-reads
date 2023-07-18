import React, { useState } from "react";
import { Input, InputGroup, Button } from "@chakra-ui/react";
import { fetchBooksFromApi } from "../../utils/apiHelpers";

function NavBar() {
  const [searchString, setSeachString] = useState("");

  const handleSearchChange = (inputString: string) => {
    setSeachString(inputString);
  };

  const handleClick = () => {
    // testing api call; will move later
    fetchBooksFromApi(searchString);
    setSeachString("");
  };

  return (
    <InputGroup display='flex' alignItems='center' size='md'>
      <Input
        width='20rem'
        placeholder='Find your next great adventure...'
        backgroundColor='brand.ash_gray'
        color='brand.black_olive'
        borderColor='brand.black_olive'
        _placeholder={{ color: "brand.black_olive" }}
        marginRight='1rem'
        value={searchString}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
      <Button
        h='1.75rem'
        size='sm'
        backgroundColor='brand.ash_gray'
        color='brand.black_olive'
        borderColor='brand.black_olive'
        onClick={handleClick}
      >
        Search
      </Button>
    </InputGroup>
  );
}

export default NavBar;
