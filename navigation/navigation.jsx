import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {Text} from "react-native"
import Tarjeta from '../componentes/tarjeta';
import Pagina from "../componentes/pagina";
import Pagina2 from "../componentes/pagina2";
import  Pagina3  from "../componentes/pagina3";
import Map
 from "../componentes/maps";
const Stack = createNativeStackNavigator();

 const MainStack = () => {
    
    return(
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name='Home' component={Tarjeta}/>
                <Stack.Screen name='P1' component={Pagina}/>
                <Stack.Screen name='P2' component={Pagina2}/>
                <Stack.Screen name='P3' component={Pagina3}/>
                <Stack.Screen name='map' component={Map}/>
                
               
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack;