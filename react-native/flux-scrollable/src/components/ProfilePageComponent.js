"use strict";
import React from "react";
import { View, Text,Button } from "react-native";
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {logout} from '../actions/auth';
 class ProfilePageComponent extends React.Component {
	constructor(props){
        super(props);
    }
    render=()=>{
		return(
			<View style={{
				flex:1,
				backgroundColor:"red",
				alignItems:"center", 
				justifyContent:"center"
			}}>
				<Text>{ JSON.stringify(this.props.user) }</Text>
                <Button title={"logout"} onPress={this.props.logout}/>
			</View>
		);
	}
}
const mapStateToProps = (state)=>{
    return {
        user: state.user.user
    }
};
 export default connect(mapStateToProps,{logout})(ProfilePageComponent);