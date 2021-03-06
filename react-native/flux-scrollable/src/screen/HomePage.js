"use strict";
import React,{Component} from "react";
import { View, Text, StyleSheet,Button } from "react-native";
import LatestPostsComponent from '../components/LatestPostsComponent';
import PopularPostsComponent from '../components/PopularPostsComponent';
//<NearbyPostsComponent/>
import NearbyPostsComponent from '../components/NearbyPostsComponent';
export default class HomePage extends Component {
	constructor(props){
		super(props);
		this.state={
			currentTab: 3
		};
	}
	renderTabs = ()=>{
		if(this.state.currentTab==1){
			return (
				
				<NearbyPostsComponent/>
			);
		}else if(this.state.currentTab==2){
			return (
				<PopularPostsComponent/>
			);
		}else if(this.state.currentTab==3){
			return (
				<LatestPostsComponent/>
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

						<Button style={styles.singleTab} onPress={ () => this.setTab(1) } title={'NEARBY'}>  </Button>
					
						<Button style={styles.singleTab} onPress={ () => this.setTab(2) } title={'POPULAR'}>  </Button>
					
						<Button style={styles.singleTab} onPress={ () => this.setTab(3) } title={'LATEST'}>  </Button>
					
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
