import React from 'react';
import { hydrate } from 'react-dom';

import App from '../shared/App';

import ReactRedux, { Provider } from "react-redux";

import createStore from "../shared/stores/payload/index.cjsx";

/**
 * Renders a react component into the #react-root div container.
 * Since react 16, the `hydrate` method is used instead of `render` when dealing
 * with server side rendering.
 *
 * @param Component React component that should be rendered
 */
const store = createStore( window.REDUX_DATA )
const render = Component => {
    hydrate(
        <Provider store={store}>
          <Component/>
        </Provider>,
        document.getElementById('react-root')
    );
};

render(App);

/**
 * This script provides hot module reloading in development mode.
 */
if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept('../shared/App', () => {
        const App = require('../shared/App').default;
        render(App);
    });
}
