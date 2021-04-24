import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import QuantitySelector from '../../components/QuantitySelector';
import styles from './styles';
import product from '../../data/product';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';



const ProductScreen = () => {

  const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
  const [quantity, setQuantity] = useState(1);

    return (
        <View style={styles.root} >
            <Text style={styles.title}> {product.title} </Text>
       
       {/* Image carousel */}

       <ImageCarousel  images={product.images} />

       {/* Option selector */}

         <Picker
         selectedValue={selectedOption}
         onValueChange={(itemValue,itemIndex) =>
            setSelectedOption(itemValue)
        }>
             {product.options.map(option =>( 
                 <Picker.Item label={option} value={option} />
             ))}
         </Picker>



       {/* Price */}
       <Text style={styles.price}> 
       from ${product.price}
       {product.oldPrice && (
          <Text style={styles.oldPrice}> ${product.oldPrice} </Text>
       )} 
       </Text>
       {/* Description */}
      <Text style={styles.description} >
         {product.description}
      </Text>


        {/* quantity selector */}

        <View>
              <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        </View>

        {/* Button */}

        <Button text={'Add to Cart'} onPress = {() => {console.warn('Add to Cart')}}/>
        <Button text={'Buy Now'} onPress= {() => {console.warn('Buy Now')}}/>

        </View>
    )
}

export default ProductScreen;
