import React from "react";
import { useParams } from "react-router-dom";

function SearchResults() {
  let { searchQuery } = useParams();
  return <div>{`You searched for ${searchQuery}`}</div>;
}

export default SearchResults;
