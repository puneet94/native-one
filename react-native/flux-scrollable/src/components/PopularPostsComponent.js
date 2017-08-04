"use strict";
import React from "react";
import { View, Text,Button,FlatList } from "react-native";
import {connect} from 'react-redux';
import {getPopularPosts,incrementPopularPostsPage} from '../actions/posts';
import {Actions} from 'react-native-router-flux';
import SinglePostComponent from './SinglePostComponent';
class PopularPostsComponent extends React.Component {
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
		this.props.getPopularPosts(1);
		this.setState({
			refreshing: false
		});
		
	}
	refreshPosts = ()=>{
		this.setState({
			refreshing: true
		});
		this.props.getPopularPosts(1);
		
		this.setState({
			refreshing: false
		});
	}
	loadMorePosts = ()=>{
		this.setState({
			page: this.state.page+1
		},()=>{
			this.props.getPopularPosts(this.state.page);
		})
		
	}
	render=()=>{
		
		if(this.props.popular){
				return (
					<View style={{
				flex:1,
				backgroundColor:"yellow"
			}}>
				<FlatList
					data={this.props.popular.posts}
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
        popular: state.posts.popular
    }
}
export default connect(mapStateToProps,{getPopularPosts,incrementPopularPostsPage})(PopularPostsComponent);