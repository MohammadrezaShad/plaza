import React from 'react';
import { useTranslation } from 'react-i18next';
import { renderRoutes } from 'react-router-config';
import LoadingProvider from '../../providers/loading-provider/loading-provider';
import ThemeProvider from '../../providers/theme';
import routes from '../../routes';
import LoadingBar from '../shared/loading-bar';

const App = () => {
  return (
    <ThemeProvider>
      <LoadingProvider>
        <LoadingBar step={10} time={1000}/>
        {renderRoutes(routes)}
      </LoadingProvider>
    </ThemeProvider>
  )
}



export default App;