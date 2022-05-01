import { StyleSheet, Text, View,Dimensions} from 'react-native'
import React from 'react'
const window_width=Dimensions.get("screen").width;
const window_height=Dimensions.get("screen").height;

export default function Appbar() {
  return (
    <View style={styles.body}>
     <View style={styles.appbarcontiner}>
         <Text style={styles.appname}>App Name</Text>
         <View style={styles.profilecontiner}></View>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    body:{
       flex:1,
       flexDirection:"row",
    width:window_width,
    height:window_height/10
      
      
    
        
    },
    appbarcontiner:{
        width:"100%",
        height:window_height/15,
        
        backgroundColor:"green",
        // justifyContent:"center",
        paddingLeft:10,
        elevation:5,
        flexDirection:"row",
        padding:10

        
        

    },
    appname:{
        color:"white",
        fontWeight:"bold",
        fontSize:23

    },
    profilecontiner:{
        backgroundColor:"white",
        width:50,
        height:50,
        borderRadius:50,
        position:"absolute",
        right:4,
        borderColor:"black",
        borderWidth:3

    }

})