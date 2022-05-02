import { StyleSheet, Text, View,Dimensions,ScrollView,Image} from 'react-native'
import React from 'react'
import Icons from "react-native-vector-icons/FontAwesome5";
import LinearGradient from 'react-native-linear-gradient';
const window_width = Dimensions.get("screen").width;
const window_height = Dimensions.get("screen").height;

export default function Firstcards(props) {
  return (
    
<View style={styles.box}>
  <LinearGradient style={styles.total}  colors={['rgba(0,0,0,0)','rgba(0,0,0,1)']} start={{x:0,y:0}} end={{x: 0, y:1}} >     
      <Icons style={styles.icons} name={"play"} size={20} color={"white"}/> 
      <Text style={styles.moviename}>{props.name}</Text>
      <Text style={styles.date}>{props.dateandtime}</Text>

</LinearGradient>  
<Image style={styles.image} source={{uri:props.imageurl}} resizeMode="cover"/>

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
        width:window_width/2.5,
        height:window_height/3.8,
        backgroundColor:"green",
        marginLeft:5,
        marginTop:10,
        borderRadius:10,
        overflow:"hidden",
        
        

    },
    image:{
        width:"100%",
        height:"100%",
    },
    moviename:{
      color:"white",
      fontSize:20,
      left:30,
      fontWeight:"bold"
     
      
      
     
    },
    total:{
      position:"absolute",
      zIndex:100,
      bottom:-1,
      width:"100%",
      flexDirection:"row",
      paddingVertical:30
    
      
     
     
    },
    icons:{
      top:5,
      left:10,
    },
    date:{
      color:"white",
      position:"absolute",
      bottom:10,
      left:35,

    }
})

