import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


import Auth from './screens/Auth';

import MyCourses from './screens/MyCourses';
import CourseCatalog from './screens/CourseCatalog';
import Account from './screens/Account';

import Announcements from './screens/Announcements';

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
                screen: StackNavigator({
                    Root: {
                        screen: TabNavigator({
                            MyCourses: {
                                screen: MyCourses,
                                navigationOptions: {
                                    tabBarIcon: () => <Icon name="folder" size={20} />
                                }
                            },
                            CourseCatalog: {
                                screen: CourseCatalog,
                                navigationOptions: {
                                    tabBarIcon: () => <Icon name="folder" size={20} />
                                }
                            },
                            Account: {
                                screen: Account,
                                navigationOptions: {
                                    tabBarIcon: () => <Icon name="folder" size={20} />
                                }
                            }
                        })
                    },
                    Course: {
                        screen: TabNavigator({
                            Announcements: {
                                screen: Announcements,
                                navigationOptions: {
                                    tabBarIcon: () => <Icon name="folder" size={20} />
                                }
                            },
                        })
                    }
                })
            }
        },
        {
            headerMode: "none",
            // mode: "modal",
            initialRouteName: signedIn ? 'Root' : 'Auth'
        }
    );
};