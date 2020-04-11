import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const [isLightTheme, setIsLightTheme] = useState(true)
  const [light] = useState({ syntax: '#555', ui: '#ddd', bg: '#eee' })
  const [dark] = useState({ syntax: '#ddd', ui: '#333', bg: '#555'})

  const toggleTheme= () => {setIsLightTheme(!isLightTheme)}


  return (
    <ThemeContext.Provider value={{isLightTheme, light ,dark, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
}

 
export default ThemeContextProvider;