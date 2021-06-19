
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, KeyboardAvoidingView, FlatList, TouchableOpacity, ImageBackground} from 'react-native';
import { Card } from 'react-native-elements'; 
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';  

import Icon from 'react-native-vector-icons/FontAwesome';
import Iconf from 'react-native-vector-icons/Feather';
import Icona from 'react-native-vector-icons/AntDesign';
import Iconfa from 'react-native-vector-icons/FontAwesome5';
import Iconi from 'react-native-vector-icons/Ionicons';
import { Row } from 'native-base/lib/typescript/src';



const myIcon = <Icon name="search" size={30} color="gray" />;
const myIcon1 = <Iconf name="search" size={30} color="gray" />;
const myIcon2 = <Icona name="home" size={30} color="rgb(41,127,238)" />;
const myIcon3 = <Iconfa name="scroll" size={22} color="gray" />;
const myIcon4 = <Iconi name="chatbubble-ellipses-outline" size={25} color="gray" />;
const myIcon5 = <Icona name="bells" size={25} color="grey" />;

const data = [
{
    Image:("../images/ayurvedicimg1.jpg")
},

{
    Image: ("../images/ayurvedicimg2.jpg")
},
{
    Image: ("../images/ayurvedicimg3.jpg")
},
];


export default class Dashboard extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        data:data
    };
}

// static navigationOptions = {
//     title : "Contact App"
// };

