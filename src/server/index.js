import React from 'react';
import ReactDOM from 'react-dom/server';
import Helmet from 'react-helmet';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';

import App from '../shared/App';

import ReactRedux, { Provider } from "react-redux";

import store from "../shared/stores/payload/index.cjsx";

/**
 * Provides the server side rendered app. In development environment, this method is called by
 * `react-hot-server-middleware`.
 *
 * This method renders the ejs template `public/views/index.ejs`.
 *
 * @param clientStats Parameter passed by hot server middleware
 */
export default ({ clientStats }) => async (req, res) => {
    const app = (
      	<Provider store={store}>
          <App/>
      	</Provider>
    );

    const appString = ReactDOM.renderToString(app);
    const { title } = Helmet.renderStatic();
    const chunkNames = flushChunkNames();
    const { js, styles, cssHash } = flushChunks(clientStats, { chunkNames });

    res.render('index', {
        title: title.toString(),
        appString,
        js,
        styles,
        cssHash
    });
};
