import { StyleSheet, Text, View,Dimensions} from 'react-native'
import React from 'react'
const window_width =Dimensions.get("screen").width;
const window_height=Dimensions.get("screen").height;

export default function Videospage() {
  return (
    <View style={styles.body}>
      <View style={styles.videocontiner}> 

      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  bodt:{
    flex:1,
width:window_width,
height:window_height
  },
  videocontiner:{
    width:window_width,
    backgroundColor:"black",
    height:window_height/3.7

  }
})