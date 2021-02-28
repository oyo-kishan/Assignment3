const initialState={
    movies : [
      {
        name : "Dark Comedy (Black Comedy)",
        year : "1998",
        genre: "Comedy",
        description: "Dark comedy (or Black Comedy) is defined by using attitudes",
        rating : "9",
        id:  "firstid"
    },
    {
        name : "the olympus has fallen",
        year : "2015",
        genre: "Action",
        description: "Olympus Has Fallen is a 2013 American action thriller "+
                      "film directed by Antoine Fuqua from a screenplay written by"+
                      "Creighton Rothenberger and Katrin Benedikt. It is the first installment in the Has Fallen film series.",
        rating : "7.9",
        id:  "secondid"
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