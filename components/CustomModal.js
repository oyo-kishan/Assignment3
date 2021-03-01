import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';

const CustomModal=(props)=>{
    return (

        <View style={styles.root}>
            <View style={styles.modal}>
                <Text style={styles.text}>What do you want ?</Text>
                <View style={styles.buttonContainer}>

                    <TouchableOpacity onPress={()=>{props.onEditClicked()}} style={styles.button}>
                        <View style={{flex : 1,justifyContent:'center'}}>
                           <Text style={styles.buttonText}>Edit </Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{backgroundColor:'black' ,width : 1,height:45}}></View>

                    <TouchableOpacity onPress={()=>{props.onDeleteClicked()}} style={styles.button}>
                        <View style={{flex : 1,justifyContent:'center'}}>
                           <Text style={styles.buttonText}>Delete</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    root : {
        elevation:5,
        flex : 1,
        justifyContent:'center',
        alignItems:'center',
    },
    modal:{
        height:100,
        width:'80%',
        elevation:10,
        borderRadius:10,
        backgroundColor:'white',
        alignItems:'center',
        overflow:'hidden'

    },
    buttonContainer : {
        position:'absolute',
        bottom:0,
        height:45, 
        width : '100%',
        flexDirection:'row',
        overflow:'hidden',
        backgroundColor:'#f7f5f5'
     },
     text:{
         position:'absolute',
         top : 10,
         fontSize:20,
         fontWeight:'600'
     },
     button :{
         flex:1,
         justifyContent:'center',
         alignItems:'center',
     },
     buttonText:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20
    }
})

export default CustomModal;