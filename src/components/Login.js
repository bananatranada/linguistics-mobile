import React, { Component } from 'react';
import { View, Button, Text, TextInput } from 'react-native';

import HomePage from './HomePage'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };

        this.onSubmitLogin = this.onSubmitLogin.bind(this);
    }

    render() {
        return (
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                    placeholder="Email"
                    onSubmitEditing={this.props.onSubmit()}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(password) => this.setState({password})}
                    secureTextEntry={true}
                    value={this.state.password}
                    placeholder="Password"
                    onSubmitEditing={this.props.onSubmit()}
                />
                {/*<Button title="Log In" onPress={() => this.setState({activeTab: 'signup'})}/>*/}
            </View>
        )
    }


    onSubmitLogin() {
        return () => {
            console.log('onSubmitLogin');
            // TODO: Validation
            this.props.navigator.replace({
                component: HomePage,
                title: 'Home',
            })
        }
    }
}