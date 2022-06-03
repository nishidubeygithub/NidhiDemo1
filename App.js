import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image, TextInput, TouchableOpacity} from 'react-native'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

render() {
  return (
    
      <View style= {styles.container}>
      <Image source={require("./AssetImage/grocery.png")} style={styles.image}/>
       <Text style={{margin:20, fontSize:20}}>Welcome Back!</Text>
        <View>
           <Text style={{fontSize:15, marginLeft:50}}>Email</Text>
           <View>
         <View style={styles.emailicon}>
        <Image source={require('./AssetImage/email-icon.jpeg')} style={styles.icon} />
        <TextInput placeholder= "Email" style={styles.placeholder}></TextInput>
        </View>
        </View>
        </View>
      <View>
        <Text style={styles.password}>Password</Text>
       <View>
        <View style={{flexDirection:'row', marginLeft:10}}>
          <Image style={styles.imageText} source={require('./AssetImage/pass-icon.png')}/> 
      <TextInput placeholder= "Password" style= {styles.placeholder}></TextInput>
      <Image style={styles.eye} source={require('./AssetImage/eye-icon.png')}/>
      </View>
      </View>
      </View>
      <View style={{margin:10, paddingTop:20}}>
      <Button onPress={this.ForgotPassword} title="Forgot Password?" color="green"/>
      </View>
        <View style={styles.login}>
            <Button onPress={this.login} title="Login" color="white"/>
            </View> 
     
        <View style={{flexDirection:'row', alignItems:'center', padding:30}}>
        <View style={styles.line} />
       <View>
       <Text style={{width:50, textAlign:'center'}}>OR</Text>
       </View>
     <View style={styles.line} />
     </View>
       
      
      <Text style= {styles.continuewith}>Continue With</Text>
      <View style={styles.button}>
          <View style={styles.facebook}>
            <Image source={require('./AssetImage/facebook-icon.webp')} style={{height:50,width:50}}/>
            <Button onPress={this.facebook} title="Facebook" color="white"/>
            </View>
            
          <View style={styles.google}>
            <Image source={require('./AssetImage/google-logo.png')} style={{height:40, width:40}}/>
            <Button onPress={this.google} title= "Google" color="black"/>  
          </View>
          </View>
          <View style={{flexDirection:'row'}}>
        <Text style={styles.paragraph}>Don't have an account?</Text>
          <Text style={styles.highlight}>Register here</Text>
    </View>
    </View>
         );
  }
  }
          
const styles= StyleSheet.create({
  container:{
    alignItems:'center',
    paddingTop:20,
    paddingHorizontal: 12,
    backgroungColor: 'white'
   },
   image:{
    width:200, 
    height:50, 
    marginTop:100
   },
   emailicon:{
    flexDirection:'row',
    margin:10, 
    marginRight:30,
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
  password:{
    fontSize:15, 
    marginLeft:20, 
    padding:10
  },
  imageText:{
    width:14, 
    height:14, 
    marginTop:20
  },
  eye:{
    marginRight:5, 
    height:20, 
    width:20, 
    marginTop:26
  },
  login:{
    backgroundColor:'green', 
    height:40, 
    width:100, 
    margin:10
  },
  line:{
   flex: 1, 
   height: 1, 
   backgroundColor: 'black'
  },
 continuewith:{
   fontSize:18, 
   fontWeight:'bold', 
   margin:10
 },
  button:{
    flexDirection:'row',
    padding:20,
  },
  facebook:{
    flexDirection:'row', 
    backgroundColor:'blue',
    height:50, 
    marginBottom:10, 
    marginRight:10
  },
  icon:{
    height:20,
    width:21,
    marginTop:30,
    marginLeft:10,
    marginRight:10
   },
   google:{
    borderRadius:2,
    borderWidth:1 ,
    flexDirection:'row',
    height:50, 
    fontSize:10, 
    marginLeft:10
   },
  paragraph:{
    marginTop:18,
    fontSize:15
  },
  highlight:{
    marginTop:18,
    color:"green",
    fontSize:15
  },
}
)

export default App;
    

  


