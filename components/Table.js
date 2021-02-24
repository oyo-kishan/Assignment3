import React from 'react';
import {View,Text,FlatList,StyleSheet,Dimensions} from 'react-native';
import UserListItem from './UserListItem';

const windowWidth = Dimensions.get('window').width;


const Table = (props) => {


    const heading=props.heading;
    const data=props.data;


  return (
    <View style={styles.root}>

      <View style={styles.tableHeading}>

        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.text}>
          {heading[0]}
        </Text>

        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.text}>
          {heading[1]}
        </Text>

        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.text}>
          {heading[2]}
        </Text>

      </View>

      <View style={styles.seperator}></View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <UserListItem data={item} />}
        ItemSeparatorComponent={(item) => (<View style={styles.seperator}></View>)}
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
    text: {
      width: windowWidth / 3,
      textAlign:'center',
      paddingLeft: 4,
      paddingRight: 4,
      fontWeight: 'bold',
      fontSize: 18,
    },
  });

  

export default Table;
