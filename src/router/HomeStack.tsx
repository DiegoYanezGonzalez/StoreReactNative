import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from './bottomTabNav';
import HomeScreen from '../screens/Home';
import ProductScreen from '../screens/ProductScreen';


const Stack = createStackNavigator();

const HomeStack = () => {
    return (
    
           <Stack.Navigator>
               <Stack.Screen component={HomeScreen} name="HomeScreen"
               options={{title:'Home'}}
                />

               <Stack.Screen component={ProductScreen} name="ProductDetails" />
           </Stack.Navigator>
    
           
        
    );
};

export default HomeStack;
