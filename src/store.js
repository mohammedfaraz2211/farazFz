import { configureStore } from "@reduxjs/toolkit"
import { DISPATCH_PRODUCT } from "./constant";

const INITAIL_VALUE = {
  product: [],
  filterSearch: "",
  carts : [],
}

const store = configureStore({
  reducer: (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case DISPATCH_PRODUCT:
        return {
          ...state,
          product: payload.products
        }
      case "filteronclick":
        return {
          ...state,
          filterSearch: payload.filterSearch
        }
      case "add_Product":
        const { category,id,image,price,title , rate} = payload.object
        return {
          ...state,
          product: [...state.product, {category , id , image, price ,title ,rating :{rate}}]
        }
      case "AddToCart":
        const {product} = payload;
        return{
          ...state,
         carts : [...state.carts,{...product, quantity : 1}],
        }
      case "UpdateCart":
        const {newCart}= payload
        return{
          ...state,
          carts :  [...state.carts , newCart]
        }
      default:
        return INITAIL_VALUE;
    }
  }
})
export default store;