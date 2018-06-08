import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

// -- screens
import Home from '../screens/Home';
import Test from '../screens/Test'


// const TestStack = StackNavigator({
//     Test: {
//         screen: Test,
//         navigationOptions: {
//             header: null
//         }
//     }
// })

const HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    Test: {
        screen: Test,
        navigationOptions: {
            header: null
        }
    }
});



export { HomeStack };