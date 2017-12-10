import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { NavigationActions } from 'react-navigation'

import { onSignIn } from '../auth';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };

        // this.onSubmitLogin = this.onSubmitLogin.bind(this);
    }

    render() {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'Tabs'})
            ]
        })

        return (
            <View style={{ paddingVertical: 20 }}>
                <Card>
                    <FormLabel>Email</FormLabel>
                    <FormInput placeholder="Email address..." />
                    <FormLabel>Password</FormLabel>
                    <FormInput secureTextEntry placeholder="Password..." />

                    <Button
                        buttonStyle={{ marginTop: 20 }}
                        backgroundColor="#03A9F4"
                        title="SIGN IN"
                        onPress={() => {
                            onSignIn().then(() => this.props.navigation.dispatch(resetAction));
                        }}
                    />
                </Card>
            </View>
        )
    }


    // onSubmitLogin() {
    //     return () => {
    //         console.log('onSubmitLogin');
    //         // TODO: Validation
    //         this.props.navigation.navigate('Main')
    //     }
    // }
}