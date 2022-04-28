import { StyleSheet, Text, View,Dimensions,ScrollView,Image} from 'react-native'
import React from 'react'
const window_width = Dimensions.get("screen").width;
const window_height = Dimensions.get("screen").height;

export default function Secondcards(props) {
  return (
    
<View style={styles.box}>
            
<Image style={styles.image} source={{uri:props.imageurl}}/>
</View>

  
  )
}

const styles = StyleSheet.create({
    body:{
        width:window_width,
        height:window_height/3.5,
        backgroundColor:"red",
        marginTop:10,
        paddingLeft:5

    },
    box:{
        width:window_width/2,
        height:window_height/5,
        backgroundColor:"green",
        marginLeft:5,
        marginTop:10,
        borderRadius:10,
        overflow:"hidden",
        
        

    },
    image:{
        width:"100%",
        height:"100%",
    }
})

