import React, { Component } from 'react';
import { View, 
        Text, 
        StyleSheet, 
        TouchableOpacity } from 'react-native';

import { LicensePlate, 
        ParkDetails } from '../components';

class PlateDetails extends Component {
    
    render() {
        
        const { container,
                licenseContainer,
                detailsContainer, 
                buttonRow, 
                parkDetailStyle,
                button,
                buttonText,
                buttonCancel,
                buttonTextCancel } = styles;

        const { navigate } = this.props.navigation;
         
        return (

            <View style={container}>
                <View style={licenseContainer}>
                    <LicensePlate title="CWR3567"/>
                </View>

                <View style={detailsContainer}>

                    <View style={parkDetailStyle}>
                        <ParkDetails
                            date="January 12, 2018"
                            startTime="5:15 AM"
                            duration="1d 4h 22m 3s"
                            amount="100.00" 
                        />
                    </View>
                    
                    <View style={buttonRow}>
                        <TouchableOpacity 
                            style={[button, buttonCancel]}
                            onPress={() => navigate('Home')}>
                            <Text style={[buttonText, buttonTextCancel]}>STAY</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={button}>
                            <Text style={buttonText}>PAY</Text>
                        </TouchableOpacity>
                    </View>
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
        flexDirection: 'row'
    },
    details: {
        flex: 1,
    },
    licenseContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    parkDetailStyle: {
        flex: 3,
    },
    detailsContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 50,
        paddingBottom: 50
    },
    buttonRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#ffba00',
        height: 80,
        width: 180,
        marginLeft: 12,
        marginRight: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    buttonText: {
        color: '#000000',
        fontSize: 40,
        fontWeight: 'bold'
    },
    buttonCancel: {
        backgroundColor: 'red'
    },
    buttonTextCancel: {
        color: '#FFFFFF'
    }
})

export default PlateDetails;
