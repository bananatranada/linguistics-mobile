import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { NavigationActions } from 'react-navigation'


export default class Announcements extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <View style={{ paddingVertical: 20 }}>
                <Text>Announcements</Text>
            </View>
        )
    }



}