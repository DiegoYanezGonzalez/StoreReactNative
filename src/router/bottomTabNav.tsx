import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeStack from './HomeStack';
import ShoopingCartStack from './ShoopingCartStack';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
    <Tab.Navigator 
       tabBarOptions= {{
        showLabel:false,
        inactiveTintColor:'#ffbd7d',
        activeTintColor:'#e47911'
        }} >
        <Tab.Screen 
        component={HomeStack} 
        name='home' 
        options={{
            tabBarIcon:({color}) =>(
            <Entypo name="home" color={color} size={25} />
            ),
        }}

        />
        <Tab.Screen
         component={HomeScreen} 
         name="profile" 
         options={{
            tabBarIcon:({color}) =>(
            <Entypo name="user" color={color} size={22} /> 
            ),
            }}
            />
            <Tab.Screen 
            component={ShoopingCartStack} 
            name="shopping-cart"
            options={{
                tabBarIcon:({color}) =>(
                <Entypo name="shopping-cart" color={color} size={22} /> 
                ),
            }}
            />
            <Tab.Screen 
            component={HomeScreen} 
            name="more"
            options={{
                tabBarIcon:({color}) =>(
                <Entypo name="menu" color={color} size={22} /> 
                ),
            }}
            />  
    </Tab.Navigator>
    );
};

export default BottomTabNav;
