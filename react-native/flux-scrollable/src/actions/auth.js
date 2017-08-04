import axios from 'axios';
import {SET_AUTH_TOKEN,JWT_TOKEN,URL,FACEBOOK_LOGIN_FAIL,REMOVE_AUTH_TOKEN,ERROR_AUTH_TOKEN} from './constants';
import {fetchUserDetails} from './user';
import { AsyncStorage,Alert } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Constants, Facebook, Google } from 'expo';
const FACEBOOK_URL = `${URL}nativeAuth/facebook`;
const GOOGLE_URL = `${URL}nativeAuth/google`;
export const facebookLogin = ()=>{
    return async (dispatch)=>{
        try{
             let { type, token } = await Facebook.logInWithReadPermissionsAsync('1134208830041632', {
                permissions: ['public_profile']
            });

            if (type === 'cancel') {
                console.log("facebook login fail");
                return dispatch({ type: FACEBOOK_LOGIN_FAIL });
            }
            let profile = await axios.get(`https://graph.facebook.com/me?access_token=${token}`);
            let response = await axios.post(FACEBOOK_URL,{
                profile
            });
            let stored_item = await AsyncStorage.setItem(JWT_TOKEN,response.data.token);
            dispatch({type:SET_AUTH_TOKEN,payload: response.data.token});
            Actions.logo();
        } catch(e){
            console.log("error in fb login");
            console.log(e);
        }
    }
}

export const googleLogin = ()=>{
    return async (dispatch)=>{
        try {
            const { type, user } = await Google.logInAsync({
                androidStandaloneAppClientId:'173851312683-uqg1ksqi9rr7lpgjga06c82vqkujdvh0.apps.googleusercontent.com',
                iosStandaloneAppClientId: '<IOS_CLIENT_ID>',
                androidClientId: '173851312683-uqg1ksqi9rr7lpgjga06c82vqkujdvh0.apps.googleusercontent.com',
                iosClientId: '603386649315-vp4revvrcgrcjme51ebuhbkbspl048l9.apps.googleusercontent.com',
                scopes: ['profile', 'email']
            });

            let response = await axios.post(GOOGLE_URL,{
                profile: user
            });
            let stored_item = await AsyncStorage.setItem(JWT_TOKEN,response.data.token);
            dispatch({type:SET_AUTH_TOKEN,payload: response.data.token});
            Actions.logo();
        } catch (error) {
            dispatch({type:ERROR_AUTH_TOKEN,payload:JSON.stringify(error)});
            Alert.alert(
                'gmail_err',
                'gmail authentication error',
              );
            
            console.log("google error");
            console.log(error);
        } 
    }
}

export const logout = ()=>{
    return async (dispatch)=>{
        await AsyncStorage.removeItem(JWT_TOKEN);
        dispatch({type:REMOVE_AUTH_TOKEN});
        Actions.logo();
    }
}
export const setAuthToken=()=>{
    return async (dispatch)=>{

    }
}


/*{"id":"117083328855188008858","name":"puneet mahendra","givenName":"puneet","familyName":"mahendra","photoUrl":"https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg","email":"puneet.mahendra27@gmail.com"}*/