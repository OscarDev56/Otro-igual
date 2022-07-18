import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker } from 'react-native-maps';
import act from '../actions/ActualizarCoordenadas'
import { connect } from 'react-redux'


function Map(props) {


  return (
    <View style={styles.container}>
      <MapView
      style={styles.map}
      
      initialRegion={props.nState}
      >
         <Marker 
           coordinate={props.nState}
           callout={'hola'}
          draggable={true}
          onDragEnd={(payloud)=>{props.act(payloud
           
          )}}
          >
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});



const DispatchToProps = (dispatch)=>{
    return {
     act:(payloud)=>dispatch(act(payloud)),
    }
  };
const StateToProps = (state) =>{
    return{
      nState:state.reducer2.coordenadas
    }
  };
  

  
 
  
  
  export default connect(StateToProps,DispatchToProps)(Map)