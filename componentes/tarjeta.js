

import { connect} from "react-redux"
import {next,back} from '../actions/actions'
import {StyleSheet,Button, Text, View,} from 'react-native';




const Tarjeta=(props,{navigation})=>{

  return(
    <View style={styles.contenedor}>
    <Text style={styles.text}>{props.pagina}</Text>
    <Button 
    onPress={()=>{props.next()}}
    title={'+1'}></Button>
    <Button 
    onPress={()=>{props.back()}}
    title={'-1'}></Button>
    <Button
    title='siguiente'
    onPress={()=>{navigation.navigate('pagina')}}/>
     
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
