

import { connect} from "react-redux"
import {next,back} from './actions'
import {StyleSheet,Button, Text, View,} from 'react-native';


const Tarjeta=(props)=>{
console.log(props)
  return(
    <View style={styles.contenedor}>
    <Text style={styles.text}>Pagina principal</Text>
    <Button 
    onPress={()=>{props.next()}}
    title={'next'}></Button>
    <Button 
    onPress={()=>{props.back()}}
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


const MapDispatchToProps = (dispatch)=>{
return {
  next:()=>dispatch(next()),
  back:()=>dispatch(back())
}
}

const MapStateToProps = (state) =>{
  return{
    pagina:state=>state.pagina
  }
}

export default connect(MapStateToProps,MapDispatchToProps)(Tarjeta)
