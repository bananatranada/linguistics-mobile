import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AuthPage extends Component {



    render() {
        return (
           <View style={styles.container}>
               <View style={styles.header}>
                   <Text>ALT</Text>
               </View>
               <View style={styles.auth}>
               {/*<Login active={activeTab === 'login'} />*/}
               {/*<Signup active={activeTab === 'signup'} />*/}
               </View>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECEDEE',
        justifyContent: 'center',
    },
    header: {

    },
    auth: {

    },
});
