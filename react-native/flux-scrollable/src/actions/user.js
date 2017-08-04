import axios from 'axios';
import {URL,USER_DETAILS_RECEIVED,USER_DETAILS_ERROR,SET_AUTH_TOKEN,USER_LOCATION_RECEIVED,USER_LOCATION_ERROR} from './constants';
const USER_URL = `${URL}nativeAuth/userDetails`;
import {Actions} from 'react-native-router-flux';
import { Constants, Location, Permissions } from 'expo';
export const fetchUserDetails = (jwt_token)=>{
    
    return async (dispatch,getState)=>{
        
        try{
            let response = await axios.get(USER_URL,{
                headers:{
                    'Authorization': `Bearer ${jwt_token}`
                }
            });
            dispatch({type:SET_AUTH_TOKEN,payload: jwt_token});
            dispatch({type:USER_DETAILS_RECEIVED,payload: response.data});
            Actions.tabs();
        }catch(e){
            dispatch({type:USER_DETAILS_ERROR,payload:e});
        }       
    }
}
export const fetchUserLocationDetails = ()=>{
    
    return async (dispatch)=>{
        
        try{
            let { status } = await Permissions.askAsync(Permissions.LOCATION);
            if (status !== 'granted') {
                dispatch({type:USER_LOCATION_ERROR,payload: true});
            }else{
                let location = await Location.getCurrentPositionAsync({});
                dispatch({type:USER_LOCATION_RECEIVED,payload: location});
            }
            
        }catch(e){
            dispatch({type:USER_LOCATION_ERROR,payload: true});
        }       
    }
}