import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider} from 'react-redux';
import logger from 'redux-logger';

import "./index.css";
import { reducer } from './reducer/smurfs'
import App from "./components/App";

const root = combineReducers({reducer})
const store = createStore(root, applyMiddleware(logger));

ReactDOM.render(
    <Provider store = { store }>
        <App />
    </Provider>
    , document.getElementById("root"));
