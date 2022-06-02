import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image, TextInput, TouchableOpacity} from 'react-native'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

render() {
  return (
    
      <View style= {styles.View}>
      <Image source={require("./AssetImage/grocery.png")} style={{width:200, height:50, marginTop:100}}/>
       <Text style={{margin:20, fontSize:20}}>Welcome Back!</Text>
        <View>
           <Text style={{fontSize:15, marginLeft:60}}>Email</Text>
           <View>
         <View style={{flexDirection:'row',margin:10}}>
        <Image style={styles.icon} source={require('./AssetImage/email-icon.jpeg')}/>
        <TextInput placeholder= "Email" style={styles.placeholder}></TextInput>
        </View>
        </View>
        </View>
      <View>
        <Text style={{fontSize:15, marginLeft:20}}>Password</Text>
       <View>
        <View style={{flexDirection:'row'}}>
          <Image style={{width:14.45, height:14, marginTop:20}} source={require('./AssetImage/pass-icon.png')}/> 
      <TextInput placeholder= "Password" style= {styles.placeholder}></TextInput>
      <Image style={{marginRight:5, height:20, width:20, marginTop:26}} source={require('./AssetImage/eye-icon.png')}/>
      </View>
      </View>
      </View>
      <View style={{margin:10, paddingTop:10}}>
      <Button onPress={this.ForgotPassword} title="Forgot Password?" color="green"/>
      </View>
        <View style={{backgroundColor:'green', height:40, width:100}}>
            <Button onPress={this.login} title="Login" color="white"/>
            </View> 
     
        <View style={{flexDirection: 'row', alignItems: 'center', padding:20}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
       <View>
       <Text style={{width: 50, textAlign: 'center'}}>OR</Text>
       </View>
     <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
     </View>
       
      
      <Text style= {{fontSize:18, fontWeight:'bold', borderRadius:5, margin:10}}>Continue With</Text>
      <View style={styles.button}>
          <View style={{flexDirection:'row', backgroundColor:'blue',height:50, marginBottom:10, marginRight:10}}>
            <Image source={require('./AssetImage/facebook-icon.webp')} style={{height:50,width:50}}/>
            <Button onPress={this.facebook} title="Facebook" color="white"/>
            </View>
            
          <View style={{borderRadius:2,borderWidth:1 ,flexDirection:'row',height:50, fontSize:10, marginLeft:10}}>
            <Image source={require('./AssetImage/google-logo.png')} style={{height:40, width:40}}/>
            <Button onPress={this.google} title= "Google" color="black"/>  
          </View>
          </View>
          <View style={{flexDirection: 'row'}} >
        <Text style={styles.bottomline}>Don't have an account?</Text>
        <Text style={styles.bottomlineGreen}>Register here</Text>
        </View>
        </View>
      
  );
            }
          }
const styles= StyleSheet.create({
  View:{
    alignItems:'center',
    paddingTop:20,
    paddingHorizontal: 12,
    backgroungColor: 'white',
   },
  placeholder:{
    margin:1,
    marginTop:12,
      width:350 ,
      borderRadius:2,
      borderWidth:1 ,
      height:35 ,
      borderLeftColor:"white",
      borderRightColor:"white",
      borderTopColor:"white"  
   },
   button:{
    flexDirection:'row',
    padding:10,
  },
  icon:{
    height:20,
    width:21,
    marginTop:30,
    marginLeft:10,
    marginRight:10
   },
  bottomline:{
    marginTop:25,
    fontSize:15
  },
  bottomlineGreen:{
    marginTop:25,
    color:"green",
    fontSize:15
  },
}
)

export default App;
    

  


