import React from 'react';
import {StyleSheet,TouchableOpacity, Text, View,Image} from 'react-native';
import laImg from './assets/img3.png';

export default function App() {
  return (
    
    <View style={styles.container}>
     
      <Text style={styles.texto}>
        Bienvenido a la Dogería!
      </Text> 
      <Image
      source={laImg}
      style={styles.img}
      ></Image>
      <TouchableOpacity
       style={styles.boton}>
        <Text 
        style={styles.botonText}>
          Ordena Aqui!
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'yellow',
    alignItems: 'center',
    },
  
    texto:{
      color:'red',
      fontSize:30,
    margin:50},

    img:{margin:100,
      borderRadius:150,
        height: 300,
        width: 300},

    boton:{
      flex:1,
          height:100,
          width:80
        },
        botonText:{
          backgroundColor:'red'
        },
  
   

  
});
