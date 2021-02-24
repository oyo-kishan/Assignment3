import React ,{useState}from 'react';
import {StyleSheet, Animated, KeyboardAvoidingView, Alert} from 'react-native';

import {useDispatch,useSelector} from 'react-redux';
import addMovies from '../actions/AddMovie';

import CustomButton from '../components/CustomButton';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomInput from '../components/Input';
import { useEffect } from 'react';


const AnimatedInput=Animated.createAnimatedComponent(CustomInput);

const data = [
    {label: 'Action', value: 'Action'},
    {label: 'Comedy', value: 'Comedy'},
    {label: 'Drama',  value: 'Drama'},
  ];





const AddMovie=()=>{

    const dispatch=useDispatch();
    const [redata,setData]=useState(useSelector((state) => state.movieData.movies));

    const [movieName,setMovieName]=useState("");
    const [movieYear,setMovieYear]=useState("");
    const [movieDescription,setMovieDescription]=useState("");
    const [movieRating,setMovieRating]=useState("");
    const [movieGenre,setMovieGenre]=useState("Action");

    const buttonAnimatedValue=useState(new Animated.Value(1))[0];
    const movieNameAnimation=useState(new Animated.Value(0))[0];
    const movieYearAnimation=useState(new Animated.Value(0))[0];
    const movieDescriptionAnimation=useState(new Animated.Value(0))[0];
    const movieRatingAnimation=useState(new Animated.Value(0))[0];
    const movieGenreAnimation=useState(new Animated.Value(0))[0];


    const addDataToStore=()=>{
        dispatch(addMovies(
        {
            name: movieName,
            year: movieYear,
            genre: movieGenre,
            description: movieDescription,
            rating: movieRating,
            id:  movieName.toString().concat(movieRating).concat(movieGenre.toString())
        }));
        console.log("Action dispatched");
        alert("Action dispatched");
    }

    const animatedStyle={
          transform:[
              {
                  scale:buttonAnimatedValue
              }
          ]
      }

    const makeAnimationStyle=(animation)=>{

    const translate=animation.interpolate({
        inputRange:[0,1],
        outputRange:[-10,0]
    })
    return {
        transform:[
            {
                translateY:translate
            }
        ],
        opacity:animation
    }
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


      useEffect(()=>{
          Animated.stagger(100,[
              Animated.timing(movieNameAnimation,{
                  toValue:1,
                  duration:200,
                  useNativeDriver:true
              }),
              Animated.timing(movieYearAnimation,{
                toValue:1,
                duration:200,
                useNativeDriver:true,
            }),
            Animated.timing(movieDescriptionAnimation,{
                toValue:1,
                duration:200,
                useNativeDriver:true,
            }),
            Animated.timing(movieRatingAnimation,{
                toValue:1,
                duration:200,
                useNativeDriver:true
            }),
            // Animated.timing(movieGenreAnimation,{
            //     toValue:1,
            //     duration:200,
            //     useNativeDriver:true
            // })
          ]).start();
      },[]);

    
      const movieNameAnimatedStyle=makeAnimationStyle(movieNameAnimation);
      const movieYearAnimatedStyle=makeAnimationStyle(movieYearAnimation);
      const movieDescriptionAnimatedStyle=makeAnimationStyle(movieDescriptionAnimation);
      const movieRatingAnimatedStyle=makeAnimationStyle(movieRatingAnimation);
      const movieGenreAnimatedStyle=makeAnimationStyle(movieGenreAnimation);

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.root}
        >
                <AnimatedInput
                    placeholder="Movie Name"
                    onChangeText={(name)=>setMovieName(name)}
                    type="text"
                    style={movieNameAnimatedStyle}
                />
                <AnimatedInput
                    placeholder="Movie Year"
                    onChangeText={(year)=>setMovieYear(year)}
                    type="number"
                    style={movieYearAnimatedStyle}
                />
                <AnimatedInput
                    placeholder="Description"
                    onChangeText={(description)=>setMovieDescription(description)}
                    type="text"
                    style={movieDescriptionAnimatedStyle}
                />
                <AnimatedInput
                    placeholder="Rating"
                    onChangeText={(rating)=>setMovieRating(rating)}
                    type="number"
                    style={movieRatingAnimatedStyle}
                />
                    <DropDownPicker
                        items={data}
                        defaultValue="Action"
                        containerStyle={styles.dropdownbox}
                        onChangeItem={(item) =>setMovieGenre(item.value)}   
                    />                
                <CustomButton
                    style={styles.button}
                    onPress={()=>{addDataToStore()}}
                    onPressIn={()=>{}}
                    onPressOut={()=>{}}
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
    dropdownbox:{
        height: 50,
        width:"90%",
        marginBottom:120,
    }
    , dropdown:{
        height: 50,
        width:"100%",
    }
});


export default AddMovie;