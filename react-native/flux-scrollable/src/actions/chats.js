import axios from 'axios';

import {ALL_CHATS_RECEIVED,REVEALED_CHATS_RECEIVED,GROUPS_CHATS_RECEIVED,URL} from './constants';

export const getAllChats = (page) => {
	return async (dispatch,getState)=>{
		const {jwt_token} = getState().auth;
		let response  = await axios.get(`${URL}chatRoom/all`,{
			headers:{
				'Authorization': `Bearer ${jwt_token}`
			},
			params:{
				limit: 10,
				page: page
		}});
		dispatch({type:ALL_CHATS_RECEIVED,payload:{data:response.data.docs,page:page,pages:response.data.pages}});
		
	};
}

export const getRevealedChats = (page)=>{
	return async (dispatch,getState)=>{
		const {jwt_token} = getState().auth;
		let response = await axios.get(`${URL}chatRoom/all`,{
			headers:{
					'Authorization': `Bearer ${jwt_token}`
			},params:{
			revealed: true,
			limit: 10,
			page: page
		}});
		
		dispatch({type:REVEALED_CHATS_RECEIVED,payload:{data:response.data.docs,page:page,pages:response.data.pages}});
		
	};
}


export const getGroupChats = (page)=>{
	return async (dispatch,getState)=>{
		const {jwt_token} = getState().auth;
		let response  = await axios.get(`${URL}messageRoom/getRooms`,{
			headers:{
					'Authorization': `Bearer ${jwt_token}`
			},params:{
			limit: 10,
			page: page
		}});
		
		dispatch({type:GROUPS_CHATS_RECEIVED,payload:{data:response.data.docs,page:page,pages:response.data.pages}});
		
	};
}

