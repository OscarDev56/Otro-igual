import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import Tarjeta from './reducers/tarjeta'
import store from './index2'
import { AppRegistry } from "react-native";

export default function App() {
  return (
  <View>
    <Provider store={store}>
      <Tarjeta/>
    </Provider>
  </View>
    
   )};
  
  