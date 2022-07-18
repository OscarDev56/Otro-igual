

import {createStore,combineReducers} from "redux";
import reducer from './reducers/reducer.js';
import reducer2 from './reducers/navReducer.jsx'





const store = createStore(combineReducers({reducer,reducer2}));

export default store;

