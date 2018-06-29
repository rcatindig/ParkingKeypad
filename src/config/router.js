import React from 'react';
import { StackNavigator } from 'react-navigation';

// -- screens
import Home from '../screens/Home';
import SearchResults from '../screens/SearchResults'
import PlateDetails from '../screens/PlateDetails';

const HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    SearchResults: {
        screen: SearchResults,
        navigationOptions: {
            header: null
        }
    },
    PlateDetails: {
        screen: PlateDetails,
        navigationOptions: {
            header: null
        }
    }
});



export { HomeStack };