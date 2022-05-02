import React from 'react';
import Homepage from "./screens/Homepage";
import Videospage from "./screens/Videospage";
import Songspage from './screens/Songspage';
import Advancevideopage from './screens/Advancevideopage';
import Settingpage from './screens/Settingpage';
import Langagespage from './screens/langagespage';
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/SimpleLineIcons"
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack=createNativeStackNavigator();
const  Tab =createMaterialBottomTabNavigator();
const Drawer =createDrawerNavigator();

function Drawernavi(){
  return(
    <Drawer.Navigator initialRouteName='Home' inactiveColor="white" backgroundColor="green">
      <Drawer.Screen name='Home' component={Homepage} options={{headerShown:false}}/>
      <Drawer.Screen name='Languages' component={Langagespage} options={{
       
      }}/>

    </Drawer.Navigator>
  );
}


function Tabnavi() {
  return (
    <Tab.Navigator barStyle={{
      backgroundColor:"green",


   
  }} activeColor={"white"} inactiveColor={"black"}>
      <Tab.Screen name="Drawer" component={Drawernavi} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color,focused }) => (
            <Icons name="home-outline" color={color} size={26} />
          ),
         
        }} />
      <Tab.Screen name="Songs" component={Songspage} options={{
          tabBarLabel: 'Songs',
          tabBarIcon: ({ color }) => (
            <Icons name="music-box" color={color} size={26} />
          ),
          
        }} />
        <Tab.Screen name="Setting" component={Settingpage} options={{
          tabBarLabel: 'Songs',
          tabBarIcon: ({ color }) => (
            <Icon name="settings" color={color} size={24} />
          ),
          
        }} />
    </Tab.Navigator>
  );
}




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Homes' component={Tabnavi} options={{headerShown:false}}/>
        <Stack.Screen  name='Video' component={Videospage}/>
        <Stack.Screen name='Morevideos' component={Advancevideopage}/>
        <Stack.Screen name='Songs' component={Songspage}/>
     </Stack.Navigator>
   </NavigationContainer>

    
    
  )
}


