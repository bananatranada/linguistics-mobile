import React, { Component } from 'react';
import { NavigatorIOS, StyleSheet, Text, View } from 'react-native';

import HelloWorldApp from './src/components/HelloWorldApp';
import AuthPage from './src/components/AuthPage';

export default class App extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: AuthPage,
          title: 'My Initial Scene',
        }}
        style={{flex: 1}}
      />
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
