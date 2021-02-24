import React ,{useState} from 'react';
import { useEffect } from 'react';
import {View,StyleSheet,FlatList} from 'react-native';

import {useSelector} from 'react-redux';
import MovieListItem from '../components/MovieListItem';

const MovieList=()=>{

    const [data,setData]=useState(useSelector((state) => state.movieData.movies));
    
     return (
        <View style={styles.root}>
            <FlatList
               style={styles.list}
               data={data}
               keyExtractor={(item)=>item.id}
               renderItem={({item})=><MovieListItem data={item}/>}
               ItemSeparatorComponent={(item) => (<View style={styles.seperator}></View>)}
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
        width:"100%",
        marginTop:8
    },
    seperator: {
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(0,0,0,0.1)',
      },
})

export default MovieList;