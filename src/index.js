import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Form from './Form';
import LifeCycle from './LifeCycle';
import Reddit from './Reddit';
import Example from './Example';
import * as serviceWorker from "./serviceWorker";

// https://daveceddia.com/useeffect-hook-examples/
ReactDOM.render(<Example/>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
