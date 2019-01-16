import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import PetMural from "../PetMural/PetMural";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import PetForm from "../../components/PetForm/PetForm";

const App = () => {
	const routes = {
		home: "/",
		login: "/login",
		register: "/cadastrar"
	};
	return (
		<Router>
			<div>
				<NavBar routes={routes} />
				<Route exact path="/" component={PetMural} />
				<Route exact path="/addpet" component={PetForm} />
				<Route path="/login" component={LoginForm} />
				<Route path="/cadastrar" component={RegisterForm} />
			</div>
		</Router>
	);
};

export default App;