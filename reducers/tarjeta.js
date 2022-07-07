

import { connect } from "react-redux"
import {next,back} from './actions'
import {TouchableOpacity, Text, View} from 'react-native';







const Tarjeta=()=>{
    return(
        <View style={styles.container}>
     
      <Text>
    bienvenidos
      </Text> 
    
      <TouchableOpacity>
        <Text>
          press me
        </Text>
      </TouchableOpacity>
      

    </View>
  )
};




export default connect(null,{next,back})(Tarjeta)