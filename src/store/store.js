import { createStore } from "redux";
import reducer from "./reducer";

// store를 만드는 함수 (createStore)
let store = createStore(reducer)

export default store;