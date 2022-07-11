import {Text,View,StyleSheet, Button} from 'react-native'
import { connect} from "react-redux"

const Pagina=({navigation})=>{
    return(
        <View style={styles.contenedor}>
        <Button 
        onPress={()=>{props.next()}}
        title={'+1'}></Button>
        <Button 
        onPress={()=>{props.navigation.back()}}
        title={'-1'}></Button>
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

    
    export default connect(MapStateToProps,MapDispatchToProps)(Pagina)
    
