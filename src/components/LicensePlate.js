import React, { Component } from 'react';
import { View, 
        Text, 
        StyleSheet, 
        ImageBackground } from 'react-native';


class LicensePlate extends Component {
    
    render() {
        
        const { imgContainer, 
                imageBg, 
                plateText } = styles;

        const { title } = this.props;
          
        return (
            <View style={imgContainer}>
                <ImageBackground style={imageBg} source={require('../../assets/img/plate-frame.png')}>
                    <Text style={plateText}>{title}</Text>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imgContainer: {
        height: 200,
        width: 400,
    },
    imageBg: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    plateText: {
        fontSize: 75,
        fontWeight: 'bold',
        marginBottom: 18,
        color: '#ffffff'
    }
});

export { LicensePlate };  