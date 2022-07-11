import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {Text} from "react-native"
import Tarjeta from '../componentes/tarjeta';
import Pagina from "../componentes/pagina";

const Stack = createNativeStackNavigator();

 const MainStack = (props) => {
     console.log("weps",props)
    return(
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name='Home' component={Tarjeta}/>
                <Stack.Screen name='Pagina' component={Pagina}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack;