import React from 'react';
import { StyleSheet, Text, View,  Image, ImageBackground, TouchableOpacity, FlatList,} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';  

import Icon from 'react-native-vector-icons/AntDesign';  
import Iconfa from 'react-native-vector-icons/FontAwesome';  
import Iconfo from 'react-native-vector-icons/Fontisto';  
import { ScrollView } from 'react-native-gesture-handler';
import { themeTools } from 'native-base/lib/typescript/src';



  
const myIcon = <Icon name="arrowleft" size={30} color="white" />;
const myIcon1 = <Icon name="checkcircleo" size={20} color="rgb(46,194,139)" />;
const myIconfa = <Iconfa name="star" size={23} color="yellow" />;
const myIconfo = <Iconfo name="star-half" size={23} color="yellow" />;
export default class ProductDetails extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            desc: true,
        };
    }

  render( ) {
    return (
     <View style= {styles.container}>
          {/* Header_block */}
        <View style={{flex:1.3, flexDirection:"row", backgroundColor:"rgb(41,127,238)", borderWidth:0, }}>
            <TouchableOpacity 
            onPress={( )=> {
                            // <CalendarScreen navigation={this.props.navigation} tabLabel="Agenda"/>    
                            this.props.navigation.navigate("Dashboard", );
                            // {
                            // key: item[0].toString( )
                            //  }
                            //  );
                      }}
            style={{flex:1.5, justifyContent:"center", alignItems:"center", borderWidth:0, }}>{myIcon}</TouchableOpacity>
            <View style={{flex:5, justifyContent:"center", alignItems:"center", borderWidth:0, }}>
                <Text style={{fontSize:23,fontWeight:"bold",color:"white"}}>Product Detail</Text>
            </View>
            <View style={{flex:1.5, justifyContent:"center", alignItems:"center", borderWidth:0, }}>
                <Image
                         style={{flex:1, width:55, margin:25, borderRadius:26,  borderWidth:0 }}
                         // resizeMode={"contain"}
                         source={require('../images/user.jpg')}
                 />
            </View>
        </View>
        {/* Image_block  */}
        <View style={{flex:2.5, flexDirection:"row", borderWidth:0,}}>
             <View style={{flex:0.7,borderWidth:0}}>    
                 <View style={{flex:1.3, borderBottomLeftRadius:35, backgroundColor:"rgb(41,127,238)", borderWidth:0,}}></View>
                 <View style={{flex:2.5, backgroundColor:"rgb(234,246,255)", borderWidth:0,}}></View>
             </View>
             <View style={{flex:9, borderRadius:12, borderWidth:0}}>
             <Image
                    style={{flex:1, borderRadius:12,  margin:10, width:315, height:100 }}
                    // resizeMode={"contain"}
                    source={require('../images/bottleayuvedicimg1.jpg')}
                />
             </View>
            <View style={{flex:0.7,borderWidth:0}}>
                 <View style={{flex:1.3, borderBottomRightRadius:35, backgroundColor:"rgb(41,127,238)", borderWidth:0,}}></View>
                 <View style={{flex:2.5, backgroundColor: "rgb(234,246,255)", borderWidth:0,}}></View>
            </View> 
        </View>
          {/* Content_Block */}
         <View style={{flex:4, borderWidth:0,}}>
             <View style={{flex:0.8, backgroundColor:"rgb(234,246,255)",borderWidth:0,}}>
                 <View style={{flex:0.7, justifyContent:"center", borderWidth:0,}}>
                     <Text style={{fontSize:25, fontWeight:"bold", marginLeft:20, color:"rgb(61,92,109)" }}>Pharmaceutical</Text>
                 </View>
                 <View style={{flex:1.3, justifyContent:"center", borderWidth:0,}}>
                     <Text style={{fontSize:18,fontWeight:"900", color:"gray", marginLeft:20}}>
                        Lorem ipsum has been the industry's
                    </Text>
                    <Text style={{fontSize:18,fontWeight:"900", color:"gray", marginLeft:20}}>
                        standard dummy text ever.
                    </Text>
                 </View>
                 <View style={{flex:0.7, flexDirection:"row", borderWidth:0}}>
                     <View style={{flex:1, flexDirection:"row", alignItems:"center", marginLeft:20,  borderWidth:0}}>
                         <Text style={{fontSize:23, fontWeight:"bold", color:"rgb(46,194,139)"}}>$30.00</Text>
                         <Text style={{fontSize:17, marginLeft:8, fontWeight:"bold", color:"gray"}}>25% Off</Text>
                     </View>
                     <View style={{flex:1, flexDirection:"column", alignItems:"center", borderWidth:0}}>
                         <Text style={{fontSize:15, fontWeight:"bold", marginRight:35, color:"rgb(61,92,109)" }}>4.5 Rating</Text>
                         <Text>{myIconfa}{myIconfa}{myIconfa}{myIconfa}{myIconfo}</Text>
                     </View>
                 </View>
             </View>
              {/* Bottom_Content */}
             <View style={{flex:0.7, backgroundColor:"rgb(234,246,255)", borderTopLeftRadius:20, borderTopRightRadius:20, borderWidth:0,}}>
            
    
                 <View style={{flex:0.6, flexDirection:"row", backgroundColor:"white",  borderWidth:0}}>
               
                    
               
                    <TouchableOpacity 
                       onPress={()=> this.setState({ desc: true})}
                       style= { this.state.desc ? {color:"midnightblue",borderWidth:4,borderBottomColor:"rgb(41,127,238)" } : { color:"gray", } , {flex:1,justifyContent:"center", alignItems:"center",    borderWidth:0}}>
                         <Text style={{fontSize:20, fontWeight:"bold", color:"rgb(61,92,109)"}}>Description</Text>
                    </TouchableOpacity>    
                    
                     <TouchableOpacity
                        onPress={()=> this.setState({ desc: false})}
                        style= { this.state.desc ? {color:"midnightblue", borderWidth:4,borderBottomColor:"rgb(41,127,238)"   }  : { color:"gray",} ,  {flex:1,  justifyContent:"center", alignItems:"center",   borderWidth:0}}>
                         <Text style={{fontSize:20, fontWeight:"bold", color:"rgb(61,92,109)"}}>Review</Text>
                    </TouchableOpacity>     
                 </View>
                 
                 <ScrollView style={{flex:0.7}}>

                 {  
                   this.state.desc ? 
                     <View>                   
                        <View style={{flex:1.5, marginTop:13, backgroundColor:"white", borderWidth:0}}>
                        <Text style={{fontSize:18,fontWeight:"900", color:"gray", marginLeft:20}}>
                            Lorem ipsum has been the industry's
                        </Text>
                        <Text style={{fontSize:18,fontWeight:"900", color:"gray", marginLeft:20}}>
                            standard dummy text ever.
                        </Text>
                 </View>
                 <View style={{flex:0.8, backgroundColor:"white",  borderWidth:0}}>
                     <Text style={{fontSize:23, backgroundColor:"white", fontWeight:"bold", marginLeft:20, color:"rgb(61,92,109)"}}>Product feature</Text>
                 </View>
                 <View style={{flex:0.6, flexDirection:"row", marginTop: 15,  backgroundColor:"white", borderWidth:0}}>
                     <Text style={{marginLeft:20, }}>{myIcon1}</Text>
                     <Text style={{fontSize:18, marginLeft:10, color:"gray", fontWeight:"800", color:"rgb(61,92,109)"}}>Lorem ipsum has bedeng.</Text>
                 </View>
                 <View style={{flex:0.6, flexDirection:"row", marginTop: 15,  backgroundColor:"white", borderWidth:0}}>
                     <Text style={{marginLeft:20, }}>{myIcon1}</Text>
                     <Text style={{fontSize:18, marginLeft:10, color:"gray", fontWeight:"800", color:"rgb(61,92,109)"}}>Lorem ipsum has bedeng.</Text>
                 </View>
                 <View style={{flex:0.6, flexDirection:"row", marginTop: 15,  backgroundColor:"white", borderWidth:0}}>
                     <Text style={{marginLeft:20, }}>{myIcon1}</Text>
                     <Text style={{fontSize:18, marginLeft:10, color:"gray", fontWeight:"800", color:"rgb(61,92,109)"}}>Lorem ipsum has bedeng.</Text>
                 </View>
                 </View> : <Text>adfda</Text> }
                     
           
                     

                       
                
                             
                        
                  
               
                 {/* :  */}
                {/* <FlatList /> */}

                 {/* } */}
                 </ScrollView>
             </View>
         </View>
         {/* Bottom_button_Block */}
         <View style={{flex:0.7, flexDirection:"row", marginTop:12,  borderWidth:0,}}>
             <View style={{flex:1,alignItems:"center", justifyContent:"center", backgroundColor:"rgb(234,246,255)", borderWidth:0, }}>
                 <Text style={{fontSize:22, fontWeight:"bold", backgroundColor:"rgb(234,246,255)", color:"rgb(61,92,109)",}}>Add to cart</Text>
             </View>
             <View style={{flex:1, alignItems:"center", backgroundColor:"rgb(46,194,139)", justifyContent:"center", borderWidth:0, }}>
                 <Text style={{fontSize:22, fontWeight:"bold", color:"white"}}>Buy now</Text>
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