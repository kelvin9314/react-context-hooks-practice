import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import BookForm from "./components/BookForm";

import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <BookContextProvider>
          <Navbar />
          <BookList />
          <BookForm />
          <ThemeToggle />
        </BookContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;