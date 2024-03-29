import { combineReducers, legacy_createStore,applyMiddleware } from "redux";

import {reducer as AdminReducer} from "../Redux/Admin/reducer"
import thunk from "redux-thunk";
import { reducer as appReducer } from "./appReducer/reducer";

import { reducer as authReducer } from "./Authentication/reducer";




const rootReducer = combineReducers({
   // reducers here
 appReducer,  
 authReducer,
 AdminReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))


/*

 Make the folder indside redux folder and in the same put the:-
 1. actionTypes
 2. action
 3. reducer

*/