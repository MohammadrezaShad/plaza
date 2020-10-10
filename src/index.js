import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter as Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { loadableReady } from '@loadable/component'

import i18n from './i18n';
import App from './components/app';
import store from './redux/store';


loadableReady(() => {
  const root = document.getElementById('root');
  ReactDOM.hydrate(
    <I18nextProvider i18n={i18n}>
      <CookiesProvider>
          <Provider store={store}>
            <Router>
              <App />
            </Router>
          </Provider>
      </CookiesProvider>
    </I18nextProvider>
    ,
    root
  );
});


// ReactDOM.hydrate(
//   <I18nextProvider i18n={i18n}>
//     <CookiesProvider>
//         <Provider store={store}>
//           <Router>
//             <App />
//           </Router>
//         </Provider>
//     </CookiesProvider>
//   </I18nextProvider>
//   , 
//   document.getElementById('root')
// );
