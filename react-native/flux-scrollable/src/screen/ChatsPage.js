"use strict";
import React,{Component} from "react";
import { View, Text,Button,StyleSheet } from "react-native";
import {Actions} from 'react-native-router-flux';
import AllChatsComponent from "../components/chats/AllChatsComponent";
import GroupChatsComponent from "../components/chats/GroupChatsComponent";
import RevealedChatsComponent from "../components/chats/RevealedChatsComponent";

export default class ChatsPage extends Component {
	constructor(props){
		super(props);
		this.state={
			currentTab: 1
		};
	}
	renderTabs = ()=>{
		if(this.state.currentTab==1){
			return (
				
				<AllChatsComponent/>
			);
		}else if(this.state.currentTab==2){
			return (
				<RevealedChatsComponent/>
			);
		}else if(this.state.currentTab==3){
			return (
				<GroupChatsComponent/>
				
			);
		}
	}
	setTab=(tab)=>{
		this.setState({currentTab:tab});
	}
	render=()=>{
		return(
			<View style={{
				flex:1,
				backgroundColor:"red",
				marginTop: 20
			}}>
				<View style={styles.tabContainer}>

						<Button style={styles.singleTab} onPress={ () => this.setTab(1) } title={'ALL'}>  </Button>
					
						<Button style={styles.singleTab} onPress={ () => this.setTab(2) } title={'REVEALED'}>  </Button>
					
						<Button style={styles.singleTab} onPress={ () => this.setTab(3) } title={'GROUPS'}>  </Button>
					
				</View>
				<View style={styles.singleTabContainer}>
					{
						this.renderTabs()
					}
				</View>
				<View style={styles.fabButton}></View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	tabContainer: {
  		flex: 1,
  		flexDirection: 'row',
  		justifyContent: 'space-between',
		alignItems: 'stretch'
	},
	singleTab:{
		flex: 1,
		alignItems: 'stretch',
		alignSelf: 'stretch'
	},
	singleTabContainer:{
		flex: 11
	},fabButton:{width: 60,
height: 60,
borderRadius: 30,
backgroundColor: '#ee6e73',
position: 'absolute',
bottom: 10,
right: 10,
}});
