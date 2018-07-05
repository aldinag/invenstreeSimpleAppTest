/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	Provider,
} from 'react-redux';
import Route from './route';
import store from './manager';

export default class App extends Component {
    onNavigationStateChange(prev, current) {
		console.log(prev, current)
	}

    render() {
        return (
            <Provider store={store}>
                <Route onNavigationStateChange={this.onNavigationStateChange.bind(this)}/>
            </Provider>
        );
    }
}
