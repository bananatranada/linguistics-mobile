import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Auth from './screens/Auth';
import Main from './screens/Main';

export const createNavigator = (signedIn = false) => {
    console.log(signedIn);
    return StackNavigator(
        {
            Auth: {
                screen: Auth,
                navigationOptions: {
                    gesturesEnabled: false
                }
            },
            Tabs: {
                screen: TabNavigator({
                    Main: {
                        screen: Main
                    }
                })
            }
        },
        {
            // headerMode: "none",
            // mode: "modal",
            initialRouteName: signedIn ? 'Tabs' : 'Auth'
        }
    );
};