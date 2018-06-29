import React, { Component } from 'react';
import { View, 
        Text, 
        StyleSheet, 
        TouchableOpacity } from 'react-native';
import { Result } from '../components';
  

class SearchResults extends Component {
    
    render() {
        const { goBack, navigate } = this.props.navigation;
        const { container, platesContainer, backNavigation, backNavigationText } = styles;  
        return (
          <View style={container}>
              <View style={platesContainer}>  
                <Result 
                  plateNumber="CWZ4677"
                  dateTime="01.04.2018 9:45 AM"
                  duration="1d 2h 22m 34s" 
                  onPress={() => navigate('PlateDetails')} />   
                <Result 
                  plateNumber="ACZ2315"
                  dateTime="01.04.2018 9:45 AM"
                  duration="1d 2h 22m 34s" 
                  onPress={() => navigate('PlateDetails')} />   
                <Result 
                  plateNumber="GNO3530"
                  dateTime="01.04.2018 9:45 AM"
                  duration="1d 2h 22m 34s" 
                  onPress={() => navigate('PlateDetails')} />   
                <Result 
                  plateNumber="MBO3900"
                  dateTime="01.04.2018 9:45 AM"
                  duration="1d 2h 22m 34s" 
                  onPress={() => navigate('PlateDetails')} />   
                
                
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