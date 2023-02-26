import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./action";

const initialState ={
   isAuth:false
}

export const reducer = (state = initialState, {type,payload}) =>{
   switch(type){
       case LOGIN_SUCCESS:{
        return {...state, isAuth:true}
       } 
       
       case LOGIN_FAILURE:{
        return {...state, isAuth:false}
       }

       default :{
        return state
       }
   }
}