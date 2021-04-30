import { Picker } from '@react-native-picker/picker';
import countryList from 'country-list';
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const countries = countryList.getData();
console.log(countries);

const AddressScreen = () => {
console.log(countryList.getCodeList);

    return (
        <View style={styles.row} > 
            <Picker>
                {countries.map(country => (
                     <Picker.Item key={country.code} value={country.code} label={country.name} />
                   ))}
                
            </Picker>
        </View>
    );
};
export default AddressScreen;
