

export const initialState={
  pagina:0,
};

 const reducer = (state=initialState, actions)=>{
  if(actions.type === 'next'){
    return{
      ...state,
      pagina:state.pagina+1}
  }
  if(actions.type === 'back'){
    return{
      ...state,
      pagina:state.pagina-1
    }
  }
  else{
    return{
      state
    }
  }

  

}
export default reducer