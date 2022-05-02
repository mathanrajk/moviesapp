import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Appbar from '../components/Appbar';

export default function Songspage({navigation}) {
  return (
    <View>
    <Appbar menus={()=>navigation.openDrawer()} subname={"Songs"}/>

    </View>
  )
}

const styles = StyleSheet.create({})