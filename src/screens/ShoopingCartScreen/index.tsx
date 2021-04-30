import React from 'react';
import { View, StyleSheet, FlatList,Text} from 'react-native';
import CartProductItem from '../../components/CartProductsItem';
import Button from '../../components/Button';
import products from '../../data/cart';


const ShoopingCartScreen = () => {

const totalPrice = products.reduce(
    (summedPrice, product) => (
    summedPrice + product.item.price * product.quantity) ,
    0,
);

    return (
        <View style={styles.page}>
            

            <FlatList
               data={products}
               renderItem={({item} ) => 
               <CartProductItem cartItem={item} />
               //render quantity selector
               }
               showsVerticalScrollIndicator={false}
               ListHeaderComponent={() => (
                <View>
                <Text style={{fontSize:18,fontWeight:'bold'  }}>
                    Subtotal({products.length} items): 
                    {''}
                <Text style={{fontSize:18, color:'#e47911',fontWeight:'bold'}}>
                     {totalPrice.toFixed(2)} 
                    </Text>
                    </Text>

                    <Button 
                    text="Proceed to checkout" 
                    onPress={() => console.log('go to checkout')}
                     
                    />

                    </View>

               )}
            />
            
        </View>
    );
};

const styles = StyleSheet.create({
     page:{
         padding:10
     }    
});

export default ShoopingCartScreen;
