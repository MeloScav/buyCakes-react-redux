import { createStore } from "redux";
import CakeReducer from "./reducers/cakeReducer";

const store = createStore(CakeReducer);

export default store;
