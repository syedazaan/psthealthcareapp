import React from 'react';
import { StyleSheet,Text,View, KeyboardAvoidingView}  from 'react-native';
import { createAppContainer, TabNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';  
import { createBottomTabNavigator } from 'react-navigation-tabs';


import { styles1 } from  "./styles/styles";

import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import ProductDetails from './screens/ProductDetails';
import Messages from './screens/Messages';
import Ayurveda from './screens/Ayurveda';
import Homepathy from './screens/Homepathy';

      // const MainNavigator = createStackNavigator(
      //   { 
      //     Home: {screen: HomeScreen},
      //     Add:    {screen: AddNewContactScreen},
      //     View:  {screen: ViewContactScreen},
      //     Edit:    {screen: EditContactScreen},
      //   },
      //    {
      //     defaultNavigationOptions: {
      //       headerTintColor: "#fff",
      //       headerStyle: {
      //         backgroundColor: "#b83227",
      //       },
      //       headerTitleStyle: {
      //         color: "#fff"
      //       }
      //     }
      //    }
      // );

      // const App = createAppContainer(MainNavigator);
      // export default App;

      // ------ Main Navigation

      export const MainNavigator = createStackNavigator(
      { 
          Login: {screen: Login},
          Dashboard: {screen: Dashboard},
          Messages:    {screen: Messages},
          Product:  {screen: ProductDetails},
          Ayurveda:    {screen: Ayurveda},
          Homepathy: {screen: Homepathy},
       },
       {
         headerMode: 'none',
       }


    
   
);

const App = createAppContainer(MainNavigator,);
export default App;

// export default class App extends React.Component {
//      render()  {
//        return (
//           <View style={styles. container}>
//                     <Login />
                   
                    
//                       <Dashboard />
                     
                    
//                     < ProductDetails />
//                     < Messages />
//                     < Ayurveda />
//                     <Homepathy />
//             </View>
//      );
//    }
// }

// const styles = StyleSheet.create({
  // container: {
    // flex:1,
  
    // backgroundColor:'#282830',
    // alignItems:'center',
    // justifyContent:'center',
  // },
// });