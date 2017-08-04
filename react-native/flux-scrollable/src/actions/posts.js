import axios from 'axios';

const url  = `https://petalchat-imanjithreddy.c9users.io/`;
import { Constants, Location, Permissions } from 'expo';
export const getLatestPosts = (page)=>{
    return (dispatch,getState)=>{
        const {jwt_token} = getState().auth;
        axios.get(`${url}post/getPosts`,{
            headers:{
                    'Authorization': `Bearer ${jwt_token}`
            },
            params:{
            sort: '-time',
            limit: 5,
			page: page
        }}).then((response)=>{
            dispatch({type:'LATEST_POSTS_RECEIVED',payload:{data:response.data.docs,page:page,pages:response.data.pages}});
        });
    };
}
getLocationAsync = async () => {
            let { status } = await Permissions.askAsync(Permissions.LOCATION);
            if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
            }

            return  Location.getCurrentPositionAsync({});
            
  }
export const getNearbyPosts =  (page) => {
    
    return async (dispatch,getState)=>{
        var location;
        try{
            const {jwt_token} = getState().auth;
            if(!getState().user.user_location_error){
                location = getState().user.location;
            }else{
                location = await getLocationAsync();
            }
            const {latitude,longitude} = location.coords;
            let response = await axios.get(`${url}post/getPosts`,{
                headers:{
                        'Authorization': `Bearer ${jwt_token}`
                },
                params:{
                    latitude,
                    longitude,
                    distance: 10,
                    limit: 5,
                    page: page
            }});
            dispatch({type:'NEARBY_POSTS_RECEIVED',payload:{data:response.data.docs,page:page,pages:response.data.pages}});
        }catch(e){
            console.log("nearby posts error");
            console.log(e);
        }
        
    };
}
export const getPopularPosts = (page)=>{
    return (dispatch,getState)=>{
        const {jwt_token} = getState().auth;
        axios.get(`${url}post/getPosts`,{
            headers:{
                    'Authorization': `Bearer ${jwt_token}`
            },params:{
            sort: '-upvotesLength',
            limit: 5,
			page: page
        }}).then((response)=>{
            
            dispatch({type:'POPULAR_POSTS_RECEIVED',payload:{data:response.data.docs,page:page,pages:response.data.pages}});
        });
    };
}
