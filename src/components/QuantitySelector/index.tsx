import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const QuantitySelector = () => {
    const onMimus = () => {

    }

    const onPlus = () => {

    }
    return (
        <View style={styles.root} >
            <Pressable onPress={onMimus} style={styles.button}>
                <Text style={styles.butonText}>-</Text> 
            </Pressable>

            <Text style={styles.quantity}>0</Text>

            <Pressable onPress={onPlus} style={styles.button} >
                <Text style={styles.butonText} >+</Text> 
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
       flexDirection:'row',
       justifyContent:'space-between',
       borderWidth:1,
       borderColor:'#e3e3e3',
       width:130
    },
    button:{
       width:25,
       height:25,
       alignItems:'center',
       justifyContent:'center',
       backgroundColor:'#d1d1d1'
    },
    butonText:{
      fontSize:18
    },
    quantity:{
        color:'#007'
    }
});

export default QuantitySelector;
