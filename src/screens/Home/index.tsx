import React from 'react';
import { View, StyleSheet} from 'react-native';
import ProductItem from '../../components/ProductsItem';

const HomeScreen = () => {
    return (
        <View style={styles.page}>
            <ProductItem/>
       
        </View>
    );
};

const styles = StyleSheet.create({
     page:{
         padding:10
     }    
});

export default HomeScreen;
