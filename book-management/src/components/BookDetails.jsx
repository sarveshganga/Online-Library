import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function BookDetails({ books }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((b) => b.id.toString() === id);

  if (!book) {
    return <h2>Book not found!</h2>;
  }

  return (
    <div className="book-details-page">
      <img src={book.coverImage} alt={book.title} width="300px" height="300px" />
      <h1>{book.title}</h1>
      <h3>Author: {book.author}</h3>
      <p>Description: {book.description}</p>
      <p>Rating: {book.rating}</p>
      <button onClick={() => navigate("/browse")}>Back to Browse</button>
    </div>
  );
}

export default BookDetails;
