import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter as Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { loadableReady } from '@loadable/component';

import i18n from './i18n';
import App from './components/app';
import initStore from './redux/store';

import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';

const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: 'https://graphqlzero.almansi.me/api',
    credentials: 'same-origin',
    headers: {},
  }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = initStore(preloadedState);

loadableReady(() => {
  const root = document.getElementById('root');
  ReactDOM.hydrate(
    <ApolloProvider client={client}>
      <I18nextProvider i18n={i18n}>
        <CookiesProvider>
          <Provider store={store}>
            <Router>
              <App />
            </Router>
          </Provider>
        </CookiesProvider>
      </I18nextProvider>
    </ApolloProvider>,
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
