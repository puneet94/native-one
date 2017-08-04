const INITIAL_STATE = {
    all: {
        chats: [],
        chats_loading: true,
        chats_received: false,
    },
    revealed: {
        chats: [],
        chats_loading: true,
        chats_received: false,

    },
    groups:  {
        chats: [],
        chats_loading: true,
        chats_received: false,

    } 
}
export const chats_reducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'ALL_CHATS_RECEIVED':
            if(action.payload.page==1){
                return {...state, all:{...state.all,chats:[...action.payload.data]}};    
            }
            return {...state, all:{...state.all,chats:[...state.all.chats,...action.payload.data]}};
        case 'REVEALED_CHATS_RECEIVED':
            if(action.payload.page==1){
                return {...state, revealed:{...state.revealed,chats:[...action.payload.data]}};    
            }
            return {...state, revealed:{...state.revealed,chats:[...state.revealed.chats,...action.payload.data]}};
        case 'GROUPS_CHATS_RECEIVED':
            if(action.payload.page==1){
                return {...state, groups:{...state.groups,chats:[...action.payload.data]}};    
            }
            return {...state, groups:{...state.groups,chats:[...state.groups.chats,...action.payload.data]}};
        
        default:
            return state;
    }
}