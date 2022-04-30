import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Cardname(props) {
  return (
    <View style={styles.body}>
    <View style={styles.textcontiner}> 
 <Text style={styles.tittle}>{props.Cardname}</Text>
 <TouchableOpacity style={styles.morebutton}>
 <Text style={styles.moretext}>more</Text>
 </TouchableOpacity>
 </View>
    </View>
  )
}

const styles = StyleSheet.create({
    body:{
        flex:1,
    //    backgroundColor:"red",

    },
    textcontiner:{
        flexDirection:"row",
    paddingLeft:10,
  

    
    },
    tittle:{
        fontWeight:"bold",
        fontSize:15

    },
    morebutton:{
       
        position:"absolute",
        right:4,
       
       


    },
    moretext:{
        color:"green"
    
    }

})