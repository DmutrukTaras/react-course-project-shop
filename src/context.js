import { createContext, useReducer } from "react";
import { reduser } from "./reduser";

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow:false,
    alertMsg: ''
}

export const ContextProvider = ({children}) =>{

    const [value, dispatch] = useReducer(reduser, initialState);


    value.setItems = (data) =>{
        dispatch({type: 'SET_ITEM', payload:data})
    }

    value.setLoading = (value) =>{
        dispatch({type: 'SET_LOADING', payload:value})
    }

    value.closeAlert = () =>{
        dispatch({type: 'CLOSE_ALERT'})
    }

    value.removeFromBasket = (itenId) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload:{id:itenId}})
    }

    value.addToBasket = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload:{item:item}})
    }

    value.handleBasketShow = () => {
        dispatch({type: 'BASKET_SHOW'})
    }

    value.plusBasketItem = (itenId) => {
        dispatch({type: 'PLUS_BASKET_ITEM', payload:{id:itenId}})
    }

    value.minusBasketItem = (itenId) => {
        dispatch({type: 'MINUS_BASKET_ITEM', payload:{id:itenId}})
    }

    return (
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    );
};