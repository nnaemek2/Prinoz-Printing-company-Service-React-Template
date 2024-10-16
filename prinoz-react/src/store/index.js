import { createStore, compose, applyMiddleware } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// middlewares
import thunk from "redux-thunk";

// Import custom components
import rootReducer from "./reducers/rootReducers";

const middleware = [thunk];

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(...middleware),
    //For working redux dev tools in chrome (https://github.com/zalmoxisus/redux-devtools-extension)
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

let persistor = persistStore(store);

export { store, persistor };
