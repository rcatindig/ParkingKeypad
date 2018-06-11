import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';

import { LicensePlate } from '../components';

class PlateDetails extends Component {
    
    render() {
        
        const { container } = styles;
         
        return (
            <View style={container}>
                <LicensePlate title="CWR3567"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#262626',
    },
})

export default PlateDetails;
