import React from "react";
import { useParams } from "react-router-dom";
import { GoogleBookVolume } from "../../utils/types";
import { useAppSelector } from "../../hooks";

function ResultDetails() {
  const { bookId } = useParams();
  const bookVolume: GoogleBookVolume | undefined = useAppSelector((state) =>
    state.search.bookVolumes.find((book) => book.id === bookId)
  );
  return <div>{bookVolume!.title}</div>;
}

export default ResultDetails;
