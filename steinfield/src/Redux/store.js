import { combineReducers, legacy_createStore } from "redux";

const rootReducer = combineReducers({
   // reducers here
})

export const store = legacy_createStore(rootReducer)


/*

 Make the folder indside redux folder and in the same put the:-
 1. actionTypes
 2. action
 3. reducer

*/