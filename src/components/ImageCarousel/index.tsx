import React, { useState , useCallback} from 'react';
import { View, Text, FlatList, Image, StyleSheet, useWindowDimensions } from 'react-native';

const ImageCarousel = ({images} : {images:string[] }) => {

const [activeIndex, setActiveIndex] = useState(0);    

const windoWidth = useWindowDimensions().width;

const onFlatListUpdate = useCallback (({ viewableItems }) =>{
    if (viewableItems.length > 0){
        setActiveIndex(viewableItems[0].index || 0); 
    }
  console.log(viewableItems);
 },[]);

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
            snapToInterval={windoWidth - 20}
            snapToAlignment={'center'}
            decelerationRate={'fast'}
             viewabilityConfig={{
                 viewAreaCoveragePercentThreshold:50,
                 
             }}
            onViewableItemsChanged={onFlatListUpdate}
            />
            
            {/* Points Images Indicator */}
              <View style={styles.dots}>
              {images.map((images,index) =>(
                <View 
                style={[styles.dot, 
                    {
                      backgroundColor:index === activeIndex ? '#c9c9c9' : '#ededed',
                    } 
                      ]} />
                   ))}
              </View>
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
    },
    dot:{
        width:14,
        height:14,
        borderRadius:25,
        borderWidth:1,
        backgroundColor:'#ededed',
        borderColor:'#c9c9c9',
        margin:7
    },
    dots:{
        flexDirection:'row',
        justifyContent:'center'
    }
});
export default ImageCarousel;
