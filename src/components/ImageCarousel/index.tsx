import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, useWindowDimensions } from 'react-native';



const ImageCarousel = ({images} : {images:[string] }) => {

const windoWidth = useWindowDimensions().width;

    return (
        <View style={styles.root} >
            <FlatList 
            data= {images}
            renderItem= {({item} ) =>   (
                <Image 
                style={[styles.image,{width:windoWidth - 40}]} 
                source={{uri:item}}/>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={windoWidth - 40}
            snapToAlignment={'center'}
            decelerationRate={'fast'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root:{

    },
    image:{
        margin:10,
        height:250,
        resizeMode:'contain',
    }
});

export default ImageCarousel;
