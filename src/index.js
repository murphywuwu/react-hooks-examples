import React from "react";
import ReactDOM from "react-dom";
// import App from './useEffect-example';
// import App from './customHook-example';
// import App from './useDataApiHook-example';
import Form from './Form';
import LifeCycle from './LifeCycle';
import Reddit from './Reddit';
// import App from './Example';
// import App from './App';
// import App from './performance';
// import App from './forwardref-simple-example';
// import App from './context-example';
import App from './forceUpdate/index';
import * as serviceWorker from "./serviceWorker";

// https://daveceddia.com/useeffect-hook-examples/
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
