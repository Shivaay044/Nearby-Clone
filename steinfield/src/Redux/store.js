import { combineReducers, legacy_createStore } from "redux";
import {reducer as AdminReducer} from "../Redux/Admin/reducer"

const rootReducer = combineReducers({
   // reducers here
   AdminReducer
})

export const store = legacy_createStore(rootReducer)


/*

 Make the folder indside redux folder and in the same put the:-
 1. actionTypes
 2. action
 3. reducer

*/