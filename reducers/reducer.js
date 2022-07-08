


export const initialState={pagina:0};

export default (state=initialState,actions)=>{
  switch(actions.type)
  {case'next':return state+1;
  case'back':return state-1;
  default:return state

}
};
