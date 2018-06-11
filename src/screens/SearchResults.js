import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Result } from '../components';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
      'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  

class SearchResults extends Component {
    
    render() {
        const { goBack } = this.props.navigation;
        const { container, platesContainer, backNavigation, backNavigationText } = styles;  
        return (
          <View style={container}>
              <View style={platesContainer}>  
                <Result />   
                <Result />
                <Result />
                <Result />
                
              </View>
              <TouchableOpacity style={backNavigation} onPress={() => goBack()} >
                  <Text style={backNavigationText}>Back</Text>
              </TouchableOpacity>              
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
      flexWrap: 'wrap',
    },
    backNavigation: {
      backgroundColor: "red",
      position: 'absolute',
      top: 10,
      left: 10,
      paddingTop: 12,
      paddingRight: 20,
      paddingBottom: 12,
      paddingLeft: 20
    },
    backNavigationText: {
      color: '#FFFFFF',
      fontSize: 20,
      fontWeight: 'bold'
    }

});

export default SearchResults;