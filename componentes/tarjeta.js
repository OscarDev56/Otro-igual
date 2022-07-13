

import { connect} from "react-redux"
import {next,back} from '../actions/actions'
import {StyleSheet,Button, Text, View,} from 'react-native';




const Tarjeta=(props)=>{
 
  return(
    <View style={styles.contenedor}>
      <Text 
      onPress={()=>{props.navigation.navigate("Pagina")}}
      style={styles.text}>
        {props.pagina}
      </Text>
    <Button 
    onPress={()=>{props.next()}}
    title={'+1'}></Button>
    <Button 
    onPress={()=>{props.back()}}
    title={'-1'}></Button>
    <Button
    title='siguiente'
    onPress={()=>{props.navigation.navigate("P1")}}/>
     <Button
           title='ir a pagina 2'
           onPress={()=>{props.navigation.navigate("P2")}}/>
     
  </View>
  
);
};

const styles = StyleSheet.create({
 
   contenedor:{    
    backgroundColor: 'black',
   justifyContent:"center",
  alignContent:"center",
  flex:1,

  },
  text: {
alignSelf:"center",
margin:20,
justifyContent:"center",
alignContent:"center",
color: 'blue',
fontWeight: 'bold',
fontSize: 150,
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
