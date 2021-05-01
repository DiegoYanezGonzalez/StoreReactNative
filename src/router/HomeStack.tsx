import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from './bottomTabNav';
import HomeScreen from '../screens/Home';
import ProductScreen from '../screens/ProductScreen';
import { Text, SafeAreaView, View , TextInput} from 'react-native';
import Entype from 'react-native-vector-icons/Entypo'

interface HeaderComponentProps{
    searchValue:string;
    setSearchValue:() => void;
}

const Stack = createStackNavigator();

const HeaderComponent = ({searchValue,setSearchValue}:HeaderComponentProps) =>{
    return(
        <SafeAreaView style={{backgroundColor:'#22e3dd'}}>
            <View style={{margin:10,padding:5,
                backgroundColor:'white', flexDirection:'row',
                alignItems:'center'}}>
            <Entype name="search" size={20}  />
            <TextInput style={{height:40,borderRadius:3,marginLeft:10}} 
            placeholder="Search..." 
            value={searchValue}
            onChangeText={setSearchValue}
            />

            </View>
            
        </SafeAreaView>
    )
}

const HomeStack = () => {

const [searchValue,setSearchValue] = useState('');

    return (
           <Stack.Navigator screenOptions={{
               header:() =><HeaderComponent searchValue={searchValue} setSearchValue={setSearchValue} />
           }}>
               <Stack.Screen name="HomeScreen" options={{title:'home'}}>
                   {() => <HomeScreen/> }
               </Stack.Screen>

               <Stack.Screen component={ProductScreen} name="ProductDetails" />
              
           </Stack.Navigator>     
    );
};

export default HomeStack;
