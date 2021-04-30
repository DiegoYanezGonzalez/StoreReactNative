import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/Home';

const Router = () => {
    return (
        <NavigationContainer>
           <HomeScreen></HomeScreen>  
        </NavigationContainer>
    )
}

export default Router;
