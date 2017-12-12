import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


import Auth from './screens/Auth';

import MyCourses from './screens/MyCourses';
import CourseCatalog from './screens/CourseCatalog';
import Account from './screens/Account';
import CoursePreview from './screens/CoursePreview';

import Announcements from './screens/Announcements';
import Lessons from './screens/Lessons';
import Assignments from './screens/Assignments';
import Grades from './screens/Grades';

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
                            Lessons: {
                                screen: Lessons,
                                navigationOptions: {
                                    tabBarIcon: () => <Icon name="folder" size={20} />
                                }
                            },
                            Assignments: {
                                screen: Assignments,
                                navigationOptions: {
                                    tabBarIcon: () => <Icon name="folder" size={20} />
                                }
                            },
                            Grades: {
                                screen: Grades,
                                navigationOptions: {
                                    tabBarIcon: () => <Icon name="folder" size={20} />
                                }
                            },
                        })
                    },
                    CoursePreview: {
                        screen: CoursePreview,
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