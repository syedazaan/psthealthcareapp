import { Input } from 'native-base/lib/typescript/src';
import React from 'react';
import { StyleSheet, Text, View,  Image, unArray,pwArray, ImageBackground, TextInput, KeyBoardAvoidingView,  AsyncStorage, TouchableOpacity, } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';  
import { login } from '../constants';


export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        username: ' ',
        password: ' ',
  }
};


  
  // constructor(props) {
    // super(props);
    // this.state = {
      // data:data,
      // paidView:true,
      // backgroundColor:'white',
    // };

      //   _submitForm = () => {
        
      // }; 

  render( )  {

    console.log("login", login.length  );
    // for(let i=0; i<=2; i++  )
    //const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat',]
   const email = this.state.username
   const pass = this.state.password


   for (let index = 0; index < login.length; index++) {
    const element = login[index].email ;
    const element2 =  login[index].password;
     //let test= element.localeCompare(email);
     //console.log()
     if( (element ==  login[index].email)  &&  (element2 ==  login[index].password) ){
      console.log("login successful \n" , "email :" , element , "\npass :" , element2) ;
     
     }
      
       else
       console.log("login failed");
       
    
    // const element = login[index].pass ;
    console.log(element, "login") ; 
} 
      
 
            
              
                 
          
           

        // onPress={thisstate.navigation.navigate("Dashboard", )}
    return (
      <View style= {styles.mcontainer}>
              <ImageBackground
                    style={{flex:1,}}
                    source={require('../images/img1.jpg')}
               >


      <View style= {styles.container}>



        <View style={styles.header}> 
            <View style={styles.signinblock}>
                <Text style={styles.signinblock1}>Sign In To</Text>    
            </View>
            <View style={styles.youraccountblock}>
                <Text style={styles.youraccountblock1}>Your Account</Text>
            </View>
        </View> 
     
     <View style={styles.pleaseblock}>
        <Text style={styles.pleaseblock1}>Please sign in to enter in a app</Text>
     </View>

        <View style={styles.loginblock}> 
            <View style={styles.emailblock}>
              <View style={styles.emailaddressblock}>
                <Text style={styles.emailaddressblock1}>Email Address</Text>
              </View>
              <View style={styles.inputaddressblock}>
                <TextInput 
                      placeholder= "abc"
                      value={this.state.username}
                      // value={this.state.username}
                      // onChangeText={e => this.setState({username:e})}
                      // onChangeText={e=> this.setState({
                      //   username: e
                      //     })}
                      // onSubmitEditing={this.state.username}
                      style={styles.texinput1} 
                />
                </View>
            </View>
           
            <View style={styles.passblock}>
            <View style={styles.passwordblock}>
              <Text style={styles.passwordblock1}>Password</Text>
            </View>
              <View style={styles.inputapasswordblock}>
              <TextInput 
                  placeholder="********"          
                  // value={this.state.login}
                  // ref={ref => (this.passwordInput = ref)}
                  // value={this.state.password}
                  // onChangeText={password => this.setState({password})}
                  // onSubmitEditing={this._submitForm}
                  style={styles.inputapasswordblock1}
              />
              </View>
            </View>  
        </View>

       <View style={styles.forgotpassblock}>
         <Text style={styles.forgotpassblock1}>Forgot Password?</Text>
       </View>

     
       
       <TouchableOpacity 
          onPress={( )=> {
                            // <CalendarScreen navigation={this.props.navigation} tabLabel="Agenda"/>    
                            //let validate_result = validate() ;
                            this.props.navigation.navigate("Dashboard", );
                            // {
                            // key: item[0].toString( )
                            //  }
                            //  );
                      }}


      //  onPress={this._submitForm}
      //  { this.props.navigation.navigate("Dashboard", )}
  
        style={styles.signinbuttonblock}>
            <Text style={styles.signinbuttonblock1}>Sign In</Text>   
      </TouchableOpacity>    
      
       


    </View>
    </ImageBackground>
  </View>
    );
  }
}

const styles =StyleSheet.create({
  mcontainer: {
    flex:1,
    // position:"relative",
    
  },

  container: {
    flex:1,
    // backgroundColor:'#fff',
    // position:"absolute",
    // flexDirection:"row",
    // alignItems:'center',
    // justifyContent:'center',
    margin:15,
    // borderWidth: 1,

  },

  header:{
    flex:1,
    marginTop:40,
    // borderWidth:1,
  },
  signinblock: {
    flex:1,
    // fontSize:25,
    // fontWeight: 'bold',
    // borderWidth:1,
  },

  signinblock1:{
    fontSize:30,
    fontWeight: 'bold',
    color:"lightgray",
    // borderWidth:1,
  },




//   signinblock1:{
// // flex:1,
// fontSize:25,
// fontWeight:'bold',
// color: "white",
//   },

  youraccountblock:{
    flex:1,
    // fontSize:25,
    fontWeight: 'bold',
    // borderWidth:1,
  },
  youraccountblock1:{
    fontSize:30,
    fontWeight: 'bold',
    color:"lightgray",
    
    
    // borderWidth:1,
  },
  pleaseblock:{
    flex:0.5,
    justifyContent: "center",
    // borderWidth:1,
  },

  pleaseblock1:{
    fontSize:20,
    color:"lightgray",
    // borderWidth:1,
  },

  loginblock:{
    flex:1.5,
    // borderWidth:1,
  },
  emailblock:{
    flex:0.7,
    marginTop:20,
    marginBottom:20,
    borderRadius:15,
    backgroundColor:"white",
    // borderWidth:1,

  },

  emailaddressblock:{
flex:1.8,
justifyContent:"center",
marginTop:10,
// borderWidth:1,
  },

  emailaddressblock1:{
   fontSize:15,
   color:"gray",
   marginLeft:15,
  
  },
  

inputaddressblock:{
 flex:2.2,
//  color:"gray",
//  borderWidth:1,

  },

  texinput1:{
    marginLeft:15,
    fontSize:18,
    // color:"blue",
  },



  passblock:{
    flex:0.7,
    // marginTop:20,
    marginBottom:20,
    borderRadius:15,
    backgroundColor:"white",
    // borderWidth:1, 
  },
  passwordblock:{
    flex:1.8,
    justifyContent:"center",
    
    // borderWidth:1,
  },

  passwordblock1:{
    fontSize:15,
   color:"gray",
   marginLeft:15,
   marginTop:10,
  },

  inputapasswordblock:{
    flex:2.2,
    // borderWidth:1,
  },

inputapasswordblock1:{
  marginLeft:15,
},



  forgotpassblock:{
   flex:0.5,
   justifyContent:"center",
   alignItems:"flex-end",
  //  borderWidth:1,
  },
  forgotpassblock1:{
    fontSize:15,
    color:"lightgray",
    fontWeight:'bold',
  },

  signinbuttonblock:{
    flex:0.5,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"green",
    // color:"white",
    marginVertical:35,

    borderRadius:15,
    // borderWidth:1,
  },

  signinbuttonblock1:{
  fontSize:20,
  color:"white",
  fontWeight:"bold",
  } , 
});