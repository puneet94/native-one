"use strict";
import React from "react";
import { View, Text,Button } from "react-native";

export default class OtherProfileComponent extends React.Component {
	render(){
		return(
			<View style={{
				flex:1,
				backgroundColor:"red",
				alignItems:"center", 
				justifyContent:"center"
			}}>
				<Text>{ "Single Profile Page" }</Text>
                
			</View>
		);
	}
}