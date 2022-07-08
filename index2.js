

import {createStore,combineReducers} from "redux";
import reducer from './reducers/reducer.js';






const store = createStore(combineReducers({reducer}));

export default store;

