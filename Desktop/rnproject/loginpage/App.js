import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image, TextInput} from 'react-native'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }

render() {
  return (
    <View style= {{flex: 1, alignItems: 'center', paddingHorizontal:10, backgroundColor:"pink" }}>
      < Image source= {require("./AssetImage/supermarket-icon-image-vector-17427358.jpeg")} style ={styles.image}/>
      <Text style= {{ fontSize: 25}}>GROCERY</Text>
      <Text style= {{ fontSize: 15}}>Welcome Back!</Text>
      <TextInput placeholder= "Email" style= {styles.placeholder}>Email</TextInput>
      <TextInput placeholder= "Password" style= {styles.placeholder}>Password</TextInput>
       <Button title= "Forgot Password?" title="Forgot Password?" />
       <Button title= "Login"/>
      <Text>----------OR---------</Text>
      <Text>Continue With</Text>
      <Button title="Facebook"  />
      <Button title="Google"  />
      <Text>Don't have an account?</Text>
    </View>
  )
}
}

const styles= StyleSheet.create({
  // container:{
  
  // },
  TextInput: {
    height: 30,
    flex: 1,
    margin: 12,
    borderWidth: 1,
    padding: 20,
    
  },
  image:{
    height: 24,
    width: 30,    
  }
  

})

export default App;