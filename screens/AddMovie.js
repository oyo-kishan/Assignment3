import React ,{useState}from 'react';
import {StyleSheet, Animated, View, Alert} from 'react-native';
import {useIsFocused} from '@react-navigation/native'

import {useDispatch,useSelector} from 'react-redux';
import addMovies from '../actions/AddMovie';
import updateMovie from '../actions/UpdateMovie';



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


const AddMovie=({navigation,route})=>{

    const dispatch=useDispatch();
    const isFocussed=useIsFocused();

    const [buttonTitle,setButtonTitle]=useState("");
    
    const [movieName,setMovieName]=useState("");
    const [movieYear,setMovieYear]=useState("");
    const [movieDescription,setMovieDescription]=useState("");
    const [movieRating,setMovieRating]=useState("");
    const [movieGenre,setMovieGenre]=useState("Action");
    const[id,setId]=useState(null);

    const buttonAnimatedValue=useState(new Animated.Value(1))[0];
    const movieNameAnimation=useState(new Animated.Value(0))[0];
    const movieYearAnimation=useState(new Animated.Value(0))[0];
    const movieDescriptionAnimation=useState(new Animated.Value(0))[0];
    const movieRatingAnimation=useState(new Animated.Value(0))[0];
    const movieGenreAnimation=useState(new Animated.Value(0))[0];


    useEffect(()=>{
        if(isFocussed){
            setButtonTitle("ADD MOVIE")
        }
        if(route.params!==undefined){
            const obj=route.params;
            console.log(obj);

            setMovieName(obj.name);
            setMovieYear(obj.year);
            setMovieDescription(obj.description);
            setMovieRating(obj.rating);
            setMovieGenre(obj.genre);
            setId(obj.id);
            setButtonTitle("UPDATE MOVIE")
     }
    
    },[isFocussed]);

    const addDataToStore=()=>{
        console.log("inside ");
        console.log(id);
        if(id!==null){
            updateMovieInStore();
        }else{
            addMovieInStore();
        }

        setMovieName("")
        setMovieYear("")
        setMovieGenre("Action")
        setMovieDescription("")
        setMovieRating("")
        setId(null);
        setButtonTitle("ADD MOVIE");
        navigation.navigate("MovieList");

    }

    const addMovieInStore=()=>{
        dispatch(addMovies(
            {
                name: movieName,
                year: movieYear,
                genre: movieGenre,
                description: movieDescription,
                rating: movieRating,
                id:  movieName.toString().concat(movieRating).concat(movieGenre.toString())
            }));
            alert("Movie added successfully");
            
    }

    const updateMovieInStore=()=>{
        dispatch(updateMovie(
            {
                name: movieName,
                year: movieYear,
                genre: movieGenre,
                description: movieDescription,
                rating: movieRating,
                id: id
            }));
            
            alert("Movie updated successfully");

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
            })

          ]).start();
      },[]);


      const movieNameAnimatedStyle=makeAnimationStyle(movieNameAnimation);
      const movieYearAnimatedStyle=makeAnimationStyle(movieYearAnimation);
      const movieDescriptionAnimatedStyle=makeAnimationStyle(movieDescriptionAnimation);
      const movieRatingAnimatedStyle=makeAnimationStyle(movieRatingAnimation);
      const movieGenreAnimatedStyle=makeAnimationStyle(movieGenreAnimation);

    return (
        <View 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.root}
        >
                <AnimatedInput
                    placeholder="Movie Name"
                    onChangeText={(name)=>setMovieName(name)}
                    type="text"
                    value={movieName}
                    style={movieNameAnimatedStyle}
                />
                <AnimatedInput
                    placeholder="Movie Year"
                    onChangeText={(year)=>setMovieYear(year)}
                    type="number"
                    value={movieYear}
                    style={movieYearAnimatedStyle}
                />
                <AnimatedInput
                    placeholder="Description"
                    onChangeText={(description)=>setMovieDescription(description)}
                    type="text"
                    value={movieDescription}
                    style={movieDescriptionAnimatedStyle}
                />
                <AnimatedInput
                    placeholder="Rating"
                    onChangeText={(rating)=>setMovieRating(rating)}
                    type="number"
                    value={movieRating}
                    style={movieRatingAnimatedStyle}
                />
                    <DropDownPicker
                        items={data}
                        defaultValue={movieGenre}
                        containerStyle={styles.dropdownbox}
                        onChangeItem={(item) =>setMovieGenre(item.value)}   
                    />                
                <CustomButton
                    style={styles.button}
                    onPress={()=>{addDataToStore()}}
                    onPressIn={()=>{}}
                    onPressOut={()=>{}}
                    title={buttonTitle}
                    animatedStyle={animatedStyle}
                />
               
        </View>
        
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