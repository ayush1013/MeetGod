import * as types from "./actionTypes";
import axios from "axios";

export const getData = (params)=> (dispatch)=>{
    dispatch({type: types.GET_DATA_REQUEST});
    axios.get(`https://sleepy-clam-kimono.cyclic.app/products${params}`)
        .then((res)=>{
            console.log("data from action",res.data);
            dispatch({type: types.GET_DATA_SUCCESS, payload:res.data});
        })
        .catch((err)=>{
            console.log(err);
            dispatch({type: types.GET_DATA_ERROR});
        })
}

export const getSingleData = (id) => (dispatch)=>{
    dispatch({type: types.GET_DATA_REQUEST});
    axios.get(`https://sleepy-clam-kimono.cyclic.app/products/${id}`)
        .then((res)=>{
            // console.log("data from action",res.data);
            dispatch({type: types.GET_SINGLEDATA_SUCCESS, payload:res.data});
        })
        .catch((err)=>{
            console.log(err);
            dispatch({type: types.GET_DATA_ERROR});
        })
}

export const getDataByCategory = (category)=> (dispatch)=>{
    dispatch({type: types.GET_DATA_REQUEST});
    axios.get(`https://sleepy-clam-kimono.cyclic.app/products?category=${category}`)
        .then((res)=>{
            console.log("data from action",res.data);
            dispatch({type: types.GET_DATA_SUCCESS, payload:res.data});
        })
        .catch((err)=>{
            console.log(err);
            dispatch({type: types.GET_DATA_ERROR});
        })
}