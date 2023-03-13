// import { createStoreHook } from "react-redux";
import { createStore } from "redux";
import rootred  from "./Reducer/main";
const store = createStore(
rootred
);
export default store;