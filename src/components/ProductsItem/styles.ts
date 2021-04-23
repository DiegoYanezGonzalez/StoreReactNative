import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root:{
      flexDirection:'row',
      margin:10,
      borderWidth:1,
      borderColor:'#d1d1d1',
      borderRadius:10,
      backgroundColor:'#fff',
      marginVertical:5
    },
    image:{
       flex:2,
       height:150,
       resizeMode:'contain'
    },
    rightContainer:{
        padding:10,
        flex:3,
        resizeMode:'contain'
    },
    title:{
     fontSize:18
    },
    price:{
      fontSize:18,
      fontWeight:'bold'
    },
    ratingsContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:5
    },
    star:{
        margin:2
    },
    oldPrice:{
        fontSize:14,
        fontWeight:"normal",
        textDecorationLine:'line-through'
    }
});

export default styles;