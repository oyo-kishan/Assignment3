import {combineReducers} from 'redux';

import MovieReducer from './AddMovieReducer';
import AddUserInfoReducer from './AddUserInfoReducer';

const allReducers=combineReducers({
    movieData : MovieReducer,
    userData  : AddUserInfoReducer
});

export default allReducers;