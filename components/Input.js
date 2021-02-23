import React from 'react';
import {TextInput,StyleSheet,View} from 'react-native';


const Input=(props)=>{
    return (
        <TextInput style={styles.input}
            placeholder={props.placeholder}
            onChangeText={(txt)=>{props.onChangeText(txt)}}
            selectionColor="black"
            keyboardType={props.type==="number"?'numeric':'default'}
        />
    );
}

const styles=StyleSheet.create({

    input:{
        height:50,
        width:'90%',
        borderWidth:1,
        borderRadius:5,
        paddingLeft:20,
        marginLeft:20,
        marginRight:20,
        marginBottom:20
    }
})

export default Input;

