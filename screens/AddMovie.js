import React from 'react';
import {StyleSheet, Animated, KeyboardAvoidingView} from 'react-native';

import CustomButton from '../components/CustomButton';
import DropDownPicker from 'react-native-dropdown-picker';
import Input from '../components/Input';


const AddMovie=()=>{

    const data = [
        {label: 'Action', value: 'Action'},
        {label: 'Comedy', value: 'Comedy'},
        {label: 'Drama',  value: 'Drama'},
      ];
      const buttonAnimatedValue=new Animated.Value(1);
      const animatedStyle={
          transform:[
              {
                  scale:buttonAnimatedValue
              }
          ]
      }

      const onPressIn=()=>{
          Animated.spring(buttonAnimatedValue,{
              toValue:.5,
              friction:2,
              tension:100,
              useNativeDriver:true
          }).start();
      }

      const onPressOut=()=>{
          Animated.spring(buttonAnimatedValue,{
              toValue:1,
              tension:20,
              friction:7,
              useNativeDriver:true
          }).start();
      }

    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.root}
        >
                <Input
                    placeholder="Movie Name"
                    onChangeText={(txt)=>{console.log(txt)}}
                    type="text"
                />
                <Input
                    placeholder="Movie Year"
                    onChangeText={(txt)=>{console.log(txt)}}
                    type="number"
                />
                <Input
                    placeholder="Description"
                    onChangeText={(txt)=>{console.log(txt)}}
                    type="text"
                />
                <Input
                    placeholder="Rating"
                    onChangeText={(txt)=>{console.log(txt)}}
                    type="number"
                />
                <DropDownPicker
                    items={data}
                    defaultValue="Action"
                    containerStyle={styles.dropdown}
                    onChangeItem={(item) =>console.log(item)}   
                />
                <CustomButton
                    style={styles.button}
                    onPressIn={()=>onPressIn()}
                    onPressOut={()=>onPressOut()}
                    title="Click me"
                    animatedStyle={animatedStyle}
                />
        </KeyboardAvoidingView>
        
    )
}



const styles=StyleSheet.create({
    root:{
        flex : 1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    dropdown:{
        height: 50,
        width:"90%",
        marginBottom:120,
    }
})

export default AddMovie;