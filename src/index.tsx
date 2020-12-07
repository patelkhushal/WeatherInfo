import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import historyList from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';

// redux-saga middleware
const sagaMiddleware = createSagaMiddleware();

//Store
let store = createStore(historyList, applyMiddleware(sagaMiddleware));
// store.subscribe(() => console.log(store.getState()));

sagaMiddleware.run(rootSaga);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();