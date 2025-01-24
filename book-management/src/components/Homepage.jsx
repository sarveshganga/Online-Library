import React from 'react';
import './style.css';

const Homepage = () => {
  const bookCategories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Mystery', 'Biography'];
  const popularBooks = [
    { id: 1, title: 'The Silent Spring', author: 'Rachel Carson' },
    { id: 2, title: '1984', author: 'George Orwell' },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen' },
    { id: 5, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  ];

  return (
    <div className="home-page">
      <header className="welcome-message">
        <h1>Welcome to BookZone</h1>
        <p>Your one-stop destination for all your reading needs!</p>
      </header>

      <section className="book-categories">
        <h2>Book Categories</h2>
        <ul>
          {bookCategories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </section>

      <section className="popular-books">
        <h2>Popular Books</h2>
        <ul>
          {popularBooks.map((book) => (
            <li key={book.id}>
              <strong>{book.title}</strong> by {book.author}
              
              <a href={`/bookDetails/${book.id}`} className="details-link">View Details</a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Homepage;

