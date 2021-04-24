import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface ButtonProps{
    text:string;
    onPress:() => void;
}

const Button = ( {text,onPress}:ButtonProps ) => {
    return (
        <Pressable onPress ={onPress} style={styles.root} >
            <Text style={styles.text}> {text} </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    root:{
        backgroundColor:'#e47911',
        marginVertical:10,
        height:35,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        opacity:0.8,
        borderBottomWidth:1,
        borderColor:'#a15e1b'
    },
    text:{
       fontSize:16,

    }
});

export default Button;