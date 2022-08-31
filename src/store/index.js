import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "../store/reducers/rootReducer";
import thunk from "redux-thunk";

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
