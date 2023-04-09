
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

// for adding the admin data
export const addAdminDataRequest = () => {
    return { type: ADD_ADMIN_DATA_REQUEST };
  };
  
  export const addAdminDataSuccess = () => {
    return { type: ADD_ADMIN_DATA_SUCCESS };
  };
  
  export const addAdminDataFailure = () => {
    return { type: ADD_ADMIN_DATA_FAILURE };
  };


  // for getting the admin data
  export const getAdminDataRequest = () => {
    return { type: GET_ADMIN_DATA_REQUEST };
  };
  
  export const getAdminDataSuccess = (payload) => {
    return { type: GET_ADMIN_DATA_SUCCESS, payload };
  };
  
  export const getAdminDataFailure = () => {
    return { type: GET_ADMIN_DATA_FAILURE };
  };

  // for deleting the admin data
  export const deleteAdminDataRequest = () => {
    return { type: DELETE_ADMIN_DATA_REQUEST };
  };
  
  export const deleteAdminDataSuccess = () => {
    return { type: DELETE_ADMIN_DATA_SUCCESS };
  };
  
  export const deleteAdminDataFailure = () => {
    return { type: DELETE_ADMIN_DATA_FAILURE };
  };
  
  // for updating the admin data
  export const updateAdminDataRequest = () => {
    return { type: UPDATE_ADMIN_DATA_REQUEST };
  };
  
  export const updateAdminDataSuccess = (payload) => {
    return { type: UPDATE_ADMIN_DATA_SUCCESS,payload };
  };
  
  export const updateAdminDataFailure = () => {
    return { type: UPDATE_ADMIN_DATA_FAILURE };
  };
  

  // fetching API by axios for get the data
  export const getAdminData = (dispatch) => {
    dispatch(getAdminDataRequest());
    axios
      .get(` https://stienfildapi.onrender.com/data`)
      .then((res) => {
        dispatch(getAdminDataSuccess(res.data));
      })
      .catch((err) => dispatch(getAdminDataFailure()));
  };

//  for add the data
  export const addAdminData = (newData) => (dispatch) => {
    dispatch(addAdminDataRequest());
    return axios
      .post(`https://stienfildapi.onrender.com/data`, newData)
      .then(() => {
        dispatch(addAdminDataSuccess());
      })
      .catch(() => {
        dispatch(addAdminDataFailure());
      });
  };

  //  for delete the data
  export const deleteAdminData = (id) => (dispatch) => {
    dispatch(deleteAdminDataRequest());
    return axios
      .delete(`https://stienfildapi.onrender.com/data/${id}`)
      .then(() => {
        dispatch(deleteAdminDataSuccess());
      })
      .catch(() => {
        dispatch(deleteAdminDataFailure());
      });
  };
  //for update the data
  export const updateAdminData = (id,newEditData) => (dispatch) => {
    dispatch(updateAdminDataRequest());
    return axios
      .patch(`https://stienfildapi.onrender.com/data/${id}`,newEditData)
      .then((res) => {
        dispatch(updateAdminDataSuccess(res.data));
      })
      .catch(() => {
        dispatch(updateAdminDataFailure());
      });
  };