import {Text,View,StyleSheet, Button} from 'react-native'
import { connect} from "react-redux"
import {next,back} from '../actions/actions'

const Pagina2=(props)=>{
    return(
     <View style={styles.contenedor}>
          <Text style={styles.text}>asrr
        {props.pagina}
      </Text>
        <Button 
        onPress={()=>{props.next()}}
        title={'+5'}></Button>
      <Button 
        onPress={()=>{props.back()}}
        title={'-50'}></Button>
      
      <Button
            title='siguientee'
             onPress={()=>{props.navigation.navigate("Home")}}/>
     
        
        
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
fontSize: 200,
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

    
    export default connect(MapStateToProps,MapDispatchToProps)(Pagina2)
    
