import { USER_FAILURE, USER_REQUEST, USER_SUCCESS } from "./action";

const initialState ={
   isAuth:false
}

export const reducer = (state = initialState, {type,payload}) =>{
   switch(type){
       case USER_SUCCESS:{
        return {...state, isAuth:true}
       } 
       
       case USER_FAILURE:{
        return {...state, isAuth:false}
       }

       default :{
        return state
       }
   }
}