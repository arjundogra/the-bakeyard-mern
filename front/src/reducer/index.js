import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";

const allReducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default allReducers;
