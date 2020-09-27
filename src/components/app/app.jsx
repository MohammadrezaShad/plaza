import React from 'react';
import { useTranslation } from 'react-i18next';
import { renderRoutes } from 'react-router-config';
import ThemeProvider from '../../providers/theme';
import routes from '../../routes';

const App  = () => {
  return (
    <ThemeProvider>
        {renderRoutes(routes)}
    </ThemeProvider>
  )
}



export default App;