import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import QuantitySelector from '../../components/QuantitySelector';
import styles from './styles';
import product from '../../data/product';



const ProductScreen = () => {

  const [selectedOption, setSelectedOption] = useState('')


    return (
        <View style={styles.title}><Text> {product.title} </Text>
       
       {/* Image carousel */}

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
              <QuantitySelector/>
        </View>

        {/* Button */}

        </View>
    )
}

export default ProductScreen;
