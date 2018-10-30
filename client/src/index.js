import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

import RegisterForm from "./components/RegisterForm/RegisterForm";
import NavBar from "./components/NavBar/NavBar";

const App = () => (
	<div>
		<NavBar />
		<RegisterForm />
	</div>
	
);

ReactDOM.render(<App />, document.getElementById("root"));
