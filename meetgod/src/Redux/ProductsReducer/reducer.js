import * as types from "./actionTypes";

const initialState = {
    products: [],
    singleProduct: {},
    isError: false,
    isLoading: false,
}

export const reducer = (state = initialState, action)=>{
    const {type, payload} = action;
    switch (type){
        case types.GET_DATA_REQUEST:
            return {...state, isLoading:true}
        case types.GET_DATA_SUCCESS:
            return {...state, isLoading:false, products: payload}
        case types.GET_DATA_ERROR:
            return {...state, isLoading:false, isError: true}
        case types.GET_SINGLEDATA_SUCCESS:
            return {...state, isLoading:false, singleProduct: payload}
        default:
            return state
    }
}
