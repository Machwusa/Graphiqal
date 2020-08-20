import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

const UserItem = (props: { name: any; age: any; profession: any; }) => {

    return (
        <TouchableOpacity  style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.age}>Age: {props.age}</Text>
            <Text style={styles.profession}>Profession: {props.profession}</Text>
        </TouchableOpacity >
    );

}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: 4,
        padding: 16,
        backgroundColor: '#F5FCFF',
        borderWidth: 1,
        borderColor: '#C0C0C0',
        borderRadius: 8,
    },
    name: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    age: {
        fontSize: 16,
        marginBottom: 8,
        textAlign: 'center',
    },
    profession: {
        textAlign: 'center',
    },
});

export default UserItem
