import React from 'react';

import BookList from '../components/BookList';
import Navbar from '../components/Navbar';
import BookForm from "../components/BookForm";

import ThemeToggle from '../components/ThemeToggle';
// import AuthContextProvider from '../contexts/AuthContext';
import BookContextProvider from '../contexts/BookContext';

const Book = () => {
  
  return (
    <BookContextProvider>
      <Navbar />
      <BookList />
      <BookForm />
      <ThemeToggle />
    </BookContextProvider>
  )
}

export default Book