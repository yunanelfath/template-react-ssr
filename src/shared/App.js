import React, { Component } from 'react';
import Helmet from 'react-helmet';

import './app.styl';
import './app.scss';

import TestApp from './test.cjsx';

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
        				<h1>tetssssingg laskdjf laskdfjlskajd</h1>
        				<Switch>
        						{ routeItems.map( route => <Route key={ route.path } { ...route } /> ) }
        				</Switch>
        			</div>
            </AppContainer>
        );
    }

}
