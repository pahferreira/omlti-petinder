import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import PetMural from "../PetMural/PetMural";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import PetForm from "../../components/PetForm/PetForm";
import Logout from "../../components/Logout/Logout";
import AuthHelper from "./../../util/AuthHelper";
import PetDetail from "../../components/PetAvatar/PetDetail";

const App = () => {
	const routes = {
		home: "/",
		login: "/login",
		register: "/cadastrar",
		logout: "/logout",
		addpet: "/addpet"
	};
	return (
		<Router>
			<div>
				<NavBar routes={routes} />
				<Route exact path="/" component={PetMural} />
				<Route exact path="/addpet" component={PetForm} onEnter={AuthHelper.handleLinkAuth} />
				<Route path="/login" component={LoginForm} />
				<Route path="/cadastrar" component={RegisterForm} />
				<Route path="/logout" component={Logout} />
				<Route path="/pet/:id/" component={PetDetail} />
			</div>
		</Router>
	);
};

export default App;