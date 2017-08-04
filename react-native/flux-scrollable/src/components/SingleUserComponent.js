import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,Dimensions} from 'react-native';
const { width } = Dimensions.get('window');
const SingleUserComponent = ({user})=>{
	
	return (
                
        <View style={styles.userContainer}>
        <View style={styles.userPicContainer}>
            {
            user.picture?<Image style={styles.userPicture} 
                                source={{uri:user.picture}} />:
                            <View></View>
                        }
        </View>
        <View style={styles.userDetailsContainer}>
            <Text style={styles.userName}>
                {user.anonName}{` (${user.gender[0]||'O'})`}
            </Text>
            <Text style={styles.userStatus}>
                {user.status}
            </Text>
            <View style={styles.userInterests}>{
            user.interests.map((interest,index)=><Text key={index}>#{interest}</Text>)}
            </View>
        </View>
        </View>

	);
};






const styles = StyleSheet.create({
	userContainer: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: 'flex-start',
    	alignItems: 'flex-start',
        flexDirection:'row',
        padding: 10,
        borderTopColor: 'black',
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
        fontWeight: '600'
    },

    userStatus:{
        fontSize: 14,
        fontWeight: '400'
    },
    userInterests:{
        flexDirection: 'row'
    },
	userImage:{
		flex:1,
		height: 300,
        width: null
	}
});

export default SingleUserComponent;