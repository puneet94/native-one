import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,Dimensions} from 'react-native';
const { width } = Dimensions.get('window');
import { Constants, Location, Permissions } from 'expo';
const getLocationAsync = async () => {
            let { status } = await Permissions.askAsync(Permissions.LOCATION);
            if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
            }

            return  Location.getCurrentPositionAsync({});
            
  }
const deg2rad=(deg)=> {
		return deg * (Math.PI / 180);
}
const getDistance =  (geoPosition,position)=>{
			
			if(position &&  geoPosition){
				const latitude = geoPosition[1];
				const longitude = geoPosition[0];
				
				
				var lat2 = position.coords.latitude;
				var lon2 = position.coords.longitude;
				var R = 6371; 
				var dLat = deg2rad(lat2 - latitude); 
				var dLon = deg2rad(lon2 - longitude);
				var a =
					Math.sin(dLat / 2) * Math.sin(dLat / 2) +
					Math.cos(deg2rad(latitude)) * Math.cos(deg2rad(lat2)) *
					Math.sin(dLon / 2) * Math.sin(dLon / 2);
				var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
				distance = R * c; 
				return Math.floor(distance)+' mi';
			}
			return '';
			
			
};
export default SinglePostComponent = ({post,location})=>{
	
	if(!(post && post.user)){
		return <View></View>
	}
	return (
		<View style={styles.postContainer}>
  		<View style={styles.userDetails}>
				<View style={styles.postUserImage}>
	  			{
						post.user.picture?<Image style={styles.userImage}
          	source={{uri:post.user.picture}}/>:<View></View>
					}
	
				</View>
				<View style={styles.postUserNameContainer}>
					<Text style={styles.postUserName}>{post.user.anonName}</Text>
					<View style={ styles.postInterest}>
					{post.interests.map((interest,index)=>(<Text  key={index}>#{interest}</Text>))}
					</View>
				</View>
				<View style={styles.postDistance}>
					<Text>{getDistance(post.loc,location)}</Text>
				</View>
			</View>
  <View style={styles.postDetails}>
	<Text style={styles.postContent}>{post.content.slice(0,150)}<Text>{post.content.length>150?'...':''}</Text></Text>
	
	{post.image?<Image style={styles.postImage} 
          source={{uri:post.image}}
        />:<View></View>}
	  
	
  </View>
</View>
	);
}






const styles = StyleSheet.create({
	postContainer: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: 'flex-start',
    	alignItems: 'stretch'
	},
	userDetails:{
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'flex-start',
    	alignItems: 'flex-start'
	},
	postUserImage:{
		flex: 1.7,
		padding: 10
	},
	userImage:{
		width: 50,
		height:50,
	},
	postUserNameContainer:{
		flex: 8,
		paddingTop: 10
	},postUserName:{
		fontSize: 14
	},
	postDistance:{
		flex: 1,
		paddingTop: 10
	},
	postContent:{
		fontSize: 16
	},
	postDetails:{
		flex:8,
		padding: 10
	},
	postImage:{
		flex:1,
		height: 300,
		
    width: null
	},postInterest:{
		flex: 1,
		flexDirection: 'row'
	}
});
