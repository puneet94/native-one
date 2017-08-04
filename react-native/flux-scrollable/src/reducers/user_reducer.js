import {USER_DETAILS_RECEIVED,USER_LOCATION_RECEIVED,USER_LOCATION_ERROR} from "../actions/constants";
const INITIAL_STATE = {
	user: null,
	location: null,
	user_location_error: false
};
export const user_reducer = (state=INITIAL_STATE,action)=>{
	switch(action.type){
	case USER_DETAILS_RECEIVED:
		return {...state, user:action.payload.user};    
	case USER_LOCATION_RECEIVED:
		return {...state, location:action.payload};    
	case USER_LOCATION_ERROR:
		return {...state, user_location_error:action.payload};    
	default:
		return state;
	}
};