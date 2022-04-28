import React from 'react';
import Homepage from "./screens/Homepage";
import Videospage from "./screens/Videospage"
import { NavigationContainer, StackActions } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Homepage}/>
        <Stack.Screen  name='Video' component={Videospage}/>

       
      </Stack.Navigator>
     

    </NavigationContainer>

    
    
  )
}


