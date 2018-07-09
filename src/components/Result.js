import React, { Component } from 'react';
import { StyleSheet, 
        TouchableOpacity, 
        Text } from 'react-native';

class Result extends Component {
    render() {
        const { button, 
                plateNumberText, 
                dateTimeStyle, 
                durationStyle } = styles;

        const { onPress, 
                plateNumber, 
                dateTime, 
                duration } = this.props;

        return (

            <TouchableOpacity style={button} onPress={onPress}>
                <Text style={plateNumberText}>{plateNumber}</Text>
                <Text style={dateTimeStyle}>{dateTime}</Text>
                <Text style={durationStyle}>{duration}</Text>
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ffba00',
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10
    },
    plateNumberText: {
        fontWeight: 'bold',
        fontSize: 60,
        color: '#000000'
    },
    dateTimeStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#000000"
    },
    durationStyle: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 25
    }
});


export { Result }; 
