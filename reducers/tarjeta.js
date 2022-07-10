

import { connect} from "react-redux"
import {next,back} from './actions'
import {StyleSheet,Button, Text, View, Touchable,} from 'react-native';
import { TouchableOpacity } from "react-native-web";



const Tarjeta=(props)=>{

  return(
    <View style={styles.contenedor}>
    <Text style={styles.text}>{props.pagina}</Text>
    <Button 
    onPress={()=>{props.next()}}
    title={'back'}></Button>
    <Button 
    onPress={()=>{props.back()}}
    title={'back'}></Button>
  </View>
);
};

const styles = StyleSheet.create({
 
   contenedor:{    
    backgroundColor: 'black',
   justifyContent:"center",
  alignContent:"center",

  },
  text: {
    
    justifyContent:"center",
  alignContent:"center",

color: 'blue',
fontWeight: 'bold',
fontSize: 30,
},


});


const MapDispatchToProps = (dispatch)=>{
return {
  next:()=>dispatch(next()),
  back:()=>dispatch(back())
}
}

const MapStateToProps = (state) =>{
  return{
    pagina:state.reducer.pagina
  }
}

export default connect(MapStateToProps,MapDispatchToProps)(Tarjeta)
