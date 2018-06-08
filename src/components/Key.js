import React, { Component } from 'react';
import { StyleSheet, Button, TouchableOpacity, Text } from 'react-native';

class Key extends Component {
    render() {
        const { button, buttonText } = styles;

        const { onPress, title } = this.props;

        return (
            

            <TouchableOpacity style={button} onPress={onPress}>
                <Text style={buttonText}>{title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ffba00',
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 2,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#000000'
    }
});


export { Key }; 
