import { createContext } from "react";
const Context = createContext();

export const CartInit = {
    CartList:[],
}
export const CartReducer = (state, actions)=>{
    const CartList = [...state.CartList];
    const index = CartList.findIndex( (item) => item.id === actions.payload.id );
    console.log(index)
    switch (actions.type) {
     case "ADD_TO_CART":
      if(index === -1){
        CartList.push(actions.payload);
      } else {
        CartList[index].qty += actions.payload.qty;
      }
      return { ...state, CartList }

    case "CHANGE_CATR_QTY":
      CartList[index].qty = actions.payload.data;
      return { ...state, CartList }

    case "DELETE_CART_ITEM":
      CartList.splice(index, 1);
      return { ...state, CartList }

    default: 
    return state
    }
};

export default Context;