import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.page}>
            <View style={styles.root} >
                <Image 
                style={styles.image}
                source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg'}}
                />

                <View style={styles.rightContainer}>
                    <Text style={styles.title}
                    numberOfLines={3}
                    >Logitech MX Master 3 Advanced Wireless Mouse for Mac - Bluetooth/USB</Text>
                {/* RATINGS */}

                  <Text style={styles.price}                  
                  >from $13.57</Text>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page:{

      padding:10
    },
    root:{
      flexDirection:'row',
      margin:10,
      borderWidth:1,
      borderColor:'#d1d1d1',
      borderRadius:10,
      backgroundColor:'#fff',

    },
    image:{
       flex:2,
       height:150
    },
    rightContainer:{
        padding:10,
        flex:3,
        resizeMode:'contain'
    },
    title:{
     width:'100%',
    },
    price:{

    }
});

export default HomeScreen;
