import { StyleSheet, Text, View ,Dimensions,ScrollView,TouchableOpacity} from 'react-native'
import React from 'react';
import Firstcards from "../components/firstcards";
import Secondcards from '../components/Secondcard';
const window_width = Dimensions.get("screen").width;
const window_height = Dimensions.get("screen").height;

export default function Homepage({navigation}) {
  return (
   
      <View style={styles.body}>
      <ScrollView>
      <ScrollView horizontal={true}showsHorizontalScrollIndicator={false} >

      {
        images.map((data, index)=>(
          <TouchableOpacity key={index} onPress={()=>navigation.navigate("Video")}>
          <Firstcards  imageurl={data.image1}/>
     </TouchableOpacity>
        ))
      }
       </ScrollView>

       <Text>Secondcard</Text>

       <ScrollView horizontal={true}showsHorizontalScrollIndicator={false} >

{
  images.map((data, index)=>(
    <TouchableOpacity key={index} onPress={()=>navigation.navigate("Video")}>
    <Secondcards  imageurl={data.image1}/>
</TouchableOpacity>
  ))
}
 </ScrollView>

      </ScrollView>
     
     
    </View>
   
  )
}

const styles = StyleSheet.create({
    body: {
      flex: 1,
      width:window_width,
      height: window_height,
  
    }
  
  })

const images=[
    {
        image1:"https://wallpaperaccess.com/full/2113302.jpg"
    },
    {
        image1:"https://wallpaperaccess.com/full/2113302.jpg"
    },
    {
        image1:"https://wallpaperaccess.com/full/2113302.jpg"
    },
    {
        image1:"https://wallpaperaccess.com/full/2113302.jpg"
    },
    {
        image1:"https://wallpaperaccess.com/full/2113302.jpg"
    },
    {
        image1:"https://wallpaperaccess.com/full/2113302.jpg"
    },
    {
        image1:"https://wallpaperaccess.com/full/2113302.jpg"
    },
    {
        image1:"https://wallpaperaccess.com/full/2113302.jpg"
    },
  ]