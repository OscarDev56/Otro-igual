
const posicionActual={coordenadas:{
  latitude: 48.8534100,
  longitude: 2.3378000,
  latitudeDelta: 0.12,
  longitudeDelta: 0.065}};

export default ( sState = posicionActual , action )=>{
 
  switch ( action.type ){
    case 'NewLoc' :
     return{...sState,coordenadas:action.payloud}
     default: return sState
    }
  }; 
