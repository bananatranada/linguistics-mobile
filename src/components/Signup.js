import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { NavigationActions } from 'react-navigation'

import { onSignIn } from '../auth';

export default class Signup extends Component {
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
                    <FormLabel>Confirm Password</FormLabel>
                    <FormInput secureTextEntry placeholder="Confirm Password..." />

                    <Button
                        buttonStyle={{ marginTop: 20 }}
                        backgroundColor="#03A9F4"
                        title="SIGN UP"
                        onPress={() => {
                            onSignIn().then(() => this.props.navigation.dispatch(resetAction));
                        }}
                    />
                    {/*<Button*/}
                        {/*buttonStyle={{ marginTop: 20 }}*/}
                        {/*backgroundColor="transparent"*/}
                        {/*textStyle={{ color: "#bcbec1" }}*/}
                        {/*title="Sign In"*/}
                        {/*onPress={() => navigation.navigate("SignIn")}*/}
                    {/*/>*/}
                </Card>
            </View>
        )
    }
}