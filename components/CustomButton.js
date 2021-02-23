import React from 'react';
import {Animated, StyleSheet,Text, TouchableOpacity} from 'react-native';

const CustomButton=(props)=>{
    return (
        <Animated.View style={props.animatedStyle}>
            <TouchableOpacity 
               style={styles.button}
               onPress={()=>props.onPress()}
               onPressIn={()=>{props.onPressIn()}}
               onPressOut={()=>{props.onPressOut()}}>
             <Text style={styles.buttonTitle}>{props.title}</Text>
            
            </TouchableOpacity>
        </Animated.View>
     
    );
}


const styles=StyleSheet.create({
    
    button:{
        justifyContent:'center',
        alignItems:'center',
        width:200,
        height:50,
        backgroundColor:'black',
        borderRadius:5,
        marginTop:50,
        elevation:0
    },
    buttonTitle:{
        fontSize:22,
        fontFamily:'bold',
        color:"white"
    }
})

export default CustomButton;