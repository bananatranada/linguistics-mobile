import React, { Component } from 'react';
import { StyleSheet, FlatList, TouchableHighlight, View, TextInput } from 'react-native';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
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
        // console.log(this.state);
        // console.log(this.props)

        return (
            <Container>
                {/*<FlatList*/}
                    {/*data={[*/}
                        {/*{key: 'Writing 2'},*/}
                        {/*{key: 'Speaking 2'},*/}
                        {/*{key: 'Something 2'},*/}
                        {/*{key: 'Writing 3'},*/}
                    {/*]}*/}
                    {/*renderItem={({item}) =>*/}
                        {/*<TouchableHighlight onPress={() => this.props.navigation.navigate('CoursePreview', {name: item.key})}>*/}
                            {/*<Text style={styles.item}>{item.key}</Text>*/}
                        {/*</TouchableHighlight>*/}
                    {/*}*/}
                {/*/>*/}
                <Content style={{backgroundColor: 'white'}}>
                    <List>
                        <ListItem onPress={() => this.props.navigation.navigate('CoursePreview', {name: 'Writing 2'})}>
                            <Text>Writing 2</Text>
                        </ListItem>
                        <ListItem onPress={() => this.props.navigation.navigate('CoursePreview', {name: 'Writing 2'})}>
                            <Text>Speaking 2</Text>
                        </ListItem>
                        <ListItem onPress={() => this.props.navigation.navigate('CoursePreview', {name: 'Writing 2'})}>
                            <Text>Dialect</Text>
                        </ListItem>
                        <ListItem onPress={() => this.props.navigation.navigate('CoursePreview', {name: 'Writing 2'})}>
                            <Text>Intonation</Text>
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
