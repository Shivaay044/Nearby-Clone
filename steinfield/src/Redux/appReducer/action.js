import { GET_PRODUCT_ERROR, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes"
import axios from 'axios'
export const getProductRequestAction =()=>{
    return {type:GET_PRODUCT_REQUEST}
}
export const getProductSuccessAction =(payload)=>{
    return {type:GET_PRODUCT_SUCCESS,payload}
}
export const getProductErrorAction =()=>{
    return {type:GET_PRODUCT_ERROR}
}


export const getProducts=(dispatch)=>{
    dispatch(getProductRequestAction)
    axios.get(`http://localhost:8080/data?Category=resturant`).then((res)=>{
        console.log(res.data)
  dispatch(getProductSuccessAction(res.data))
    }).catch(()=>{
   dispatch(getProductErrorAction)   
    }) 
  }