import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import store from "./redux/Store";
import { books } from "./utils/mackData";
import "./components/style.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import BookDetails from "./components/BookDetails";
import NotFoundPage from "./components/NotFound";

function AppContent() {
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books);
  const location = useLocation(); // Now inside the Router context

  const handleSearch = () => {
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <>
      <Navbar />
      {location.pathname !== "/add" && location.pathname !== "/" && location.pathname !== "/bookDetails/:id" && (

        <div className="search">
          <h2>Search Book</h2>
          <div>
            <input
              type="text"
              className="search-input"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
            <button type="button" onClick={handleSearch} className="search-btn">
              Search
            </button>
          </div>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Homepage searchText={false} />} />
        <Route path="/Browse" element={<BookList bookData={filteredBooks} />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/bookDetails/:id" element={<BookDetails books={books} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
}

export default App;
