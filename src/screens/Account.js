import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { NavigationActions } from 'react-navigation'


export default class Account extends Component {
    static navigationOptions = {
        headerMode: 'float',
        title: 'Account'
    }

    constructor(props) {
        super(props);

    }

    componentWillMount() {
        // setTimeout(() => this.props.navigation.navigate('Course'), 5000)

    }

    render() {

        return (
            <View style={{ paddingVertical: 20 }}>
                <Text>Account</Text>
            </View>
        )
    }



}