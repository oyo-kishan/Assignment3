import React ,{useState}from 'react';
import {StyleSheet, Animated, KeyboardAvoidingView} from 'react-native';

import {useDispatch,useSelector} from 'react-redux';
import addMovies from '../actions/AddMovie';

import CustomButton from '../components/CustomButton';
import DropDownPicker from 'react-native-dropdown-picker';
import Input from '../components/Input';


const data = [
    {label: 'Action', value: 'Action'},
    {label: 'Comedy', value: 'Comedy'},
    {label: 'Drama',  value: 'Drama'},
  ];

const AddMovie=()=>{

    // const dispatch=useDispatch();
    // const [redata,setData]=useState(useSelector((state) => state.movieData.movies));

    const [movieName,setMovieName]=useState("");
    const [movieYear,setMovieYear]=useState("");
    const [movieDescription,setMovieDescription]=useState("");
    const [movieRating,setMovieRating]=useState("");
    const [movieGenre,setMovieGenre]=useState("Action");
    const buttonAnimatedValue=new Animated.Value(1);

    const addDataToStore=()=>{
        // dispatch(addMovies(
        // {
        //     name: movieName,
        //     year: movieYear,
        //     genre: movieGenre,
        //     description: movieDescription,
        //     rating: movieRating,
        //     id:  movieName.toString().concat(movieRating).concat(movieGenre.toString())
        // }));
        
    }

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
                    onChangeText={(name)=>setMovieName(name)}
                    type="text"
                />
                <Input
                    placeholder="Movie Year"
                    onChangeText={(year)=>setMovieYear(year)}
                    type="number"
                />
                <Input
                    placeholder="Description"
                    onChangeText={(description)=>setMovieDescription(description)}
                    type="text"
                />
                <Input
                    placeholder="Rating"
                    onChangeText={(rating)=>setMovieRating(rating)}
                    type="number"
                />
                <DropDownPicker
                    items={data}
                    defaultValue="Action"
                    containerStyle={styles.dropdown}
                    onChangeItem={(item) =>setMovieGenre(item.value)}   
                />
                <CustomButton
                    style={styles.button}
                    onPress={()=>{addDataToStore()}}
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
});





export default AddMovie;