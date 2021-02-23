export const deleteMovies=(id)=>{
    return{
        type : "DELETE_MOVIE",
        payload : id
    }
}

export default deleteMovies;