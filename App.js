import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image, TextInput, TouchableOpacity} from 'react-native'

class App extends Component {
  constructor(props){
    super(props);
    //this.state = {}
  }

render() {
  return (
    <View style= {{flex: 1, alignItems: 'center', paddingHorizontal:10,backgroundColor:"pink" }}>
      
      < Image source= {require("./AssetImage/supermarket-icon-image-vector-17427358.jpeg")} style ={styles.image}/>
      <Text style= {{ fontSize: 25, padding:20}}>GROCERY</Text>
      <Text style= {{ fontSize: 15}}>Welcome Back!</Text>
      <TextInput placeholder= "Email" style= {styles.placeholder}>Email</TextInput>
      <TextInput placeholder= "Password" style= {styles.placeholder}>Password</TextInput>
      <Button title= "Forgot Password?" title="Forgot Password?" />
      <TouchableOpacity style={styles.btn} onPress={this.login}><Text>Login</Text></TouchableOpacity>
      <Text style={{margin:10}}>----------OR---------</Text>
      <Text style= {{margin:10}}>Continue With</Text>

      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <View style={{backgroundColor:'skyblue',marginLeft:50}}>
          <Button title="Facebook"/> 
          </View>
          <View style={{backgroundColor:'red',marginRight:50}}>
          <Button title="Google" />             
          </View>
      </View>
      <Text style={{margin:15}}>Don't have an account?Register here</Text>
    </View>
  )
}}
const styles= StyleSheet.create({
    TextInput:{
 },
  image:{
    height:250,
    width: 250,
    marginTop:90
  },
  placeholder:{
    margin:12,
      width:350 ,
      borderRadius:5,
      borderWidth:2 ,
      height:35 ,
      borderRadius:5,
      borderLeftColor:"white",
      borderRightColor:"white",
      borderTopColor:"white"  
  },
  btn:{
    alignSelf:'stretch',
    backgroundColor:'blue',
    padding:10,
    margin:10,
    marginLeft:100,
    marginRight:100,
    alignItems:'center'
  }
})
    

  


export default App;