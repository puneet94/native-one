import React,{Component} from "react";
import {View,Text,StyleSheet,Image,Dimensions} from "react-native";
const { width } = Dimensions.get("window");
const SingleChatComponent = ({chat})=>{
	
	return (
				
		<View style={styles.userContainer}>
			<View style={styles.userPicContainer}>
				{
					chat.creator2.picture?<Image style={styles.userPicture} source={{uri:chat.creator2.picture}} />:<View></View>
				}
			</View>
			<View style={styles.userDetailsContainer}>
				<Text style={styles.userName}>
					{chat.creator2.anonName}
				</Text>
				<Text style={styles.userStatus}>
					{chat.lastMessage.message}
				</Text>
				
			</View>
			<View style={styles.userMessageAlert}>
				<Text>
					{
						chat.lastMessageTime>chat.lastLoggedOut?"1":""
					}
				</Text>
			</View>
		</View>

	);
};

const styles = StyleSheet.create({
	userContainer: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		flexDirection:"row",
		padding: 10,
		borderTopColor: "black",
		borderTopWidth: 0.6
	},
	userPicContainer:{
		flex: 2.5
	},
	userPicture:{
		height: 55,
		width: 55,
		borderRadius: 4

	},
	userDetailsContainer:{
		flex: 10
	},
	userName: {
		fontSize: 18,
		fontWeight: "600"
	},

	userStatus:{
		fontSize: 14,
		fontWeight: "400"
	},
	
	userImage:{
		flex:1,
		height: 300,
		width: null
	},
	userMessageAlert:{
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	}
});

export default SingleChatComponent;