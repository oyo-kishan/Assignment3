import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const MovieListItem = (props) => {
  const data = props.data;

  return (
    <TouchableOpacity>
      <View style={styles.root}>

        <View style={styles.firstsubroot}>
          <View style={styles.icon}>
            <Text style={styles.rating}>{data.rating}</Text>
          </View>
          <Text style={styles.movieyear}>{data.year}</Text>
        </View>

        <View style={styles.secondsubroot}>

          <View style={styles.secondsubfirstroot}>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              includeFontPadding={false}
              style={styles.moviename}>
              {data.name}
            </Text>
          </View>

          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            style={styles.description}>
            {data.description}
          </Text>

        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    marginTop: 8,
    borderRadius: 5,
    elevation: 3,
  },
  firstsubroot: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  secondsubroot: {
    flex: 8,
  },
  secondsubfirstroot: {},
  icon: {
    height: 50,
    width: 50,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    borderRadius: 5,
  },
  rating: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  moviename: {
    fontSize: 22,
    marginTop: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    marginRight: 8,
  },
  movieyear: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginLeft: 8,
    marginRight:8,
    marginTop: 0,
  },
});

export default MovieListItem;
