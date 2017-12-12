import React, { Component } from 'react';
import { StyleSheet, FlatList, TouchableHighlight, View, TextInput } from 'react-native';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';


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
        // console.log(this.props)

        return (
            <Container >
                {/*<FlatList*/}
                    {/*data={[*/}
                        {/*{key: 'Writing 1'},*/}
                        {/*{key: 'Speaking 1'},*/}
                        {/*{key: 'Something 1'},*/}
                        {/*{key: 'Writing 2'},*/}
                    {/*]}*/}
                    {/*renderItem={({item}) =>*/}
                        {/*<TouchableHighlight onPress={() => this.props.navigation.navigate('Announcements', {name: item.key})}>*/}
                            {/*<Text style={styles.item}>{item.key}</Text>*/}
                        {/*</TouchableHighlight>*/}
                    {/*}*/}
                {/*/>*/}
                <Content style={{backgroundColor: 'white'}}>
                    <List>
                        <ListItem onPress={() => this.props.navigation.navigate('Course', {name: 'Writing 2'})}>
                            <Text>Writing 1</Text>
                        </ListItem>
                        <ListItem onPress={() => this.props.navigation.navigate('Course', {name: 'Writing 2'})}>
                            <Text>Speaking 1</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
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
