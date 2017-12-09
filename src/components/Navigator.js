import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import AuthPage from './AuthPage';
import HomePage from './HomePage';

const Navigator = StackNavigator({
    Auth: {
        screen: AuthPage,
        path: '/',
        navigationOptions: {
            title: 'ALT',
        }
    },
    Tabs: {
        screen: TabNavigator({Home: { screen: HomePage}}),
        path: '/home'
    }
}, {navigationOptions: {
    initialRouteName: 'Auth'
}});

export default Navigator;