import { StyleSheet, Text, View,Dimensions,TouchableOpacity} from 'react-native'
import React from 'react';
import Icons from "react-native-vector-icons/MaterialIcons"

const window_width=Dimensions.get("screen").width;
const window_height=Dimensions.get("screen").height;

export default function Appbar(props) {
  return (
    <View style={styles.body}>
     <View style={styles.appbarcontiner}>
         <TouchableOpacity  style={styles.menutouch}  onPress={props.menus} >
         <Icons name="menu" color={"#fff"} size={35}/>
         </TouchableOpacity>
         <View>
         <Text style={styles.appname}>App Name</Text>
         <Text style={styles.subname} >{props.subname}</Text>
         </View>
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
        fontSize:23,
        left:10

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

    },
    menutouch:{
        zIndex:100,

    },
    subname:{
        color:"white",
        position:"absolute",
        bottom:-10,
        left:10

    }
    

})