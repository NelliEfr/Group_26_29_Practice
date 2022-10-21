import { combineReducers, createStore } from "redux";
import { languageReducer } from "./reducer/languageReducer";
import { productReducer } from "./reducer/productReducer";

const rootReducer = combineReducers({
  products: productReducer,
  language: languageReducer
});

export const store = createStore(rootReducer);

// Сформирован объект store
