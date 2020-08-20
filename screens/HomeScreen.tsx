import React from 'react';
import {FlatList } from 'react-native';

import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

import UserItem from '../components/UserItem';

type state = {
    dataSource: any,
}


export default class HomeScreen extends React.Component<state> {

    static navigationOptions = {
        title: `HomeScreen`,
        headerStyle: {
            backgroundColor: '#ADD8E6'
        },
    };

    constructor(props: any) {
        super(props);
        this.state = {
            dataSource: null,
        }
    }

    componentDidMount() {
        const client = new ApolloClient({uri: 'https://graphql-android-project.herokuapp.com/graphql'});

        client.query({
            query: gql`
                query {
                    users{
                        name
                        age
                        profession
                    }
                }
            `
        }).then(responseJson => {

            console.log(responseJson)

            this.setState({
                dataSource: responseJson,
            })
        })
        .catch((error) => console.log(error));
    }

    render() {
        // const {navigate} = this.props.navigation;
       // let data = this.state.dataSource;
        return (
       /*     <UserItem name="Boitshoko" age="28" profession={"Dev"}/>*/
            <FlatList
                data={this.state.dataSource}
                renderItem={({item}) => <UserItem {...item}/>}
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }
}
