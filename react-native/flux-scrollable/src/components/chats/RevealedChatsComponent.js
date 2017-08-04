"use strict";
import React,{Component} from "react";
import { View, Text,Button,FlatList } from "react-native";
import {connect} from 'react-redux';
import {getRevealedChats} from '../../actions/chats';
import {Actions} from 'react-native-router-flux';

import RevealedChatComponent from './RevealedChatComponent';

class RevealedChatsComponent extends Component {
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
		this.props.getRevealedChats(1);            
		this.setState({
			refreshing: false
		});
		
	}
	refreshChats = ()=>{
		this.setState({
			refreshing: true
		});
		this.props.getRevealedChats(1);
		
		this.setState({
			refreshing: false
		});
	}
	loadMoreChats = ()=>{
		this.setState({
			page: this.state.page+1
		},()=>{
			this.props.getRevealedChats(this.state.page);
		})
		
	}
	render=()=>{
		
		if(this.props.revealed){
				return (
					<View style={{
				flex:1
			}}>
				<FlatList
					data={this.props.revealed.chats}
					renderItem={({item})=><RevealedChatComponent chat= {item} />}
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
        revealed: state.chats.revealed
    }
}
export default connect(mapStateToProps,{getRevealedChats})(RevealedChatsComponent);