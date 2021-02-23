import React from 'react';
import {Text,View,Button,StyleSheet} from 'react-native';


const FetchUser=()=>{
    return (
        <View style={styles.root}>
            <Button
              onPress={()=>navigation.navigate("AddMovie")}
              title="Fetch user"
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

export default FetchUser;