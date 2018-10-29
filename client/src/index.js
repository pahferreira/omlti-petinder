import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

import NavBar from "./components/NavBar/NavBar";
import LoginForm from "./components/LoginForm/LoginForm";

const App = () => (
	<div>
		<NavBar />
		<LoginForm />
	</div>
	
);

ReactDOM.render(<App />, document.getElementById("root"));