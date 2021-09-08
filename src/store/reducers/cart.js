import { ADD_ITEM, DELETE_ITEM, REMOVE_ITEM } from '../actions/actionTypes.js';
import {addItem, removeItem} from './cart.utils.js';

const initialState = {
  cartItems: []
};

const cart_reducer = (state = initialState,action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {...state,cartItems:addItem(state.cartItems,action.payload)};
    case REMOVE_ITEM:
      return {...state,cartItems:removeItem(state.cartItems,action.payload)};
    case DELETE_ITEM:
      return {...state,cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)};
    default:
      return state;
  }
}

export default cart_reducer;