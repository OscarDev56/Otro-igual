


export const initialState={pagina:0};

export default (state=initialState,action)=>{
  console.log(action.type)
  switch(action.type)
  {case'next':
  console.log('weps')
  return state+1;
  case'back':
  console.log("what up")
  return state-1;
  default:return state

}
};
