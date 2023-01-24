import { applyMiddleware, combineReducers, createStore } from "redux";
import { countReducer } from "../reducer/count";
import logger from "redux-logger";

// 여러개의 리듀서를 하나로 합칠때 combineReducers
const rootReducer = combineReducers({
  count: countReducer,
  // deleteCount :
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