// UNSAFE_componentWillMount( ) {
//     const { navigation } = this.props;
//     navigation.addListener("willFocus ", ( ) => {
//         this.getAllContact( );
//      });
//  }




    render( ) {
        const keyboardVerticalOffset = Platform.OS === 'android' ? 40 : 0
        return (
            <KeyboardAvoidingView ref = 'scroll' style={{ flex:1, backgroundColor:"rgb(244,245,249)",}}>
            {/* <KeyBoardAvoidingView> */}
            <View style= {styles.container}>
                
                {/* Header_block */}
                <View style= {{flex:1.2, marginTop:10, flexDirection:"row", backgroundColor:"rgb(244,245,249)", marginBottom:5, borderWidth:0}}>
                    <View style={{flex:5, borderWidth:0}}>
                        <Text style={{fontSize:25, color:"black", backgroundColor:"rgb(244,245,249)", fontWeight:"bold"}}>Hi, Monroe Bond</Text>
                    </View>
                    <TouchableOpacity
                    onPress={( )=> {
                            // <CalendarScreen navigation={this.props.navigation} tabLabel="Agenda"/>    
                            this.props.navigation.navigate("Login", );
                            // {
                            // key: item[0].toString( )
                            //  }
                            //  );
                      }}
                     style={{flex:1, alignItems:"center", justifyContent:"center", borderWidth:0}}>
                          <Image
                            style={{flex:1, borderRadius:25, width:50, height:50, backgroundColor:"lightblue", borderWidth:0 }}
                            // resizeMode={"contain"}
                            source={require('../images/user.jpg')}
                            />
                    </TouchableOpacity>
                </View>
                
                {/* Search_block */}
                <View style={{flex:1.2, flexDirection:"row", backgroundColor:"white", borderRadius:7, marginTop:5, marginBottom:5, borderWidth:0}}>
                    <View style={{flex:5, borderWidth:0,}}>
                        <TextInput 
                        placeholder="Search your medicine here"
                        style={{fontSize:16, color:"gray", marginLeft: 5,}} 
                         />
                    </View>
                    <View style={{flex:1, alignItems:"center", justifyContent:"center", borderWidth:0,}}>{myIcon1}</View>
                </View>

                {/* Card_Block */}
                <View style={{flex:4, borderRadius:12, marginTop:10, alignItems:"center", justifyContent:"center", marginBottom:10, borderWidth:0}}>
                <FlatList 
                    horizontal
                    data={this.state.data}
                    renderItem={({item:rowData}) => {
                        console.log("Image", rowData.Image,rowData);
                        return(
                            <TouchableOpacity   onPress={( )=> {
                            // <CalendarScreen navigation={this.props.navigation} tabLabel="Agenda"/>    
                            this.props.navigation.navigate("Product", );
                            // {
                            // key: item[0].toString( )
                            //  }
                            //  );
                      }}>
                            <Image
                              style={{flex:1, borderRadius:12, width:360, height:200 }}
                            // resizeMode={"contain"}
                            source={require("../images/ayurvedicimg1.jpg")}
                            />
                            </TouchableOpacity>
                        )
                    }}
                />
               
                

                </View>
                
                {/* Top_Categories_Block */}
                <View style={{flex:1.5, flexDirection:"row",  marginTop:5, marginBottom:10, borderWidth:0}}>
                    <View style={{flex:5, justifyContent: "center", borderWidth:0}}>
                        <Text style={{ fontSize:25, color:"black", fontWeight:"bold", }}>Top Categories</Text>
                    </View>
                    <View style={{flex:1.5, borderRadius:5, alignItems:"center", justifyContent: "center", backgroundColor:"white", marginTop:10, marginBottom:10, marginLeft:15, borderWidth:0}}>
                        <Text style={{color:"gray",fontSize:15, }}>View all</Text>
                    </View>
                </View>          
               
                {/* Three_images_Block */}
                <View style={{flex:3.5, flexDirection:"row", borderWidth:0}}>
                    <View style={{flex:1, borderRadius:12, backgroundColor:"white", marginBottom:5, marginRight:17, borderWidth:0}}>
                        <View style={{flex:2, alignItems:"center", justifyContent:"center", borderWidth:0,}}>
                            <Image
                            style={{flex:1, borderRadius:50, width:60, height:60, margin:10, backgroundColor:"lightblue", borderWidth:0 }}
                            // resizeMode={"contain"}
                            source={require('../images/bottle2ayurvedic.jpg')}
                            />
                        </View>
                        <TouchableOpacity 
                            onPress={( )=> {
                            // <CalendarScreen navigation={this.props.navigation} tabLabel="Agenda"/>    
                            this.props.navigation.navigate("Ayurveda", );
                            // {
                            // key: item[0].toString( )
                            //  }
                            //  );
                          }}
                            style={{flex:1, alignItems:"center", justifyContent:"center", borderWidth:0,}}>
                           <Text style={{fontSize:18, fontWeight:"bold",}}>Ayurveda</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, borderRadius:12, backgroundColor:"white", marginBottom:5, marginRight:17, borderWidth:0}}>
                        <View style={{flex:2, alignItems:"center", justifyContent:"center", borderWidth:0,}}>
                        <Image
                            style={{flex:1, margin:10, borderRadius:30, width:60, height:60, backgroundColor:"lightblue", borderWidth:1 }}
                            // resizeMode={"contain"}
                            source={require('../images/bottleayuvedicimg1.jpg')}
                            />
                        </View>
                        <TouchableOpacity 
                            onPress={( )=> {
                            // <CalendarScreen navigation={this.props.navigation} tabLabel="Agenda"/>    
                            this.props.navigation.navigate("Homepathy", );
                            // {
                            // key: item[0].toString( )
                            //  }
                            //  );
                      }}
                        style={{flex:1, alignItems:"center", justifyContent:"center", borderWidth:0,}}>
                            <Text style={{fontSize:18, fontWeight:"bold",}}>Homepathy</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, borderRadius:12, backgroundColor:"white", marginBottom:5, borderWidth:0}}>
                        <View style={{flex:2, alignItems:"center", justifyContent:"center", borderWidth:0,}}>
                        <Image
                            style={{flex:1, margin:10, borderRadius:30, width:60, height:60, backgroundColor:"lightblue", borderWidth:0 }}
                            // resizeMode={"contain"}
                            source={require('../images/dentals.jpg')}
                         />
                        </View>
                        <TouchableOpacity 
                           onPress={( )=> {
                            // <CalendarScreen navigation={this.props.navigation} tabLabel="Agenda"/>    
                            this.props.navigation.navigate("ProductDetails", );
                            // {
                            // key: item[0].toString( )
                            //  }
                            //  );
                      }}
                        style={{flex:1, alignItems:"center", justifyContent:"center", borderWidth:0,}}>
                            <Text style={{fontSize:18, fontWeight:"bold",}}>Dentals</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Trending_Products */}
                <View style={{flex:1.5, flexDirection:"row", marginTop:10, marginBottom:10, borderWidth:0}}>
                    <View style={{flex:5,  justifyContent: "center", borderWidth:0}}>
                        <Text style={{fontSize:25, color:"black", fontWeight:"bold",}}>Trending Products</Text>
                    </View>   
                    <View style={{flex:1.5, borderRadius:5,backgroundColor:"white", alignItems:"center", justifyContent: "center", marginTop:10, marginBottom:10, marginLeft:15, borderWidth:0}}>
                        <Text style={{color:"gray",fontSize:15, }}>View all</Text>
                    </View>
                </View>

                {/* Two_images_block */}
                <View style={{flex:3, flexDirection:"row", borderWidth:0}}>
                    <View style={{flex:1, borderRadius:12, marginRight:10, borderWidth:0}}>
                           <View style={{flex:1, margin:5, borderRadius:12, alignItems:"center", justifyContent:"center",  borderWidth:0}}>
                           <Image
                            style={{flex:1, borderRadius:12, width:150, height:150, backgroundColor:"lightblue", borderWidth:0 }}
                            // resizeMode={"contain"}
                            source={require('../images/ayurvedicimg1.jpg')}
                            />
                           </View>
                    </View>
                    <View style={{flex:1, borderRadius:12, marginLeft:10, borderWidth:0}}>
                          <View style={{flex:1, margin:5, borderRadius:12, borderWidth:0}}>
                          <Image
                            style={{flex:1, borderRadius:12, width:150, height:150, backgroundColor:"lightblue", borderWidth:0 }}
                            // resizeMode={"contain"}
                            source={require('../images/ayurvedicimg2.jpg')}
                            />
                          </View>
                    </View>
                </View>

                {/* Icons_Block */}
                <View style={{flex:1.5, flexDirection:"row",backgroundColor:"white", marginTop:5, borderWidth:0}}>
                    <TouchableOpacity style={{flex:1, borderWidth:0}}>
                        <View style={{flex:1,marginLeft:8, justifyContent:"center", borderWidth:0,}}>{myIcon2}</View>
                        <View style={{flex:0.6, justifyContent:"center", borderWidth:0,}}>
                            <Text style={{fontSize:15,color:"blue",fontWeight:"bold",}}>Home</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex:1,borderWidth:0}}>
                        <View style={{flex:1, alignItems:"center", justifyContent:"center", borderWidth:0,}}>{myIcon3}</View>
                        <View style={{flex:0.6, alignItems:"center", justifyContent:"center", borderWidth:0,}}>
                             <Text style={{fontSize:15,color:"gray",fontWeight:"bold",}}>Articles</Text>
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
            {/* </KeyBoardAvoidingView> */}
        </KeyboardAvoidingView>
        
    );
  }
}


const styles =StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"rgb(244,245,249)",
    // backgroundColor:'#fff',
    margin:15,
    marginTop:15,
    marginLeft:15,
    marginRight:15,
    marginBottom:7,
 
    // alignItems:'center',
    // justifyContent:'center',
  },
});
