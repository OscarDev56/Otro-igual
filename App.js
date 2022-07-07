import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import Tarjeta from './reducers/tarjeta'
import store from './index2'
import { AppRegistry } from "react-native";

export default function App() {
  return (<Provider store={store}>
    <View>
      <Tarjeta/>

    </View>

  </Provider>
    
   )};
  
   AppRegistry.registerComponent('Appname', () => App);