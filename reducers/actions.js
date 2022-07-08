

 const next=()=>{
   console.log('next')
    return{
    type:'next',
    
    }
}


 const back=()=>{
   console.log("back")
return{ 
    type:'back',
   }
}

export {next,back}