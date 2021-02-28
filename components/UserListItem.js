import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const UserListItem = (props) => {
  const data = props.data;
  const index=props.index;

  const getBackGroundColor=()=>{
    return (index%2==0)?
    {
      backgroundColor:'#ffffff'
    }
    :{
      backgroundColor:'#f2f3f5'
    }    
  }
  return (
    <TouchableOpacity>
      <View style={[styles.root,getBackGroundColor()]}>
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.text}>
          {data.name}
        </Text>
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.text}>
          {data.email}
        </Text>
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={[styles.text, {paddingRight: 6}]}>
          {data.status}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 40,
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor:'#e1e6e8'
  },
  text: {
    width: windowWidth / 3,
    paddingLeft: 4,
    paddingRight: 4,
    textAlign: 'center',
  }
});

export default UserListItem;
