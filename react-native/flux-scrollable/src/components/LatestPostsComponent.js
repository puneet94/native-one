"use strict";
import React from "react";
import { View, Text,Button,FlatList } from "react-native";
import {connect} from 'react-redux';
import {getLatestPosts} from '../actions/posts';
import {Actions} from 'react-native-router-flux';
import SinglePostComponent from './SinglePostComponent';
class LatestPostsComponent extends React.Component {
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
		console.log("called component will mount");
		this.props.getLatestPosts(1);
		this.setState({
			refreshing: false
		});
		
	}
	refreshPosts = ()=>{
		this.setState({
			refreshing: true
		});
		this.props.getLatestPosts(1);
		
		this.setState({
			refreshing: false
		});
	}
	loadMorePosts = ()=>{
		this.setState({
			page: this.state.page+1
		},()=>{
			this.props.getLatestPosts(this.state.page);
		})
		
	}
	render=()=>{
		
		if(this.props.latest){
				return (
					<View style={{
				flex:1,
				backgroundColor:"yellow"
			}}>
				<FlatList
					data={this.props.latest.posts}
					renderItem={({item})=><SinglePostComponent post= {item} />}
					keyExtractor={(item)=>item._id}
					onEndReached={this.loadMorePosts}
					onEndReachedThreshold={0.5}
					onRefresh={this.refreshPosts}
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
        latest: state.posts.latest
    }
}
export default connect(mapStateToProps,{getLatestPosts})(LatestPostsComponent);