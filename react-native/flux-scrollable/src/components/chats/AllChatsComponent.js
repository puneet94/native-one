"use strict";
import React from "react";
import { View, Text,Button,FlatList } from "react-native";
import {connect} from 'react-redux';
import {getAllChats} from '../../actions/chats';
import {Actions} from 'react-native-router-flux';

import SingleChatComponent from './SingleChatComponent';

class AllChatsComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			page: 1
		};
	}
    
	componentWillMount=()=>{
		
		this.setState({
			refreshing: true
		});
		this.props.getAllChats(1);            
		this.setState({
			refreshing: false
		});
		
	}
	refreshChats = ()=>{
		this.setState({
			refreshing: true
		});
		this.props.getAllChats(1);
		
		this.setState({
			refreshing: false
		});
	}
	loadMoreChats = ()=>{
		this.setState({
			page: this.state.page+1
		},()=>{
			this.props.getAllChats(this.state.page);
		})
		
	}
	render=()=>{
		
		if(this.props.all){
				return (
					<View style={{
				flex:1
			}}>
				<FlatList
					data={this.props.all.chats}
					renderItem={({item})=><SingleChatComponent chat= {item} />}
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
			<Text>Not there</Text>
			
		);
	}
}
const mapStateToProps=(state)=>{
    return {
        all: state.chats.all
    }
}
export default connect(mapStateToProps,{getAllChats})(AllChatsComponent);