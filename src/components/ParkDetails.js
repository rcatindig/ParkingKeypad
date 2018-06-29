import React, { Component } from 'react';
import { View, 
        Text, 
        StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';


class ParkDetails extends Component {
    
    render() {
        
        const { container, 
                detailsRow, 
                detailsRowText } = styles;

        const { date, 
                startTime, 
                duration, 
                amount } = this.props;
          
        return (
            <View style={container}>
                <View style={detailsRow}>
                    <Icon
                        name='calendar'
                        type='material-community'
                        color='#ffba00'
                        size={60}
                    />
                    <Text style={detailsRowText}>{date}</Text>
                </View>
                <View style={detailsRow}>
                    <Icon
                        name='clock-in'
                        type='material-community'
                        color='#ffba00'
                        size={70}
                    />
                    <Text style={detailsRowText}>{startTime}</Text>
                </View>
                <View style={detailsRow}>
                    <Icon
                        name='clock-start'
                        type='material-community'
                        color='#ffba00'
                        size={60}
                    />
                    <Text style={detailsRowText}>{duration}</Text>
                </View>
                <View style={detailsRow}>
                    <Icon
                        name='coin'
                        type='material-community'
                        color='#ffba00'
                        size={60}
                    />
                    <Text style={detailsRowText}>{amount}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    detailsRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 30
    },
    detailsRowText: {
        color: '#ffffff',
        paddingLeft: 20,
        fontSize: 40,
        fontStyle: 'italic',
    }
});

export { ParkDetails };  