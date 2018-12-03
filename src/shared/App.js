import React, { Component } from 'react';
import Helmet from 'react-helmet';

import routeItems from './routes/items.js';
import { AppContainer } from 'react-hot-loader';
import { Switch, Route } from "react-router-dom";

// import UniversalComponent from './components/UniversalComponent';

/**
 * The `App` component is the entry point for the react app.
 * It is rendered on the client as well as on the server.
 *
 * You can start developing your react app here.
 */
export default class App extends Component {

    render() {
        return (
            <AppContainer>
        			<div>
        				<h1>Currency App Container</h1>
                <div>
                  <a href="/">home</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="/currency">Currency App</a>
                </div>
        				<Switch>
        						{ routeItems.map( route => <Route key={ route.path } { ...route } /> ) }
        				</Switch>
        			</div>
            </AppContainer>
        );
    }

}
