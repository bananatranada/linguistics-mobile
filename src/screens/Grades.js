import React, { Component } from 'react';
import { StyleSheet, FlatList, TouchableHighlight, View, TextInput } from 'react-native';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { NavigationActions } from 'react-navigation'


export default class Grades extends Component {
    static navigationOptions = {
        headerMode: 'float',
        title: 'Grades'
    }

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Container >
                <Content style={{backgroundColor: 'white'}}>
                    <List>
                        <ListItem><Text>Assignment 1 - 90/100</Text></ListItem>
                        <ListItem><Text>Exam 1 - 95/100</Text></ListItem>
                        <ListItem><Text>Assignment 2 - 80/100</Text></ListItem>
                        <ListItem><Text>Exam 2 - 90/100</Text></ListItem>
                    </List>
                </Content>
            </Container>
        )
    }



}