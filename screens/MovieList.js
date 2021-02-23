import React from 'react';
import {Text,View,Button,StyleSheet} from 'react-native';


const MovieList=()=>{
    return (
        <View style={styles.root}>
            <Button
              onPress={()=>navigation.navigate("FetchUser")}
              title="Movie list"
            />
        </View>
    )
}

const styles=StyleSheet.create({
    root:{
        flex : 1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default MovieList;