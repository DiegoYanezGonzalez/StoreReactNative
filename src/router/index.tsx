import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from './bottomTabNav';
import { NavigationContainer } from '@react-navigation/native';

const Root = createStackNavigator();

const Router = () => {
    return (
    <NavigationContainer>
        <Root.Navigator>
               <Root.Screen component={BottomTabNav} name="HomeTabs" />
           </Root.Navigator>
    </NavigationContainer>
           
        
    )
}

export default Router;
