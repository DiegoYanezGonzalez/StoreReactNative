import React from 'react';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root:{
    padding:10,
    backgroundColor:'white'
  },
  title:{
    fontSize:18,
  
   },
   price:{
     fontSize:18,
     fontWeight:'bold'
   },
   oldPrice:{
       fontSize:14,
       fontWeight:"normal",
       textDecorationLine:'line-through'
   },
   description:{
      marginVertical:10,
      lineHeight:25
   }
  });

export default styles;

