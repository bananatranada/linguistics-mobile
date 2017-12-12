import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { NavigationActions } from 'react-navigation'


export default class CoursePreview extends Component {
    static navigationOptions = {
        headerMode: 'float',
        title: 'CoursePreview'
    }

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{ paddingVertical: 20 }}>
                <Text>CoursePreview</Text>
                <Button
                    title="Enroll"
                    // onPress={() => this.setState({activeTab: 'login'})}
                    // style={[this.state.activeTab === 'login' && styles.authButtonActive]}
                />
            </View>
        )
    }



}