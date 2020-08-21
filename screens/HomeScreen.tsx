import React, {useState} from 'react';
import {FlatList } from 'react-native';

import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

import UserItem from '../components/UserItem';

interface Props {
    //code related to your props goes here
}
interface State  {
    usersData: any
}

export default class HomeScreen extends React.Component<Props, State> {

    constructor(props: any) {
        super(props);

        this.state ={
            usersData: [],
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

            this.setState({usersData: responseJson.data.users})

        })
        .catch((error) => console.log(error));
    }

    render() {
        return (
            <FlatList
                data={this.state.usersData}
                renderItem={({item}) => <UserItem {...item}/>}
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }
}
