import React,{Component} from 'react';
import {View,Text,Button} from 'react-native'
import {connect} from 'react-redux';
import { Constants, Facebook, Google } from 'expo';
import {facebookLogin,googleLogin} from '../actions/auth';
 class AuthComponent extends Component{

     _handleFacebookLogin = async () => {
        try {
          const { type, token } = await Facebook.logInWithReadPermissionsAsync(
            '1201211719949057', // Replace with your own app id in standalone app
            { permissions: ['public_profile','email'] }
          );

          switch (type) {
            case 'success': {
              // Get the user's name using Facebook's Graph API
              const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
              const profile = await response.json();
              console.log("facebok");
              console.log(profile);
              let profileString = JSON.stringify(profile);
              this.setState({
                profile: profileString
              });
              break;
            }
            case 'cancel': {
              Alert.alert(
                'Cancelled!',
                'Login was cancelled!',
              );
              break;
            }
            default: {
              Alert.alert(
                'Oops!',
                'Login failed!',
              );
            }
          }
        } catch (e) {
          Alert.alert(
            'Oops!',
            'Login failed!',
          );
        }
  };

    _handleGoogleLogin = async () => {
            try {
          const { type, user } = await Google.logInAsync({
            androidStandaloneAppClientId: '<ANDROID_CLIENT_ID>',
            iosStandaloneAppClientId: '<IOS_CLIENT_ID>',
            androidClientId: '603386649315-9rbv8vmv2vvftetfbvlrbufcps1fajqf.apps.googleusercontent.com',
            iosClientId: '603386649315-vp4revvrcgrcjme51ebuhbkbspl048l9.apps.googleusercontent.com',
            scopes: ['profile', 'email']
          });
          
          switch (type) {
            case 'success': {
              
            console.log("hee");
            console.log(user);
              this.setState({
            profile: JSON.stringify(user)
          });
              break;
            }
            case 'cancel': {
              Alert.alert(
                'Cancelled!',
                'Login was cancelled!',
              );
              break;
            }
            default: {
              Alert.alert(
                'Oops!',
                'Login failed!',
              );
            }
          }
        } catch (e) {
          Alert.alert(
            'Oops!',
            'Login failed!',
          );
        }
  };

  render=()=>{
    return (
      <View>
        <Button onPress={this.props.facebookLogin} title={"FACEBOOK"}></Button>
        <Button onPress={this.props.googleLogin} title={"GOOGLE"}></Button>
        <View><Text>{this.props.auth.error}</Text></View>
        <View><Text>{this.props.auth.jwt_token}</Text></View>
      </View>
    )
  }
}
const mapStateToProps=(state)=>{
  return {
    auth: state.auth
  };
}
export default connect(mapStateToProps,{facebookLogin,googleLogin})(AuthComponent);
