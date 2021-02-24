import React ,{useState} from 'react';
import {View,StyleSheet,FlatList} from 'react-native';

import {useSelector} from 'react-redux';
import MovieListItem from '../components/MovieListItem';

const MovieList=()=>{
    const data=useState(useSelector((state) => state.movieData.movies))[0];
    
     return (
        <View style={styles.root}>
            <FlatList
               style={styles.list}
               data={data}
               keyExtractor={(item)=>item.id}
               renderItem={(item)=><MovieListItem data={item}/>}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    root:{
        flex : 1,
        justifyContent:'center',
        alignItems:'center'
    },
    list:{
        flex : 1,
        width:"95%",
    }
})

export default MovieList;