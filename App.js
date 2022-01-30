import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



const friends=[
  {name:"Md Sohel", Occupation:"Backend Developer ", Address:"Bogoda"},
  {name:"Md Zahidul Haque", Occupation:"Front End Developer ", Address:"Developer"},
  {name:"MD Mahin", Occupation:"Front End Developer ", Address:"Dhaka"},
  {name:"Md Junaid", Occupation:"Backend Developer ", Address:"Chittagong"},
]
export default function App() {
 const list=()=>{
   
  return   friends.map((friend,index)=>{
    return (
      <View key={index}>
      <Text style={{color:"white",marginBottom:10}}>{friend.name}</Text>
    </View>
     )
    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>hello! first native app</Text>
      
  <View style={styles.list}>{list()}</View>
   

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'white',
    color:"red",
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  textStyle:{
    fontSize:30,
    fontWeight:"700",
    color:"tomato",
    // margin:-20
  },
  list:{
  color:'white',
  backgroundColor:'tomato',
  padding:20,
  borderRadius:20

  }
});
