import React, { Component } from 'react';
import { NavigatorIOS, StyleSheet, Text, View } from 'react-native';

import Navigator from './src/components/Navigator';
import HelloWorldApp from './src/components/HelloWorldApp';
import AuthPage from './src/components/AuthPage';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
        }
    }
    render() {
        const Navigator = createNavigator()
        return (
            <Navigator />
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
