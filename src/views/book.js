import React from 'react';
import { useHistory} from 'react-router-dom'

import BookList from '../components/BookList';
import Navbar from '../components/Navbar';
import BookForm from "../components/BookForm";

import ThemeToggle from '../components/ThemeToggle';
import ThemeContextProvider from '../contexts/ThemeContext';
// import AuthContextProvider from '../contexts/AuthContext';
import BookContextProvider from '../contexts/BookContext';

import '../style/book.scss';


const Book = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }
  
  return (
    <ThemeContextProvider>
      <BookContextProvider>
        <div>
          <button onClick={handleClick}>
             Home Page
          </button>
          <Navbar />
          <BookList />
          <BookForm />
          <ThemeToggle />
        </div>
      </BookContextProvider>
   </ThemeContextProvider>
  )
}

export default Book