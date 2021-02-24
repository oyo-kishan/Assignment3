const initialState={
    movies : [
      {
        name : "Dark Comedy (Black Comedy)",
        year : "1998",
        genre: "Comedy",
        description: "Dark comedy (or Black Comedy) is defined by using attitudes",
        rating : "9",
        id:  "ididididid"
    }
]
}

const MovieReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_MOVIE":
            return {
                ...state,
                movies : [...state.movies,action.payload]
            }

        case "DELETE_MOVIE":
            return {
                ...state,
                movies : [...state.movies.filter((item)=>item.id!==action.payload)]
            }
            
        case "UPDATE_MOVIE":{
           const index=state.movies.findIndex((item)=>item.id===action.payload.id);
           const copy=[...state.movies];
           copy[index]=action.payload
            return {
                ...state,
                movies:copy
            }
        }
        
        default : 
             return state;
    }
}

export default MovieReducer;