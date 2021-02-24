import React from 'react';
import {View,Text,FlatList,StyleSheet,Dimensions, TouchableOpacity} from 'react-native';
import UserListItem from './UserListItem';
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';


const windowWidth = Dimensions.get('window').width;


const Table = (props) => {


    const heading=props.heading;
    const data=props.data;


  return (
    <View style={styles.root}>

      <View style={styles.tableHeading}>

        <TouchableOpacity  
            onPress={()=>{props.sortByName()}}
            style={styles.sortButton}>
            <Text style={styles.text} >{heading[0]}</Text>
            <FontAwesome5 name="sort" size={18} color="#000000"/>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={()=>{props.sortByEmail()}}
          style={styles.sortButton}>
           <Text style={styles.text}>{heading[1]}</Text>
           <FontAwesome5 name="sort" size={18} color="#000000"/>
        </TouchableOpacity>
        
        
        <TouchableOpacity style={styles.sortButton}>
           <Text style={styles.text}>{heading[2]}</Text>
        </TouchableOpacity>

        

       

      </View>

      <View style={styles.seperator}></View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <UserListItem data={item} />}
        ItemSeparatorComponent={(item) => (<View style={styles.seperator}></View>)}
        getItemLayout={(data,index)=>({length:50,offset:50*index,index})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    root: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    seperator: {
      width: '100%',
      height: 1,
      backgroundColor: 'rgba(0,0,0,0.1)',
    },
    tableHeading: {
      height: 40,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    sortButton:{
      flex : 1,
      flexDirection:'row',
      width:windowWidth/3,
      height:"100%",
      justifyContent:'center',
      alignItems:'center'
    },
    text: {
      fontWeight: 'bold',
      fontSize: 18,
      paddingRight:5
    },
  });

  

export default Table;
