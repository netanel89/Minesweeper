import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import gameMiddleware from "../middlewares/gameMiddleware";
import internalState from "./initialState";
import createRootReducer from "../reducers";

function configureStore(externalState) {
  const initialState = {
    ...internalState,
    ...externalState
  };
  const middlewares = [thunk, gameMiddleware];
  return createStore(
    createRootReducer(),
    initialState,
    compose(applyMiddleware(...middlewares))
  );
}

export default configureStore;
