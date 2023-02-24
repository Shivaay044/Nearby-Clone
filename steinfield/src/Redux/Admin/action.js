
import axios from "axios";
import {
    ADD_ADMIN_DATA_FAILURE,
    ADD_ADMIN_DATA_REQUEST,
    ADD_ADMIN_DATA_SUCCESS,
    GET_ADMIN_DATA_FAILURE,
    GET_ADMIN_DATA_REQUEST,
    GET_ADMIN_DATA_SUCCESS,
} from "./actionType"

export const addAdminDataRequest = () => {
    return { type: ADD_ADMIN_DATA_REQUEST };
  };
  
  export const addAdminDataSuccess = () => {
    return { type: ADD_ADMIN_DATA_SUCCESS };
  };
  
  export const addAdminDataFailure = () => {
    return { type: ADD_ADMIN_DATA_FAILURE };
  };


  //getadmin
  export const getAdminDataRequest = () => {
    return { type: GET_ADMIN_DATA_REQUEST };
  };
  
  export const getAdminDataSuccess = (payload) => {
    return { type: GET_ADMIN_DATA_SUCCESS, payload };
  };
  
  export const getAdminDataFailure = () => {
    return { type: GET_ADMIN_DATA_FAILURE };
  };

  export const getAdminData = (dispatch) => {
    dispatch(getAdminDataRequest());
    axios
      .get(` http://localhost:8080/product`)
      .then((res) => {
        dispatch(getAdminDataSuccess(res.data));
        console.log(res.data)
      })
      .catch((err) => dispatch(getAdminDataFailure()));
  };

  export const addAdminData = (newData) => (dispatch) => {
    dispatch(addAdminDataRequest());
    return axios
      .post(`http://localhost:8080/product`, newData)
      .then(() => {
        dispatch(addAdminDataSuccess());
      })
      .catch(() => {
        dispatch(addAdminDataFailure());
      });
  };