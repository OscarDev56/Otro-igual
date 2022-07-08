

import { connect } from "react-redux"
import {next,back} from './actions'
import {StyleSheet,Button, Text, View,} from 'react-native';


const Tarjeta=(next,back)=>{
  
  return(
    <View style={styles.contenedor}>
    <Text style={styles.text}>Pagina principal</Text>
    <Button 
    onPress={()=>{next()}}
    title={'next'}></Button>
    <Button 
    onPress={()=>{back()}}
    title={'back'}></Button>
  </View>
);
};

const styles = StyleSheet.create({

text: {
justifyContent:"center",
  alignContent:"center",
color: 'blue',
fontWeight: 'bold',
fontSize: 30,
},


});

export default connect(null,{next,back})(Tarjeta)
