import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Result } from '../components';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
      'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  

class Test extends Component {
    render() {
        const { container, platesContainer } = styles;  
        return (
          <View style={container}>
              <View style={platesContainer}>  
                <Result />   
                <Result />
                <Result />
                <Result />
              </View>              
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
    platesContainer: {
      //alignItems: 'flex-start',
      justifyContent: 'center',
      // width: 350,
      flexWrap: 'wrap'
    },
});

export default Test;