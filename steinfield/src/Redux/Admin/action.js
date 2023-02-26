
import axios from "axios";
import {
    ADD_ADMIN_DATA_FAILURE,
    ADD_ADMIN_DATA_REQUEST,
    ADD_ADMIN_DATA_SUCCESS,
    DELETE_ADMIN_DATA_FAILURE,
    DELETE_ADMIN_DATA_REQUEST,
    DELETE_ADMIN_DATA_SUCCESS,
    GET_ADMIN_DATA_FAILURE,
    GET_ADMIN_DATA_REQUEST,
    GET_ADMIN_DATA_SUCCESS,
    UPDATE_ADMIN_DATA_FAILURE,
    UPDATE_ADMIN_DATA_REQUEST,
    UPDATE_ADMIN_DATA_SUCCESS,
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

  export const deleteAdminDataRequest = () => {
    return { type: DELETE_ADMIN_DATA_REQUEST };
  };
  
  export const deleteAdminDataSuccess = () => {
    return { type: DELETE_ADMIN_DATA_SUCCESS };
  };
  
  export const deleteAdminDataFailure = () => {
    return { type: DELETE_ADMIN_DATA_FAILURE };
  };
  
  export const updateAdminDataRequest = () => {
    return { type: UPDATE_ADMIN_DATA_REQUEST };
  };
  
  export const updateAdminDataSuccess = (payload) => {
    return { type: UPDATE_ADMIN_DATA_SUCCESS,payload };
  };
  
  export const updateAdminDataFailure = () => {
    return { type: UPDATE_ADMIN_DATA_FAILURE };
  };
  

  export const getAdminData = (dispatch) => {
    dispatch(getAdminDataRequest());
    axios
      .get(` http://localhost:8080/data`)
      .then((res) => {
        dispatch(getAdminDataSuccess(res.data));
       // console.log(res.data)
      })
      .catch((err) => dispatch(getAdminDataFailure()));
  };

  export const addAdminData = (newData) => (dispatch) => {
    dispatch(addAdminDataRequest());
    return axios
      .post(`http://localhost:8080/data`, newData)
      .then(() => {
        dispatch(addAdminDataSuccess());
      })
      .catch(() => {
        dispatch(addAdminDataFailure());
      });
  };

  export const deleteAdminData = (id) => (dispatch) => {
    dispatch(deleteAdminDataRequest());
    return axios
      .delete(`http://localhost:8080/data/${id}`)
      .then(() => {
        dispatch(deleteAdminDataSuccess());
      })
      .catch(() => {
        dispatch(deleteAdminDataFailure());
      });
  };
  //for update
  export const updateAdminData = (id,newEditData) => (dispatch) => {
    dispatch(updateAdminDataRequest());
    return axios
      .patch(`http://localhost:8080/data/${id}`,newEditData)
      .then((res) => {
        dispatch(updateAdminDataSuccess(res.data));
      })
      .catch(() => {
        dispatch(updateAdminDataFailure());
      });
  };