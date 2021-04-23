import React from 'react';
import { View, StyleSheet, FlatList} from 'react-native';
import ProductItem from '../../components/ProductsItem';
import products from '../../data/products';

const HomeScreen = () => {
    return (
        <View style={styles.page}>
            <FlatList
               data={products}
               renderItem={({item} ) =><ProductItem item={item} />}
            />
            
        </View>
    );
};

const styles = StyleSheet.create({
     page:{
         padding:10
     }    
});

export default HomeScreen;
