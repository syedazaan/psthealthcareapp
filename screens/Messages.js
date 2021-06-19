import React from 'react';
import { StyleSheet, Text, View,  Image,  ImageBackground, TouchableOpacity,} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';   

import Icon from 'react-native-vector-icons/FontAwesome';
import Iconf from 'react-native-vector-icons/Feather';
import Icona from 'react-native-vector-icons/AntDesign';
import Iconfa from 'react-native-vector-icons/FontAwesome5';
import Iconi from 'react-native-vector-icons/Ionicons';



const myIcon = <Icon name="search" size={30} color="gray" />;
const myIcon1 = <Iconf name="search" size={25} color="white" />;
const myIcon2 = <Icona name="home" size={30} color="gray" />;

const myIcon3 = <Iconfa name="scroll" size={22} color="gray" />;
const myIcon4 = <Iconi name="chatbubble-ellipses-outline" size={25} color="rgb(41,127,238)" />;
const myIcon5 = <Icona name="bells" size={25} color="grey" />;
const myIcon6 = <Icona name="arrowleft" size={30} color="white" />;

// import { styles } from  "../styles/styles";
// import { styles1 } from  "./styles/styles(1)";

export default class Messages extends React.Component {
  render( ) {
    return (
        <View style={styles.mcontainer}>    
            <View style= {styles.container}>
                 {/* header_block */}
                <View style={{flex:1, flexDirection:"row", borderBottomLeftRadius:30, borderBottomRightRadius:30, backgroundColor:"rgb(41,127,238)", borderWidth:0}}>
                    <TouchableOpacity 
                    onPress={( )=> {
                            // <CalendarScreen navigation={this.props.navigation} tabLabel="Agenda"/>    
                            this.props.navigation.navigate("Dashboard", );
                            // {
                            // key: item[0].toString( )
                            //  }
                            //  );
                      }}
                    style={{flex:1, alignItems:"center", justifyContent:"center", marginLeft:15, borderWidth:0}}>{myIcon6}</TouchableOpacity>
                    <View style={{flex:5, alignItems:"center", justifyContent:"center", borderWidth:0}}>
                        <Text style={{fontSize:23,fontWeight:"bold",color:"white"}}>Messages</Text>
                    </View>
                    <View style={{flex:1, alignItems:"center", justifyContent:"center", borderRadius:100, margin:20, marginRight:15,backgroundColor:"rgb(44,134,255)", borderWidth:0}}>{myIcon1}</View>
                </View>
                {/* Near_store_block */}
                <View style={{flex:0.7, justifyContent:"center", borderWidth:0 }}>
                    <Text style={{fontSize:23, fontWeight:"bold", marginLeft:15, color:"rgb(80,100,112)"}}>Near Store By You</Text>
                </View>
                {/* ThreeBox_block */}
                <View style={{flex:1.5, flexDirection:"row", borderWidth:0}}>
                    <View style={{flex:1, marginLeft:15, marginRight:7, marginBottom:7, borderRadius:12, backgroundColor:"white", borderWidth:0}}>
                        <View style={{flex:2, alignItems:"center", justifyContent:"center", borderWidth:0}}>
                            <Image 
                                 style={{flex:1, borderRadius:50,margin:10, width: 90, borderWidth:0 }}
                                // resizeMode={"contain"}
                                source={require('../images/message1.jpg')}
                            />
                        </View>
                        <View style={{flex:1, alignItems:"center", justifyContent:"center", borderWidth:0}}>
                                <Text style={{fontSize:17, fontWeight:"bold", color:"rgb(80,100,112)"}}>SP Store</Text>
                        </View>
                    </View>
                    <View style={{flex:1, marginLeft:15, marginRight:7, marginBottom:7, borderRadius:12, backgroundColor:"white", borderWidth:0}}>
                        <View style={{flex:2, alignItems:"center", justifyContent:"center", borderWidth:0}}>
                            <Image 
                                 style={{flex:1, borderRadius:50,margin:10, width: 90, borderWidth:0 }}
                                // resizeMode={"contain"}
                                source={require('../images/message2.jpg')}
                            />
                        </View>
                        <View style={{flex:1, alignItems:"center", justifyContent:"center", borderWidth:0}}>
                                <Text style={{fontSize:17, fontWeight:"bold", color:"rgb(80,100,112)" }}>Care Store</Text>
                        </View>
                    </View>
                    <View style={{flex:1, marginLeft:15, marginRight:15, marginBottom:7, borderRadius:12, backgroundColor:"white", borderWidth:0}}>
                        <View style={{flex:2, alignItems:"center", justifyContent:"center", borderWidth:0}}>
                        <Image 
                                 style={{flex:1, borderRadius:50,margin:10, width: 90, borderWidth:0 }}
                                // resizeMode={"contain"}
                                source={require('../images/message4.jpg')}
                            />
                        </View>
                        <View style={{flex:1, alignItems:"center", justifyContent:"center", borderWidth:0}}>
                            <Text style={{fontSize:17, fontWeight:"bold", color:"rgb(80,100,112)"}}>SS Nurse</Text>
                        </View>
                    </View>
                </View>
                {/*1 Users_block */}
                <View style={{flex:0.9, flexDirection:"row", marginTop:7, marginLeft:15, marginRight:15, marginBottom:7, borderRadius:12, backgroundColor:"white",  borderWidth:0}}>
                    <View style={{flex:1, alignItems:"center", justifyContent:"center", borderWidth:0}}>
                             <Image 
                                 style={{flex:1, borderRadius:50,margin:10, width: 60, borderWidth:0 }}
                                // resizeMode={"contain"}
                                source={require('../images/user1message.jpg')}
                            />                      
 
                    </View>
                    <View style={{flex:3, borderWidth:0}}>
                        <View style={{flex:1, justifyContent:"center", borderWidth:0}}>
                                <Text style={{fontSize:19, fontWeight:"bold", marginLeft:10, color:"rgb(80,100,112)" }}>Gracelyn Mason</Text>
                               
                        </View>

                        <View style={{flex:1, justifyContent:"center",  borderWidth:0}}>
                                <Text style={{fontSize:15, fontWeight:"500", color:"gray", marginLeft:10, }}> Hey! How can i help you?</Text>
                        </View>
                    </View>
                    <View style={{flex:0.8, borderWidth:0}}>
                        <View style={{flex:1.5, justifyContent:"center", borderWidth:0}}>
                            <Text  style={{fontSize:12, fontWeight:"700", color:"gray",}}>11.25 PM</Text>
                        </View>
                        <View style={{flex:3, borderWidth:0}}></View>
                    </View>
                </View>
                {/*2 Users_block */}
                <View style={{flex:0.9, flexDirection:"row", marginTop:7, marginLeft:15, marginRight:15, marginBottom:7, borderRadius:12, backgroundColor:"white", borderWidth:0}}>
                    <View style={{flex:1, alignItems:"center", justifyContent:"center", borderWidth:0}}>
                    <Image 
                                 style={{flex:1, borderRadius:50,margin:10, width: 60, borderWidth:0 }}
                                // resizeMode={"contain"}
                                source={require('../images/user2message.jpg')}
                    />  
                    </View>
                    <View style={{flex:3, borderWidth:0}}>
                        <View style={{flex:1, justifyContent:"center", borderWidth:0}}>
                            <Text style={{fontSize:19, fontWeight:"bold", marginLeft:10, color:"rgb(80,100,112)" }}>Kiersten Lange</Text>
                        </View>
                        <View style={{flex:1, justifyContent:"center", borderWidth:0}}>
                            <Text style={{fontSize:15, fontWeight:"500", color:"gray", marginLeft:10, }}> Hey! How can i help you?</Text>
                        </View>
                    </View>
                    <View style={{flex:0.8, borderWidth:0}}>
                        <View style={{flex:1.5, justifyContent:"center", borderWidth:0}}>
                            <Text  style={{fontSize:12, fontWeight:"700", color:"gray",}}>11.25 PM</Text>
                        </View>
                        <View style={{flex:3, borderWidth:0}}></View>
                    </View>
                </View>
                {/*3 Users_block */}
                <View style={{flex:0.9, flexDirection:"row", marginTop:7, marginLeft:15, marginRight:15, marginBottom:7, borderRadius:12, backgroundColor:"white", borderWidth:0}}>
                    <View style={{flex:1, alignItems:"center", justifyContent:"center",  borderWidth:0}}>
                            <Image 
                                 style={{flex:1, borderRadius:50,margin:10, width: 60, borderWidth:0 }}
                                // resizeMode={"contain"}
                                source={require('../images/user3message.jpg')}
                            />  
                    </View>
                    <View style={{flex:3, borderWidth:0}}>
                        <View style={{flex:1, justifyContent:"center", borderWidth:0}}>
                                <Text style={{fontSize:19, fontWeight:"bold", marginLeft:10, color:"rgb(80,100,112)" }}>Londynn Vargas</Text>
                        </View>
                        <View style={{flex:1, justifyContent:"center", borderWidth:0}}>
                            <Text style={{fontSize:15, fontWeight:"500", color:"gray", marginLeft:10, }}> Hey! How can i help you?</Text>
                        </View>
                    </View>
                    <View style={{flex:0.8, borderWidth:0}}>
                        <View style={{flex:1.5, borderWidth:0}}>
                                <Text  style={{fontSize:12, fontWeight:"700", color:"gray",}}>11.25 PM</Text>
                        </View>
                        <View style={{flex:3, justifyContent:"center", borderWidth:0}}>
                            
                        </View>
                    </View>
                </View>
                {/*4 Users_block */}
                <View style={{flex:0.9, flexDirection:"row", marginTop:7, marginLeft:15, marginRight:15, marginBottom:7, borderRadius:12, backgroundColor:"white", borderWidth:0}}>
                    <View style={{flex:1, alignItems:"center", justifyContent:"center", borderWidth:0}}>
                            <Image 
                                 style={{flex:1, borderRadius:50,margin:10, width: 60, borderWidth:0 }}
                                // resizeMode={"contain"}
                                source={require('../images/user4message.jpg')}
                            />  
                    </View>
                    <View style={{flex:3, borderWidth:0}}>
                        <View style={{flex:1, justifyContent:"center", borderWidth:0}}>
                                <Text style={{fontSize:19, fontWeight:"bold", marginLeft:10, color:"rgb(80,100,112)" }}>Bradley Smythe</Text>
                        </View>
                        <View style={{flex:1, justifyContent:"center", borderWidth:0}}>
                            <Text style={{fontSize:15, fontWeight:"500", color:"gray", marginLeft:10, }}> Hey! How can i help you?</Text>
                        </View>
                    </View>
                    <View style={{flex:0.8, borderWidth:0}}>
                        <View style={{flex:1.5, justifyContent:"center", borderWidth:0}}> 
                            <Text  style={{fontSize:12, fontWeight:"700", color:"gray",}}>11.25 PM</Text>    
                        </View>
                        <View style={{flex:3, borderWidth:0}}></View>
                    </View>
                </View>

            </View>
            {/* Icon_Block */}
            <View style={{flex:1, backgroundColor:"white", borderWidth:0}}>
                <View style={{flex:1, flexDirection:"row", marginLeft:15, marginRight:15, borderWidth:0}}>
                    <TouchableOpacity
                         onPress={( )=> {
                            // <CalendarScreen navigation={this.props.navigation} tabLabel="Agenda"/>    
                            this.props.navigation.navigate("Dashboard", );
                            // {
                            // key: item[0].toString( )
                            //  }
                            //  );
                      }} 
                        style={{flex:1, flexDirection:"column", borderWidth:0}}>
                            <View style={{flex:2, alignItems:"center", justifyContent:"center", borderWidth:0}}>
                                {myIcon2}
                            </View>
                            <View style={{flex:1, alignItems:"center", justifyContent:"flex-start", borderWidth:0}}>
                                <Text style={{fontSize:17, fontWeight:"700", color:"gray" }}>Home</Text>
                            </View>
                    </TouchableOpacity>
                    <View style={{flex:1, flexDirection:"column",  borderWidth:0}}>
                            <View style={{flex:2, alignItems:"center", justifyContent:"center", borderWidth:0}}>{myIcon3}</View>
                            <View style={{flex:1, alignItems:"center", justifyContent:"flex-start", borderWidth:0}}>
                                 <Text style={{fontSize:17, fontWeight:"700", color:"gray" }}>Articles</Text>
                            </View>
                    </View>
                    <View style={{flex:1, flexDirection:"column",  borderWidth:0}}>
                        <View style={{flex:2, alignItems:"center", justifyContent:"center", borderWidth:0}}>{myIcon4}</View>
                        <View style={{flex:1, alignItems:"center", justifyContent:"flex-start", borderWidth:0}}>
                                <Text style={{fontSize:17, fontWeight:"700", color:"rgb(41,127,238)", }}>Chat</Text>
                        </View>
                    </View>
                    <View style={{flex:1, flexDirection:"column",  borderWidth:0}}>
                        <View style={{flex:2, alignItems:"center", justifyContent:"center", borderWidth:0}}>{myIcon5}</View>
                        <View style={{flex:1, alignItems:"center", justifyContent:"flex-start", borderWidth:0}}>
                                <Text style={{fontSize:17, fontWeight:"700", color:"gray" }}>Notification</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
  }
}

const styles =StyleSheet.create({
    mcontainer:{
      flex:1,
      backgroundColor:'rgb(244,245,249)',
    },
    container: {
    flex:9,
    backgroundColor:"rgb(244,245,249)",
    // alignItems:'center',
    // justifyContent:'center',
  },
});