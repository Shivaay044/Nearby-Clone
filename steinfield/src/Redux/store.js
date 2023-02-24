import {applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as AdminReducer} from "../Redux/Admin/reducer"
import thunk from "redux-thunk";
const rootReducer = combineReducers({
   // reducers here
   AdminReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))


/*

 Make the folder indside redux folder and in the same put the:-
 1. actionTypes
 2. action
 3. reducer

*/