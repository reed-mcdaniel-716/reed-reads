import { Input, InputGroup, Button } from "@chakra-ui/react";
import { useAppDispatch } from "../../hooks";
import React, { useState } from "react";
import { fetchBooksThunk } from "../Search/searchSlice";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [uISearchString, setUiSeachString] = useState("");

  const handleSearchChange = (inputString: string) => {
    setUiSeachString(inputString);
  };

  const handleClick = () => {
    // TODO: handle case where search string is empty
    dispatch(fetchBooksThunk(uISearchString));
    navigate(`/searchResults/${uISearchString}`);
    setUiSeachString("");
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
        value={uISearchString}
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
