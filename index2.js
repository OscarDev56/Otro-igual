import {createStore} from "react";
import {reducer} from './reducers/reducer.js';




const store = createStore(reducer);

export default store;