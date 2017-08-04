import axios from 'axios';

const url  = `https://petalchat-imanjithreddy.c9users.io/`;
import { Constants, Location, Permissions } from 'expo';
getLocationAsync = async () => {
        
            let { status } = await Permissions.askAsync(Permissions.LOCATION);
            if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
            }

            return  Location.getCurrentPositionAsync({});
            
  }
export const getNearbyUsers =  (page,distance) => {
    
    return async (dispatch,getState)=>{
        const {jwt_token} = getState().auth;
        let location = await getLocationAsync();
        
        const {latitude,longitude} = location.coords;
        axios.get(`${url}user/getUsers`,{
            headers:{
                    'Authorization': `Bearer ${jwt_token}`
            },params:{
            latitude,
            longitude,
            distance: distance,
            limit: 10,
			page: page,
            nearby: true
        }}).then((response)=>{
            
            dispatch({type:'NEARBY_USERS_RECEIVED',payload:{data:response.data.docs,page:page,pages:response.data.pages}});
        }).catch((err)=>{
            console.log("error in nearby");
            console.log(err);
        });
    };
}
export const getAllUsers = (page)=>{
    return (dispatch,getState)=>{
        const {jwt_token} = getState().auth;
        axios.get(`${url}user/getUsers`,{headers:{
                    'Authorization': `Bearer ${jwt_token}`
            },params:{
            limit: 10,
			page: page,
            all: true
        }}).then((response)=>{
            
            dispatch({type:'ALL_USERS_RECEIVED',payload:{data:response.data.docs,page:page,pages:response.data.pages}});
        }).catch((err)=>{
            console.log("error in all");
            console.log(err);
        });
    };
}
