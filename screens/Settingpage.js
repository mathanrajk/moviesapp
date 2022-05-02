import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Appbar from '../components/Appbar';

export default function Settingpage({navigation}) {
  return (
    <View>
    <Appbar menus={()=>navigation.openDrawer()} subname={"Setting"}/>

     
      
    </View>
  )
}

const styles = StyleSheet.create({})