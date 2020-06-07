import React from 'react';
import Book from "./views/book";

import ThemeContextProvider from './contexts/ThemeContext';

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        {/* <Book /> */}
      </ThemeContextProvider>
    </div>
  );
}

export default App;