import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import Login from './Login';
import Signup from './Signup';

export default class AuthPage extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'login',
        }
        this.onSubmitLogin = this.onSubmitLogin.bind(this);
        // this.onPressSignupButton = this.onPressSignupButton.bind(this);
    }


    render() {
        // console.log(this.state);

        return (
           <SafeAreaView style={styles.container}>
               <View style={styles.header}>
                   <Text>ALT</Text>
                   <View style={styles.headerTabs}>
                       <Button
                           title="Log In"
                           onPress={() => this.setState({activeTab: 'login'})}
                           style={[this.state.activeTab === 'login' && styles.authButtonActive]}
                       />
                       <Button title="Sign Up" onPress={() => this.setState({activeTab: 'signup'})}/>
                   </View>
               </View>
               <View style={styles.auth}>
                   {this.state.activeTab === 'login' && <Login onSubmit={this.onSubmitLogin()} />}
                   {this.state.activeTab === 'signup' && <Signup navigator={this.props.navigator} />}
               {/*<Login active={activeTab === 'login'} />*/}
               {/*<Signup active={activeTab === 'signup'} />*/}
               </View>
           </SafeAreaView>
        );
    }

    onSubmitLogin() {
        return () => {
            console.log('onSubmitLogin');
            // TODO: Validation
            this.props.navigation.navigate('Home')
        }
    }
    // onPressLoginButton() {
    //     return ()this.setState({activeTab: 'login'})
    // }
    // onPressSignupButton() {
    //     this.setState({activeTab: 'signup'})
    // }

}

const styles = StyleSheet.create({
    container: {
        // paddingTop: 100,
        flex: 1,
        backgroundColor: '#ECEDEE',

    },
    header: {
        // position: 'absolute',
        // top: 100,
        alignItems: 'center',
    },
    headerTabs: {
        flexDirection: 'row',
    },
    authButtonActive: {
        fontWeight: 'bold',
    },
    auth: {

    },
});
