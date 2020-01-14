import React from "react";
import ReactDOM from "react-dom";
import "./css/fontello.css";
import "./css/normalize.css";
import "./css/skeleton.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
