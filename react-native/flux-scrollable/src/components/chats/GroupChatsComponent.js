"use strict";
import React,{Component} from "react";
import { View, Text,Button,FlatList } from "react-native";
import {connect} from 'react-redux';
import {getGroupChats} from '../../actions/chats';
import {Actions} from 'react-native-router-flux';

import GroupChatComponent from './GroupChatComponent';

class GroupChatsComponent extends Component {
	constructor(props){
		super(props);
		this.state = {
			page: 1
		};
	}
    
	componentWillMount = ()=>{
		
		this.setState({
			refreshing: true
		});
		this.props.getGroupChats(1);            
		this.setState({
			refreshing: false
		});
		
	}
	refreshChats = ()=>{
		this.setState({
			refreshing: true
		});
		this.props.getGroupChats(1);
		
		this.setState({
			refreshing: false
		});
	}
	loadMoreChats = ()=>{
		this.setState({
			page: this.state.page+1
		},()=>{
			this.props.getGroupChats(this.state.page);
		})
		
	}
	render=()=>{
		console.log("group chats");
		console.log(this.props.groups.chats);
		if(this.props.groups){
				return (
					<View style={{
				flex:1
			}}>
				<FlatList
					data={this.props.groups.chats}
					renderItem={({item})=><GroupChatComponent group= {item} />}
					keyExtractor={(item)=>item._id}
					onEndReached={this.loadMoreChats}
					onEndReachedThreshold={0.1}
					onRefresh={this.refreshChats}
					refreshing={this.state.refreshing}
				/>
					
				
			</View>
				)
		}
		return(
			<Text>Not the</Text>
			
		);
	}
}
const mapStateToProps=(state)=>{
    return {
        groups: state.chats.groups
    }
}
export default connect(mapStateToProps,{getGroupChats})(GroupChatsComponent);