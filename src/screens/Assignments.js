import React, { Component } from 'react';
import { StyleSheet, FlatList, TouchableHighlight, View, TextInput } from 'react-native';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';

import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { NavigationActions } from 'react-navigation'


export default class Assignments extends Component {
    static navigationOptions = {
        headerMode: 'float',
        title: 'Assignments'
    }

    constructor(props) {
        super(props);

    }

    render() {
        const items = ['Assignment 1',
            'Exam 1',
            'Assignment 2',
            'Exam 2',];
        return (
            <Container >
                <Content style={{backgroundColor: 'white'}}>
                    <List>
                        <ListItem><Text>Assignment 1</Text></ListItem>
                        <ListItem><Text>Exam 1</Text></ListItem>
                        <ListItem><Text>Assignment 2</Text></ListItem>
                        <ListItem><Text>Exam 2</Text></ListItem>
                    </List>
                    <List
                        dataArray={items}
                        renderRow={(item) => (
                            <ListItem>
                          {/*<TouchableHighlight onPress={() => this.props.navigation.navigate('Lesson', {name: item})}>*/}
                                <Text>{item}</Text>
                          {/*</TouchableHighlight>*/}
                            </ListItem>
                        )}
                    />
                </Content>
                {/*<FlatList*/}
                    {/*data={[*/}
                        {/*{key: 'Assignment 1'},*/}
                        {/*{key: 'Exam 1'},*/}
                        {/*{key: 'Assignment 2'},*/}
                        {/*{key: 'Exam 2'},*/}
                    {/*]}*/}
                    {/*renderItem={({item}) =>*/}
                        {/*<TouchableHighlight onPress={() => this.props.navigation.navigate('Lesson', {name: item.key})}>*/}
                            {/*<Text style={styles.item}>{item.key}</Text>*/}
                        {/*</TouchableHighlight>*/}
                    {/*}*/}
                {/*/>*/}
            </Container>
        )
    }



}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
