import React from 'react';
import {TextInput,StyleSheet,View} from 'react-native';


export default class CustomInput extends React.Component{
    render(){
        return (
             <TextInput
                    value={this.props.value}
                    style={[styles.input,this.props.style]}
                    placeholder={this.props.placeholder}
                    onChangeText={(txt)=>{this.props.onChangeText(txt)}}
                    selectionColor="black"
                    keyboardType={this.props.type==="number"?'numeric':'default'}
                />
        )
    }
}

const styles=StyleSheet.create({

    input:{
        height:50,
        width:'90%',
        borderWidth:2,
        borderRadius:4,
        paddingLeft:20,
        marginLeft:20,
        marginRight:20,
        marginBottom:20
    }
})


