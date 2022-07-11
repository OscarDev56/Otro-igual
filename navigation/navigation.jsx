import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {Tarjeta} from '../componentes/tarjeta';
import {Pagina} from "../componentes/pagina";

const stack=createNativeStackNavigator();

export const MainStack=()=>{
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.screen name='home' component={Tarjeta}/>
                <stack.screen name='pagina' component={Pagina}/>
            </stack.Navigator>

        </NavigationContainer>

    )
}
