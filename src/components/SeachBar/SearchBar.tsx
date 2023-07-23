import { Input, InputGroup, Button } from "@chakra-ui/react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setSearchString, clearSearchString } from "./searchSlice";

function NavBar() {
  // The `state` arg is correctly typed as `RootState` already
  const searchString = useAppSelector((state) => state.search.searchString);
  const dispatch = useAppDispatch();

  //const [searchString, setSeachString] = useState("");

  const handleSearchChange = (inputString: string) => {
    // TODO: figure out why dispatching action is not updating state...
    const stuff = dispatch(setSearchString(inputString));
    console.log(`stuff:`, stuff);
  };

  const handleClick = () => {
    // testing api call; will move later
    //fetchBooksFromApi(searchString);
    dispatch(clearSearchString());
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
