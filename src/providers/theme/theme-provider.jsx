import React, { useEffect, useState } from 'react';
import { ThemeProvider as StyleComponentThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { theme as darkTheme } from './theme.dark.js';
import { theme as lightTheme } from './theme.light.js';
import ThemeContext from '../../context/theme-context';
import { useCookies } from 'react-cookie';

const ThemeProvider = ({children}) => {
  const [cookies, setCookie] = useCookies(['theme']);
  const [theme, setTheme] = useState(cookies.theme || 'light');
  

  const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      setCookie('theme', newTheme, { path: '/' });
  }

  const getTheme = (name) => {
    switch (name)
    {
      case 'dark':
        return darkTheme;
      default:
        return lightTheme;
    }
  }

  return (
      <ThemeContext.Provider value={{theme,toggleTheme}}>
        <StyleComponentThemeProvider theme={getTheme(theme)}>
          {children}
          <GlobalStyle />
        </StyleComponentThemeProvider>
      </ThemeContext.Provider>

  )
};

export default ThemeProvider;