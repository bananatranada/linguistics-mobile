import React, { Component } from 'react';
import { NavigatorIOS, StyleSheet, Text, View, AsyncStorage } from 'react-native';

import { createNavigator } from './src/routes';
import { isSignedIn } from './src/auth';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
            checkedSignIn: false
        };

        // temp; so it doesn't save state
        AsyncStorage.clear();
    }

    componentWillMount() {
        // await Expo.Font.loadAsync({
        //     'Roboto': require('native-base/Fonts/Roboto.ttf'),
        //     'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        // });

        isSignedIn()
            .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
            .catch(err => alert("An error occurred"));
    }


    render() {
        if (!this.state.checkedSignIn) {
            return null;
        }

        const Navigator = createNavigator(this.state.signedIn);

        return (
            <Navigator />
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
