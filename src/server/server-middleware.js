import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet} from 'react-helmet';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server'

import styled, { ServerStyleSheet } from 'styled-components';
import { CookiesProvider } from 'react-cookie';
import { I18nextProvider} from 'react-i18next';

import App from '../components/app';
import i18n from '../i18n';

import { Provider } from 'react-redux';
import { getPreloadedState } from './helper';
import initStore from '../redux/store';



const ServerMiddleware = (req, res) => {
  const statsFile = path.resolve('./build/loadable-stats.json')
  const extractor = new ChunkExtractor({ statsFile })
  const currentRoute = {}; //= findRoute(req.originalUrl, Routes) || {};

  let promise;
  if (currentRoute.loadData) {
    promise = currentRoute.loadData(req.originalUrl);
  } else {
    promise = Promise.resolve(null);
  }

  promise.then(response => {
    let markup,
      styleTags,
      helmet,
      scriptTagsEx,
      data = response ? response.data : null,
      context = {
        data,
        req,
        res
      },
      preloadedState = getPreloadedState(req, res) || {};

    const sheet = new ServerStyleSheet();
    const store = initStore(preloadedState);

    try {

      markup = ReactDOMServer.renderToString(sheet.collectStyles(
        <I18nextProvider i18n={i18n}>
          <CookiesProvider cookies={req.universalCookies}>
            <Provider store={store}>
              <StaticRouter location={req.originalUrl} context={context}>
                <ChunkExtractorManager extractor={extractor}>
                  <App/>
                </ChunkExtractorManager>
              </StaticRouter>
            </Provider>
          </CookiesProvider>
        </I18nextProvider>
      ));

      helmet = Helmet.renderStatic();
      styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();
      scriptTagsEx = extractor.getScriptTags() // or extractor.getScriptElements();
    } catch (error) {
      markup = <div>{error}</div>;
    } finally {
      sheet.seal();
    }

    if (context.url) {
      // Somewhere a `<Redirect>` was rendered
      res.redirect(context.url);
    } else {
      // we're good, send the response
      fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, content) => {
        if (err) {
          return res.status(500).send('Oops, better luck next time!' + err);
        }


        let htmlResponse = content.replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
          .replace('<style id="styled-component-ssr-placeholder"></style>', styleTags)
          .replace('<script defer="defer" src="/bundle.js"></script>','')
          .replace(
            '<script id="dataScript"></script>',
            `<script>window.__ROUTE_DATA__ = ${JSON.stringify(data)};window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())};</script>${scriptTagsEx}`
          );
          
        if (helmet) {
          let head = `${helmet.title}${helmet.link}`.replace(/\s*data-react-helmet="true"/g,'');
          
          htmlResponse = htmlResponse.replace(`<title>${process.env.REACT_APP_NAME}</title>`, head);
        }

        return res.send(htmlResponse);
      });
    }
  });
}


export default ServerMiddleware;