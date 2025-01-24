import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"

const NotFoundPage = () => {
  return (
    <div className='found-container'>
      <h1 className='found-title'>404 - Page Not Found</h1>
      <p className='found-message'>
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/" className='found-link'>
        Go back to the Home Page
      </Link>
    </div>
  );
};

 export default NotFoundPage;
