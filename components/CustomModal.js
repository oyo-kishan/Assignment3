import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';

const CustomModal=(props)=>{
    return (
        <View style={styles.root}>
            <View style={styles.modal}>

                <TouchableOpacity onPress={()=>{props.onEditClicked()}}>
                    <View style={[styles.button,{marginTop:4}]}>
                        <Text style={styles.buttontext}>Edit Item</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{props.onDeleteClicked()}}>
                    <View style={[styles.button,{marginTop:10}]}>
                            <Text style={styles.buttontext}>Delete Item</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{props.onNoneClicked()}}>
                    <View style={[styles.button,{marginTop:10}]}>
                            <Text style={styles.buttontext}>None</Text>
                    </View>
                </TouchableOpacity>
                
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
        height:240,
        width:'80%',
        elevation:10,
        borderRadius:5,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        height:50,
        backgroundColor:"skyblue",
        padding:12,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    buttontext : {
        width:220,
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center'
    }
})

export default CustomModal;