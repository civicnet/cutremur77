import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import { DataReducer } from "./data/reducers";
import { RECEIVE_ACCELERATION } from "./data/types";
import thunk from "redux-thunk";
import { UIReducer } from "./ui/reducers";

const rootReducer = combineReducers({
  data: DataReducer,
  ui: UIReducer
});

export const actionSanitizer = (action: any) => {
  switch (action.type) {
    case RECEIVE_ACCELERATION:
      return {
        ...action // Actually ok at 1/10 load
      };
    default:
      return action;
  }
};

const stateSanitizer = (state: any) =>
  state.data
    ? { ...state, data: { ...state.data, acceleration: "<ACCELERATION DATA>" } }
    : state;

const reduxDevtoolsExtensionOptions = {
  actionSanitizer,
  stateSanitizer
};

const composeEnhancers =
  ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
      reduxDevtoolsExtensionOptions
    )) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
export type AppState = ReturnType<typeof rootReducer>;
