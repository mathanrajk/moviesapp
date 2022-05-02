import { StyleSheet, Text, View ,Dimensions,ScrollView,TouchableOpacity} from 'react-native'
import React from 'react';
import Firstcards from "../components/firstcards";
import Secondcards from '../components/Secondcard';
import Thirdcards from '../components/Thirdcards';
import Cardname from '../components/Cardname';
import Appbar from '../components/Appbar';
import Fourthcard from '../components/Fourthcards';


const window_width = Dimensions.get("screen").width;
const window_height = Dimensions.get("screen").height;

  


export default function Homepage({navigation}) {
  return (
   
      <View style={styles.body}>
        <Appbar menus={()=>navigation.openDrawer()} subname={"Home"}/>

      <ScrollView style={styles.maincontainer}>
  
 <Cardname Cardname={"Firstcards"} navifunction={()=>{navigation.navigate("Morevideos")}}/>
        
      <ScrollView horizontal={true}showsHorizontalScrollIndicator={false} >

      {
        images.map((data, index)=>(
          <TouchableOpacity key={index} onPress={()=>navigation.navigate("Video")}>
          <Firstcards  imageurl={data.image1} name={data.name} dateandtime={data.date}/>
     </TouchableOpacity>
        ))
      }
       </ScrollView>

       <Cardname Cardname={"Secondcards"}  navifunction={()=>{navigation.navigate("Morevideos")}}/>

       <ScrollView horizontal={true}showsHorizontalScrollIndicator={false} >

{
  images.map((data, index)=>(
    <TouchableOpacity key={index} onPress={()=>navigation.navigate("Video")}>
    <Secondcards  imageurl={data.image1} name={data.name} dateandtime={data.date}/>
</TouchableOpacity>
  ))
}
 </ScrollView>
 <Cardname Cardname={"Thirdcards"}  navifunction={()=>{navigation.navigate("Morevideos")}}/>
 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
 {
  images.map((data, index)=>(
    <TouchableOpacity key={index} onPress={()=>navigation.navigate("Video")}>
    <Thirdcards condcards  imageurl={data.image1} name={data.name} dateandtime={data.date}/>
</TouchableOpacity>
  ))
}
</ScrollView>
<Cardname Cardname={"Fourthcard"}  navifunction={()=>{navigation.navigate("Morevideos")}}/>
 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
 {
  images.map((data, index)=>(
    <TouchableOpacity key={index} onPress={()=>navigation.navigate("Video")}>
    <Fourthcard condcards  imageurl={data.image1} name={data.name} dateandtime={data.date}/>
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
      flexDirection:"column",
      backgroundColor:"#000"
  
    },
    maincontainer:{
      marginTop:window_height/15,
      
    }
  
  })

const images=[
    {
        image1:"https://wallpaperaccess.com/full/2113302.jpg",
        name:"siva",
        date:"Aug 10 10:00 am"

    },
    {
        image1:"https://wallpaperaccess.com/full/2113302.jpg",
        name:"siva",
        date:"Aug 10 10:00 am"
    },
    {
        image1:"https://wallpaperaccess.com/full/2113302.jpg",
        name:"siva",
        date:"Aug 10 10:00 am"

    },
    {
        image1:"https://wallpaperaccess.com/full/2113302.jpg",
        name:"siva",
        date:"Aug 10 10:00 am"
    },
    {
        image1:"https://wallpaperaccess.com/full/2113302.jpg",
        name:"siva",
        date:"Aug 10 10:00 am"
    },
    {
        image1:"https://wallpaperaccess.com/full/2113302.jpg",
        name:"siva",
        date:"Aug 10 10:00 am"
    },
    {
        image1:"https://wallpaperaccess.com/full/2113302.jpg",
        name:"siva",
        date:"Aug 10 10:00 am"
    },
    {
        image1:"https://wallpaperaccess.com/full/2113302.jpg",
        name:"siva",
        date:"Aug 10 10:00 am"
    },
  ]