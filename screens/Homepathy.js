import React from 'react';
import { StyleSheet, Text, View,  Image, ImageBackground, FlatList, TouchableOpacity, ScrollView} from 'react-native';
// import { styles } from "../styles/styles";
// import { colors } from "../styles/Colors";

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';   

  

import Icon from 'react-native-vector-icons/FontAwesome';
import Iconf from 'react-native-vector-icons/Feather';
import Icona from 'react-native-vector-icons/AntDesign';
import Iconfa from 'react-native-vector-icons/FontAwesome5';
import Iconi from 'react-native-vector-icons/Ionicons';
// import { Row } from 'native-base/lib/typescript/src';



const myIcon = <Icon name="search" size={30} color="white" />;
const myIcon1 = <Icona name="arrowleft" size={30} color="white" />;
const myIcon2 = <Icona name="home" size={30} color="gray" />;
const myIcon3 = <Iconfa name="scroll" size={22} color="rgb(41,127,238)" />;
const myIcon4 = <Iconi name="chatbubble-ellipses-outline" size={25} color="gray" />;
const myIcon5 = <Icona name="bells" size={25} color="grey" />;


const data =[

];

export default class Homepathy extends React.Component {

 constructor(props) {
     super(props);
     this.state = {
         
        //  data:data,

     };


 }   
     render( ) {
        return (
            <View style= {styles.container}>
                {/* Header_block */}
                <View style={{flex:1, flexDirection:"row", backgroundColor:"rgb(41,127,238)", borderWidth:0, }}>
                     <TouchableOpacity
                     onPress={( )=> {
                            // <CalendarScreen navigation={this.props.navigation} tabLabel="Agenda"/>    
                            this.props.navigation.navigate("Dashboard", );
                            // {
                            // key: item[0].toString( )
                            //  }
                            //  );
                      }}
                      style={{flex:1.5, justifyContent:"center", alignItems:"center", borderWidth:0, }}>{myIcon1}</TouchableOpacity>
                    <View style={{flex:5, justifyContent:"center", alignItems:"center", borderWidth:0, }}>
                        <Text style={{fontSize:23,fontWeight:"bold",color:"white"}}>Homepathy</Text>
                    </View>
           
                     <View style={{flex:1.5, justifyContent:"center", alignItems:"center", borderWidth:0, }}>
                         <Image
                                style={{flex:1, width:45, margin:30, borderRadius:22,  borderWidth:0 }}
                                // resizeMode={"contain"}
                                source={require('../images/user.jpg')}
                        />
                       
                        {/* <Image
                            style={{flex:1, width:50, margin:25, borderRadius:25,  borderWidth:0 }}
                            // resizeMode={"contain"}
                            source={require('../images/user.jpg')}
                        /> */}
                     </View>
                 </View>
              
               <View style={{flex:5}}>
               <ScrollView style={{flex:5}}>
                
                {/* Box1_block */}
              
                <View style={{flex:2.5, flexDirection:"row",  backgroundColor:"rgb(244,245,249)",  borderWidth:0}}>
                     <View style={{flex:0.14, backgroundColor:"rgb(244,245,249)", borderWidth:0}}>
                         <View style={{flex:1, borderBottomLeftRadius:30, backgroundColor:"rgb(41,127,238)", borderWidth:0}}></View>
                         <View style={{flex:1.5, borderWidth:0}}></View>
                     </View>
                     <TouchableOpacity 
                     onPress={( )=> {
                            // <CalendarScreen navigation={this.props.navigation} tabLabel="Agenda"/>    
                            this.props.navigation.navigate("Product", );
                            // {
                            // key: item[0].toString( )
                            //  }
                            //  );
                      }}
                     style={{flex:1, backgroundColor:"white", margin:10, borderRadius:12, borderWidth:0,}}>
                     <View style={{flex:4, borderWidth:0,}}>
                     <Image
                    style={{flex:1, borderRadius:12,  margin:10, width:130, height:100 }}
                    // resizeMode={"contain"}
                    source={require('../images/homeopathyimg3.jpg')}
                    />
                    </View>
                    <View style={{flex:1, borderWidth:0}}>
                        <Text style={{fontSize:16, marginLeft:10, color:"midnightblue", fontWeight:"bold"}}>Missionpharma</Text>
                    </View> 
                    <View  style={{flex:1, flexDirection:"row", borderWidth:0,}}>   
                        <Text style={{fontSize:16,fontWeight:"bold", marginLeft:10, color:"rgb(46,194,139)"}}>$20.00</Text>
                        <Text style={{fontSize:11,marginTop:5, color:"gray", marginLeft:10, fontWeight:"bold"}}>25% Off</Text>
                    </View>
                     </TouchableOpacity>
                     {/* No Two */}
                     <View style={{flex:1, borderWidth:0}}>
                     <TouchableOpacity 
                     onPress={( )=> {
                            // <CalendarScreen navigation={this.props.navigation} tabLabel="Agenda"/>    
                            this.props.navigation.navigate("Product", );
                            // {
                            // key: item[0].toString( )
                            //  }
                            //  );
                      }}
                     style={{flex:1, backgroundColor:"white", margin:10, borderRadius:12, borderWidth:0,}}>
                     <View style={{flex:4, borderWidth:0,}}>
                     <Image
                    style={{flex:1, borderRadius:12,  margin:10, width:120, height:100 }}
                    // resizeMode={"contain"}
                    source={require('../images/homeopathyimg3.jpg')}
                     />
                     </View>
                     <View style={{flex:1, borderWidth:0}}>
                        <Text style={{fontSize:16, marginLeft:10, color:"midnightblue", fontWeight:"bold"}}>Missionpharma</Text>
                    </View> 
                    <View  style={{flex:1, flexDirection:"row", borderWidth:0,}}>   
                        <Text style={{fontSize:16,fontWeight:"bold", marginLeft:10, color:"rgb(46,194,139)"}}>$20.00</Text>
                        <Text style={{fontSize:11,marginTop:5, color:"gray", marginLeft:10, fontWeight:"bold"}}>25% Off</Text>
                    </View>

                     </TouchableOpacity>
                     </View>
                     <View style={{flex:0.14, borderWidth:0}}>
                     <View style={{flex:1, borderBottomRightRadius:30, backgroundColor:"rgb(41,127,238)", borderWidth:0}}></View>
                         <View style={{flex:1.5, borderWidth:0}}></View>
                     </View>
                </View>
                 {/* Box2_block */}
                <View style={{flex:2.5, flexDirection:"row",  backgroundColor:"rgb(244,245,249)", borderWidth:0}}>
                    <TouchableOpacity 
                    onPress={( )=> {
                            // <CalendarScreen navigation={this.props.navigation} tabLabel="Agenda"/>    
                            this.props.navigation.navigate("Product", );
                            // {
                            // key: item[0].toString( )
                            //  }
                            //  );
                      }}
                    style={{flex:1, backgroundColor:"white", marginLeft:25, borderWidth:0,}}>
                        <View style={{flex:1, margin:10, borderRadius:12, borderWidth:0,}}>
                        <View style={{flex:4, borderWidth:0,}}>
                        <Image
                    style={{flex:1, borderRadius:12,  margin:10, width:130, height:100 }}
                    // resizeMode={"contain"}
                    source={require('../images/homeopathyimg3.jpg')}
                />
                         </View>
                         <View style={{flex:1, borderWidth:0}}>
                            <Text style={{fontSize:16, marginLeft:10, color:"midnightblue", fontWeight:"bold"}}>Missionpharma</Text>
                        </View> 
                        <View  style={{flex:1, flexDirection:"row", borderWidth:0,}}>   
                            <Text style={{fontSize:16,fontWeight:"bold", marginLeft:10, color:"rgb(46,194,139)"}}>$20.00</Text>
                            <Text style={{fontSize:11,marginTop:5, color:"gray", marginLeft:10, fontWeight:"bold"}}>25% Off</Text>
                        </View>

                        </View>
                    </TouchableOpacity>
                    <View style={{flex:1, marginRight:25, borderWidth:0,}}>
                    <TouchableOpacity 
                    onPress={( )=> {
                            // <CalendarScreen navigation={this.props.navigation} tabLabel="Agenda"/>    
                            this.props.navigation.navigate("Product", );
                            // {
                            // key: item[0].toString( )
                            //  }
                            //  );
                      }}
                    style={{flex:1, backgroundColor:"white", margin:10, borderRadius:12, borderWidth:0,}}>
                    <View style={{flex:4, borderWidth:0,}}>
                    <Image
                    style={{flex:1, borderRadius:12,  margin:10, width:130, height:100 }}
                    // resizeMode={"contain"}
                    source={require('../images/homeopathyimg3.jpg')}
                />
                    </View>
                    <View style={{flex:1, borderWidth:0}}>
                            <Text style={{fontSize:16, marginLeft:10, color:"midnightblue", fontWeight:"bold"}}>Missionpharma</Text>
                        </View> 
                        <View  style={{flex:1, flexDirection:"row", borderWidth:0,}}>   
                            <Text style={{fontSize:16,fontWeight:"bold", marginLeft:10, color:"rgb(46,194,139)"}}>$20.00</Text>
                            <Text style={{fontSize:11,marginTop:5, color:"gray", marginLeft:10, fontWeight:"bold"}}>25% Off</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                </View>
                 {/* Box3_block */}
                <View style={{flex:2.5,  backgroundColor:"rgb(244,245,249)",  flexDirection:"row", borderWidth:0}}>
                    <TouchableOpacity 
                    onPress={( )=> {
                            // <CalendarScreen navigation={this.props.navigation} tabLabel="Agenda"/>    
                            this.props.navigation.navigate("Product", );
                            // {
                            // key: item[0].toString( )
                            //  }
                            //  );
                      }}
                    style={{flex:1, marginLeft:25, borderWidth:0,}}>
                    <View style={{flex:3, backgroundColor:"white", margin:10, borderRadius:12, borderWidth:0,}}>
                    <View style={{flex:4, borderWidth:0,}}>
                    <Image
                    style={{flex:1, borderRadius:12,  margin:10, width:130, height:100 }}
                    // resizeMode={"contain"}
                    source={require('../images/homeopathyimg3.jpg')}
                />
                </View>
                <View style={{flex:1, borderWidth:0}}>
                            <Text style={{fontSize:16, marginLeft:10, color:"midnightblue", fontWeight:"bold"}}>Missionpharma</Text>
                        </View> 
                        <View  style={{flex:1, flexDirection:"row", borderWidth:0,}}>   
                            <Text style={{fontSize:16,fontWeight:"bold", marginLeft:10, color:"rgb(46,194,139)"}}>$20.00</Text>
                            <Text style={{fontSize:11,marginTop:5, color:"gray", marginLeft:10, fontWeight:"bold"}}>25% Off</Text>
                        </View>
                    </View>
                  
                    </TouchableOpacity>
                   
                    <View style={{flex:1, marginRight:25, borderWidth:0,}}>
                    <TouchableOpacity 
                    onPress={( )=> {
                            // <CalendarScreen navigation={this.props.navigation} tabLabel="Agenda"/>    
                            this.props.navigation.navigate("Product", );
                            // {
                            // key: item[0].toString( )
                            //  }
                            //  );
                      }}
                    style={{flex:1, backgroundColor:"white", margin:10, borderRadius:12, borderWidth:0,}}>
                    <View style={{flex:4, borderWidth:0,}}>
                    <Image
                    style={{flex:1, borderRadius:12,  margin:10, width:130, height:100 }}
                    // resizeMode={"contain"}
                    source={require('../images/homeopathyimg3.jpg')}
                />
                </View>
                <View style={{flex:1, borderWidth:0}}>
                        <Text style={{fontSize:16, marginLeft:10, color:"midnightblue", fontWeight:"bold"}}>Missionpharma</Text>
                    </View> 
                    <View  style={{flex:1, flexDirection:"row", borderWidth:0,}}>   
                        <Text style={{fontSize:16,fontWeight:"bold", marginLeft:10, color:"rgb(46,194,139)"}}>$20.00</Text>
                        <Text style={{fontSize:11,marginTop:5, color:"gray", marginLeft:10, fontWeight:"bold"}}>25% Off</Text>
                    </View>

                    </TouchableOpacity>
                    </View>
                </View>
                 {/* Box4_block */}
                <View style={{flex:2.5, backgroundColor:"rgb(244,245,249)",  flexDirection:"row", borderWidth:0}}>
                    <TouchableOpacity 
                    onPress={( )=> {
                            // <CalendarScreen navigation={this.props.navigation} tabLabel="Agenda"/>    
                            this.props.navigation.navigate("Product", );
                            // {
                            // key: item[0].toString( )
                            //  }
                            //  );
                      }}
                    style={{flex:1, marginLeft:25, borderWidth:0,}}>
                    <View style={{flex:1, backgroundColor:"white", margin:10, borderRadius:12, borderWidth:0,}}>
                    <View style={{flex:4, borderWidth:0,}}>
                    <Image
                    style={{flex:1, borderRadius:12,  margin:10, width:130, height:100 }}
                    // resizeMode={"contain"}
                    source={require('../images/bottleayuvedicimg1.jpg')}
                />
                    </View>
                    
                    <View style={{flex:1, borderWidth:0}}>
                        <Text style={{fontSize:16, marginLeft:10, color:"midnightblue", fontWeight:"bold"}}>Missionpharma</Text>
                    </View> 
                    <View  style={{flex:1, flexDirection:"row", borderWidth:0,}}>   
                        <Text style={{fontSize:16,fontWeight:"bold", marginLeft:10, color:"rgb(46,194,139)"}}>$20.00</Text>
                        <Text style={{fontSize:11,marginTop:5, color:"gray", marginLeft:10, fontWeight:"bold"}}>25% Off</Text>
                    </View>
                    </View>
                    </TouchableOpacity>
                    <View style={{flex:1, marginRight:25, borderWidth:0,}}>
                    <TouchableOpacity 
                    onPress={( )=> {
                            // <CalendarScreen navigation={this.props.navigation} tabLabel="Agenda"/>    
                            this.props.navigation.navigate("Product", );
                            // {
                            // key: item[0].toString( )
                            //  }
                            //  );
                      }}
                    style={{flex:1, backgroundColor:"white", margin:10, borderRadius:12, borderWidth:0,}}>
                    <View style={{flex:4, borderWidth:0,}}>
                    <Image
                    style={{flex:1, borderRadius:12,  margin:10, width:130, height:100 }}
                    // resizeMode={"contain"}
                    source={require('../images/bottleayuvedicimg1.jpg')}
                />
                   </View>
                   <View style={{flex:1, borderWidth:0}}>
                        <Text style={{fontSize:16, marginLeft:10, color:"midnightblue", fontWeight:"bold"}}>Missionpharma</Text>
                    </View> 
                    <View  style={{flex:1, flexDirection:"row", borderWidth:0,}}>   
                        <Text style={{fontSize:16,fontWeight:"bold", marginLeft:10, color:"rgb(46,194,139)"}}>$20.00</Text>
                        <Text style={{fontSize:11,marginTop:5, color:"gray", marginLeft:10, fontWeight:"bold"}}>25% Off</Text>
                    </View>
                    </TouchableOpacity>
                    </View>
                </View>

                 </ScrollView>
                 </View> 
                
                 {/* Icons_Block */}
                 <View style={{flex:0.8, flexDirection:"row",backgroundColor:"white", marginTop:5, borderWidth:0}}>
                    <TouchableOpacity 
                         onPress={( )=> {
                            // <CalendarScreen navigation={this.props.navigation} tabLabel="Agenda"/>    
                            this.props.navigation.navigate("Dashboard", );
                            // {
                            // key: item[0].toString( )
                            //  }
                            //  );
                      }}
                        style={{flex:1, borderWidth:0}}>
                            <View style={{flex:1,marginLeft:8, justifyContent:"center", alignItems:"center", borderWidth:0,}}>{myIcon2}</View>
                            <View style={{flex:0.6, justifyContent:"center", alignItems:"center", borderWidth:0,}}>
                                <Text style={{fontSize:15,color:"gray",fontWeight:"bold",}}>Home</Text>
                            </View>
                    </TouchableOpacity>
                    <View style={{flex:1,borderWidth:0}}>
                        <View style={{flex:1, alignItems:"center", justifyContent:"center", borderWidth:0,}}>{myIcon3}</View>
                        <View style={{flex:0.6, alignItems:"center", justifyContent:"center", borderWidth:0,}}>
                             <Text style={{fontSize:15,color:"rgb(41,127,238)",fontWeight:"bold",}}>Articles</Text>
                        </View>
                    </View>
                    <TouchableOpacity 
                            onPress={( )=> {
                            // <CalendarScreen navigation={this.props.navigation} tabLabel="Agenda"/>    
                            this.props.navigation.navigate("Messages", );
                            // {
                            // key: item[0].toString( )
                            //  }
                            //  );
                      }}
                        style={{flex:1,borderWidth:0}}>
                        <View style={{flex:1, alignItems:"center", justifyContent:"center", borderWidth:0,}}>{myIcon4}</View>
                        <View style={{flex:0.6, alignItems:"center", justifyContent:"center", borderWidth:0,}}>
                                <Text style={{fontSize:15,color:"gray",fontWeight:"bold",}}>Chat</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex:1,borderWidth:0}}>
                        <View style={{flex:1, alignItems:"center", justifyContent:"center", borderWidth:0,}}>{myIcon5}</View>
                        <View style={{flex:0.6, alignItems:"center", justifyContent:"center", borderWidth:0,}}>
                                <Text style={{fontSize:15,color:"gray",fontWeight:"bold",}}>Notification</Text>
                        </View>
                    </View>
                </View>
                
                
            </View>
        );
     }
}

const styles =StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    // alignItems:'center',
    // justifyContent:'center',
  },
});