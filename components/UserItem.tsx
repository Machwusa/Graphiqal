import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

const UserItem = (props: { name: string; age: string; profession: string; }) => {

    return (
        <TouchableOpacity
            onLongPress={() => console.log("onLongPress=" + props.name)}
            onPress={() => console.log("onPress=" + props.name)} style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.age}>Age: {props.age}</Text>
            <Text style={styles.profession}>Profession: {props.profession}</Text>
        </TouchableOpacity>
    );

}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: 4,
        padding: 16,
        backgroundColor: '#F0FFFF',
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
