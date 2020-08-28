import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({ cartState: cartReducer });

export default rootReducer;
