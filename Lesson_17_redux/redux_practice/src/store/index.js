import { combineReducers, createStore } from "redux";
import { productReducer } from "./reducer/productReducer";

const rootReducer = combineReducers({
  products: productReducer
});

export const store = createStore(rootReducer);
