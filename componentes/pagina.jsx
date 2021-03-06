import {Text,View,StyleSheet, Button} from 'react-native'
import { connect} from "react-redux"
import {next,back} from '../actions/actions'

const Pagina=(props)=>{
    return(
      
        <View style={styles.contenedor}>
          <Text style={styles.text}>
        {props.pagina}
      </Text>
        <Button 
        onPress={()=>{props.next()}}
        title={'+1'}></Button>
        <Button 
        onPress={()=>{props.back()}}
        title={'-1'}></Button>
        <Button
           title='Anterior'
           onPress={()=>{props.navigation.navigate("Home")}}/>
           <Button
            title='Siguiente'
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
color: 'red',
fontWeight: 'bold',
fontSize: 90,
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

    
    export default connect(MapStateToProps,MapDispatchToProps)(Pagina)
    
