const INITIAL_STATE = {
	latest: {
		posts: [],
		pages: 0,
		posts_loading: true,
		posts_received: false,
	},
	popular: {
		posts: [],
		pages: 0,
		posts_loading: true,
		posts_received: false,

	},
	nearby:  {
		posts: [],
		pages: 0,
		posts_loading: true,
		posts_received: false,

	} 
};
export const posts_reducer = (state=INITIAL_STATE,action)=>{
	switch(action.type){
		case 'LATEST_POSTS_RECEIVED':
			if(action.payload.page==1){
				return {...state, latest:{...state.latest,posts:[...action.payload.data],pages:action.payload.pages}};    
			}
			return {...state, latest:{...state.latest,posts:[...state.latest.posts,...action.payload.data],pages:action.payload.pages}};
		case 'POPULAR_POSTS_RECEIVED':
			if(action.payload.page==1){
				return {...state, popular:{...state.popular,posts:[...action.payload.data],pages:action.payload.pages}};    
			}
			return {...state, popular:{...state.popular,posts:[...state.popular.posts,...action.payload.data],pages:action.payload.pages}};
		case 'NEARBY_POSTS_RECEIVED':
			if(action.payload.page==1){
				return {...state, nearby:{...state.nearby,posts:[...action.payload.data],pages:action.payload.pages}};    
			}
			return {...state, nearby:{...state.nearby,posts:[...state.nearby.posts,...action.payload.data],pages:action.payload.pages}};
		
		default:
			return state;
	}
}