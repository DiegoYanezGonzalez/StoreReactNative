import React from 'react';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title:{
    fontSize:18
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
      fontWeight:"bold"
   }
  });

export default styles;

