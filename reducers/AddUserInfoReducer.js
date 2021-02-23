const initialState={
    users : []
}

const AddUserInfoReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_USER_INFO":
            return {
                ...state,
                users : [...state.users,...action.payload]
            }
        default : 
             return state;
    }
}

export default AddUserInfoReducer;