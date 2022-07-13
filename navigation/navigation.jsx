import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {Text} from "react-native"
import Tarjeta from '../componentes/tarjeta';
import Pagina from "../componentes/pagina";
import Pagina2 from "../componentes/pagina";

const Stack = createNativeStackNavigator();

 const MainStack = (props) => {
     console.log("weps",props)
    return(
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name='Home' component={Tarjeta}/>
                <Stack.Screen name='P1' component={Pagina}/>
                <Stack.Screen name='P2' component={Pagina2}/>
                
                
               
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack;