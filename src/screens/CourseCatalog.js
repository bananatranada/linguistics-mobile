import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { NavigationActions } from 'react-navigation'


export default class CourseCatalog extends Component {
    static navigationOptions = {
        headerMode: 'float',
        title: 'Course Catalog'
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
                <Text>Course Catalog</Text>
            </View>
        )
    }



}