import {Text,View} from 'react-native'
import { connect} from "react-redux"

const Pagina=({navigation})=>{
    return(
        <View style={styles.contenedor}>
        <Text style={styles.text}>{props.pagina}</Text>
        <Button 
        onPress={()=>{props.next()}}
        title={'+1'}></Button>
        <Button 
        onPress={()=>{props.back()}}
        title={'-1'}></Button>
        </View>
        
    );
};
 
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
    
