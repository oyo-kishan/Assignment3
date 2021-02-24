import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';

import { Provider } from 'react-redux';
import allReducer from './reducers/RootReducer';
import { createStore ,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {logger} from 'redux-logger';

import AddMovie from './screens/AddMovie';
import MovieList from './screens/MovieList';
import FetchUser from './screens/FetchUser';

const Tab = createBottomTabNavigator();
const store = createStore(allReducer,composeWithDevTools(applyMiddleware(logger)));

const App=()=>{

  return (
    
    <Provider store={store}>
      <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  if (route.name === 'AddMovie') {
                    iconName = "plus"
                  } 
                  else if (route.name === 'MovieList') {
                    iconName = "list"
                  }
                  else if (route.name === 'FetchUser') {
                    iconName = "users"
                  }
                  return  <FontAwesome5 name={iconName} size={22} color={focused?'#000000':'gray'} />;
                },
              })}

              tabBarOptions={{
                activeTintColor: '#000000',
                inactiveTintColor: 'gray',
                
              }}
            >
              <Tab.Screen name="AddMovie" component={AddMovie} />
              <Tab.Screen name="MovieList" component={MovieList} />
              <Tab.Screen name="FetchUser" component={FetchUser} />
              
            </Tab.Navigator>

          </NavigationContainer>
    </Provider>
    
  );
}

export default App;