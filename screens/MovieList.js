import React ,{useState} from 'react';
import {View,StyleSheet,FlatList,Modal} from 'react-native';

import {useSelector,useDispatch} from 'react-redux';
import MovieListItem from '../components/MovieListItem';
import CustomModal from '../components/CustomModal'
import deleteMovies from '../actions/DeleteMovie';

const MovieList=({navigation})=>{

    const dispatch=useDispatch();
    let data=useSelector(state => state.movieData.movies);
    const [modalVisible,setModalVisible]=useState(false);
    const [selectedIndex,setSelectedIndex]=useState(-1);

    const onMovieItemClicked=(index)=>{
       setSelectedIndex(index);
       setModalVisible(true);
    }

    const editItem=()=>{
        setModalVisible(false);
        navigation.navigate("AddMovie",data[selectedIndex]);
    }

    const deleteItem=()=>{
        setModalVisible(false);
        dispatch(deleteMovies(data[selectedIndex].id));
    }

    
     return (
        <View style={styles.root}>
            <Modal
              visible={modalVisible}
              animationType='fade'
              hardwareAccelerated={true}
              transparent={true}
              onRequestClose={()=>{setModalVisible(false)}}>

              <CustomModal
                 onEditClicked={()=>{editItem()}}
                 onDeleteClicked={()=>{deleteItem()}}
                 onNoneClicked={()=>{setModalVisible(false)}}
              />
            </Modal>

            <FlatList
               style={styles.list}
               data={data}
               keyExtractor={(item)=>item.id}
               renderItem={({item,index})=>{
                   return <MovieListItem  
                       data={item}
                       index={index}
                       onPress={(index)=>onMovieItemClicked(index)}/>
                    }
                }
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