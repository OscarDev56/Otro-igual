

const initialState={pagina:0};

export default (state=initialState,action)=>{
 
  switch(action.type){
    case'next':
    return{...state,pagina:state.pagina+1};
  case'back':
    return {...state,pagina:state.pagina-1};
  default:
    return state

}
};
