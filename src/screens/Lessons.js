import React, { Component } from 'react';
import { StyleSheet, FlatList, TouchableHighlight, View, TextInput } from 'react-native';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { NavigationActions } from 'react-navigation'


export default class Lessons extends Component {
    static navigationOptions = {
        headerMode: 'float',
        title: 'Lessons'
    }

    constructor(props) {
        super(props);

    }

    render() {
        return (
        <Container >
            <Content style={{backgroundColor: 'white'}}>
                <List>
                    <ListItem><Text>Week 1</Text></ListItem>
                    <ListItem><Text>Week 2</Text></ListItem>
                    <ListItem><Text>Week 3</Text></ListItem>
                    <ListItem><Text>Week 4</Text></ListItem>
                </List>
            </Content>
        </Container>
        )
    }



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
