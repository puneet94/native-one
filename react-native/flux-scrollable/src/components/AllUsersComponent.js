"use strict";
import React from "react";
import { View, Text,Button,FlatList } from "react-native";
import {connect} from 'react-redux';
import {getAllUsers} from '../actions/users';
import {Actions} from 'react-native-router-flux';

import SingleUserComponent from './SingleUserComponent';
class AllUsersComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			page: 1
		};
	}
    
	componentWillMount=()=>{
		console.log("users component");
		this.setState({
			refreshing: true
		});
		this.props.getAllUsers(1);            
		this.setState({
			refreshing: false
		});
		
	}
	refreshUsers = ()=>{
		this.setState({
			refreshing: true
		});
		this.props.getAllUsers(1);
		
		this.setState({
			refreshing: false
		});
	}
	loadMoreUsers = ()=>{
		this.setState({
			page: this.state.page+1
		},()=>{
			this.props.getAllUsers(this.state.page);
		})
		
	}
	render=()=>{
		
		if(this.props.all){
				return (
					<View style={{
				flex:1
			}}>
				<FlatList
					data={this.props.all.users}
					renderItem={({item})=><SingleUserComponent user= {item} />}
					keyExtractor={(item)=>item._id}
					onEndReached={this.loadMoreUsers}
					onEndReachedThreshold={0.1}
					onRefresh={this.refreshUsers}
					refreshing={this.state.refreshing}
				/>
					
				
			</View>
				)
		}
		return(
			<Text>Not there</Text>
			
		);
	}
}
const mapStateToProps=(state)=>{
    return {
        all: state.users.all
    }
}
export default connect(mapStateToProps,{getAllUsers})(AllUsersComponent);