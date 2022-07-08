

 const next=()=>{
    return{
    type:'next',
    siguien:state+1,
    
    }
}


 const back=()=>{
return{ 
    type:'back',
  anterior:state-1,
   }
}

export default {next,back}