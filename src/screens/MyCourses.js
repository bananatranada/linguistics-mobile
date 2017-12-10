import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



export default class MyCourses extends Component {

    static navigationOptions = {
        headerMode: 'float',
        title: 'My Courses'
    }

    constructor(props) {
        super(props);

    }



    render() {
        // console.log(this.state);

        return (
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
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
