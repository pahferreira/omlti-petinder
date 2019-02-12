import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import PetMural from "../PetMural/PetMural";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import PetForm from "../../components/PetForm/PetForm";
import Logout from "../../components/Logout/Logout";
import PetDetail from "../../components/PetAvatar/PetDetail";
import PrivateRoute from "../../util/PrivateRoute";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import { purple } from "@material-ui/core/colors";

const THEME = createMuiTheme({
	typography: {
		fontFamily: '"Roboto Mono", monospace',
		fontSize: 16,
	},
	palette: {
		primary: purple,
		secondary: pink,
		error: red,
		contrastThreshold: 3,
		tonalOffset: 0.2,
	},
})

const App = () => {
	const routes = {
		home: "/",
		login: "/login",
		register: "/cadastrar",
		logout: "/logout",
		addpet: "/addpet"
	};
	return (
		<MuiThemeProvider theme={THEME}>
			<Router>
				<div>
					<NavBar routes={routes} />
					<Route path="/login" component={LoginForm} />
					<Route path="/cadastrar" component={RegisterForm} />
					<Route path="/logout" component={Logout} />
					<PrivateRoute exact path="/" component={PetMural} />
					<PrivateRoute exact path="/addpet" component={PetForm} />
					<PrivateRoute path="/pet/:id/" component={PetDetail} />
				</div>
			</Router>
		</MuiThemeProvider>
	);
};

export default App;