import React from 'react';
import store from './index2';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import {MainStack} from './navigation/navigation.jsx';

export default function App() {
  return (
 <Provider store={store}>
    <SafeAreaView >
     <MainStack/>
    </SafeAreaView>
    </Provider>
  
    
   )};
  
  