import * as types from "./actionTypes";
import axios from "axios";

export const getData = ()=> (dispatch)=>{
    dispatch({type: types.GET_DATA_REQUEST});
    axios.get("https://sleepy-clam-kimono.cyclic.app/products")
        .then((res)=>{
            console.log("data from action",res);
            dispatch({type: types.GET_DATA_SUCCESS, payload:res.data});
        })
        .catch((err)=>{
            console.log(err);
            dispatch({type: types.GET_DATA_ERROR});
        })
}

