import React,{Component} from 'react';
import {View,Text,AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {fetchUserDetails,fetchUserLocationDetails} from '../actions/user';
import {JWT_TOKEN} from '../actions/constants';
class LogoComponent extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount = async ()=>{
        this.props.fetchUserLocationDetails();
        try {
            const value = await AsyncStorage.getItem(JWT_TOKEN);
            if (value !== null){
                this.props.fetchUserDetails(value);
            }else{
                
                Actions.auth();
            }
        } catch (error) {
            console.log("logo catch");
            console.log(error);
            Actions.auth();
        }
    }
    render=()=>{
        return (
            <View>            
                <Text>{"Welcome to anonsment"}</Text>
            </View>            
        )
    }

}
export default connect(null,{fetchUserDetails,fetchUserLocationDetails})(LogoComponent);