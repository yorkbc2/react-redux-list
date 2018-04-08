import {
	combineReducers,
	createStore,
	applyMiddleware
} from "redux";
import thunk from "redux-thunk";
import {createLogger as logger} from "redux-logger";
import {usersReducer} from "./reducers/usersReducer.js";

const middleware = applyMiddleware(logger(), thunk);
const rootReducer = combineReducers({
	users: usersReducer
});
const store = createStore(rootReducer, middleware);


export default store;