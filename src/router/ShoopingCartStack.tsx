import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ShoopingCartScreen from '../screens/ShoopingCartScreen';
import AddressScreen from '../screens/AddressScreen';



const Stack = createStackNavigator();

const ShopingCartStack = () => {
    return (
    
           <Stack.Navigator>
               <Stack.Screen component={ShoopingCartScreen} 
               name="cart"
               options={{title:'Shooping Cart'}}
                />

               <Stack.Screen component={AddressScreen} 
               name="Address"
               options={{title:'Address'}}
               />
           </Stack.Navigator>
    
           
        
    );
};

export default ShopingCartStack;
