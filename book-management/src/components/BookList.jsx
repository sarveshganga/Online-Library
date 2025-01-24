

import Book from "./BrowseBook"; 
import "./style.css";

function BookList(props) {
  return (
    <div className="book-list">
      {props.bookData.map((data) => (
        <Book key={data.id} Bookdetails={data}></Book>
      ))}
    </div>
  );
}

export default BookList;

