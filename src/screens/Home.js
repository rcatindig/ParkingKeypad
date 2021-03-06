import React, { Component } from 'react';
import { View,
		Text, 
		StyleSheet,
		TouchableOpacity } from 'react-native';
import { Key } from '../components';


class Home extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			searchString: "",
		}
	}

	onClickKey = (character) => {

		const { searchString } = this.state;

		this.setState({searchString: searchString.length < 7 ? searchString + character : searchString});

		return false;
		
	}

	onClickDeleteKey = () => {

		const { searchString } = this.state;

		this.setState({searchString: searchString.slice(0, -1)});

		return false;

	}

    render() {
		const { container, 
				keyRow, 
				keyBoard, 
				deleteBtn, 
				deleteText, 
				inputRow, 
				inputText, 
				searchBtn, 
				searchText } = styles;

		const { searchString } = this.state;

        return (
          <View style={container}>

		  	<View style={inputRow}>
				<Text style={inputText}>{searchString}</Text>
				<TouchableOpacity style={searchBtn} onPress={() => this.props.navigation.navigate('SearchResults')}>
					<Text style={searchText}>SEARCH</Text>
				</TouchableOpacity>
			</View>
            
            <View style={ keyBoard }>
				<View style={ keyRow }>
					<Key
						onPress={ () => this.onClickKey("1")} 
						title="1"
					/>
					<Key
						onPress={ () => this.onClickKey("2")} 
						title="2"
					/>
					<Key
						onPress={ () => this.onClickKey("3")}  
						title="3"
					/>
					<Key
						onPress={ () => this.onClickKey("1")}   
						title="4"
					/>
					<Key
						onPress={ () => this.onClickKey("5")}  
						title="5"
					/>
					<Key
						onPress={ () => this.onClickKey("6")}  
						title="6"
					/>
					<Key
						onPress={ () => this.onClickKey("7")}  
						title="7"
					/>
					<Key
						onPress={ () => this.onClickKey("8")}  
						title="8"
					/>
					<Key
						onPress={ () => this.onClickKey("9")}  
						title="9"
					/>
					<Key
						onPress={ () => this.onClickKey("0")}  
						title="0"
					/>
				</View>
				<View style={ keyRow }>
					
					<Key
						onPress={ () => this.onClickKey("Q")} 
						title="Q"
					/>
					<Key
						onPress={ () => this.onClickKey("W")} 
						title="W"
					/>
					<Key
						onPress={ () => this.onClickKey("E")} 
						title="E"
					/>
					
					<Key
						onPress={ () => this.onClickKey("R")} 
						title="R"
					/>
					
					<Key
						onPress={ () => this.onClickKey("T")} 
						title="T"
					/>
					
					<Key
						onPress={ () => this.onClickKey("Y")} 
						title="Y"
					/>
					<Key
						onPress={ () => this.onClickKey("U")} 
						title="U"
					/>
					
					<Key
						onPress={ () => this.onClickKey("I")} 
						title="I"	
					/>
					
					<Key
						onPress={ () => this.onClickKey("O")} 
						title="O"
					/>
					
					<Key
						onPress={ () => this.onClickKey("P")} 
						title="P"
					/>
					
				</View>

				<View style={ keyRow }>
					
					<Key
						onPress={ () => this.onClickKey("A")} 
						title="A"
					/>

					<Key
						onPress={ () => this.onClickKey("S")} 
						title="S"	
					/>

					<Key
						onPress={ () => this.onClickKey("D")} 
						title="D"
					/>

					<Key
						onPress={ () => this.onClickKey("F")} 
						title="F"
					/>

					<Key
						onPress={ () => this.onClickKey("G")} 
						title="G"
					/>

					<Key
						onPress={ () => this.onClickKey("H")} 
						title="H"
					/>

					<Key
						onPress={ () => this.onClickKey("J")} 
						title="J"
					/>

					<Key
						onPress={ () => this.onClickKey("K")} 
						title="K"
					/>

					<Key
						onPress={ () => this.onClickKey("L")} 
						title="L"
					/>
					
				</View>

				<View style={ keyRow }>
					
					<Key
						onPress={ () => this.onClickKey("Z")} 
						title="Z"
					/>
					
					<Key
						onPress={ () => this.onClickKey("X")} 
						title="X"
					/>

					<Key
						onPress={ () => this.onClickKey("C")} 
						title="C"
					/>

					<Key
						onPress={ () => this.onClickKey("V")} 
						title="V"
					/>

					<Key
						onPress={ () => this.onClickKey("B")} 
						title="B"
					/>

					<Key
						onPress={ () => this.onClickKey("N")} 
						title="N"
					/>
					
					<Key
						onPress={ () => this.onClickKey("M")} 
						title="M"
					/>

					<TouchableOpacity style={deleteBtn} onPress={ () => this.onClickDeleteKey()} >
						<Text style={deleteText}>DELETE</Text>
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
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
	},
	keyBoard: {
		flexDirection: 'column'
	},
	keyRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputRow: {
		flexDirection: 'row',
		marginBottom: 20,
	},
	inputText: {
		width: 420,
		padding: 20,
		borderWidth: 7,
		borderColor: '#dbdbdb',
		//borderColor: '#000000',
		fontSize: 80,
		height: 150,
		borderRadius: 18,
		color: '#FFFFFF',
		// color: '#000000',		
		textAlign: 'center'
	},
	deleteBtn: {
        backgroundColor: '#ffba00',
        width: 110,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 2,
    },
    deleteText: {
        fontWeight: 'bold',
		fontSize: 25,
		color: '#ff0000'
	},
	searchBtn: {
		backgroundColor: 'red',
		marginLeft: 20,
		borderRadius: 20,
		width: 300,
		justifyContent: 'center',
		alignItems: 'center'
	},
	searchText: {
		color: '#ffffff',
		fontSize: 60,
		fontWeight: 'bold'
	}
});

export default Home;