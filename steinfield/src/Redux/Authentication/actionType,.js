import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./action"


export const loginSuccess = () =>{
    return {type:LOGIN_SUCCESS}
}

export const loginfaliure = () =>{
    return {type:LOGIN_FAILURE}
}