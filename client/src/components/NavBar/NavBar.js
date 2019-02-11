import React, { Component } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "./NavBar.css"
import AuthHelper from "./../../util/AuthHelper"

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			anchorEl: null,
			isOpen: false
		};
	}

	handleClick = event => {
		this.setState({ anchorEl: event.currentTarget, isOpen: true });
	};

	handleClose = () => {
		this.setState({ anchorEl: null, isOpen: false });
	};

	render() {
		return (
			<div className="navbar-root">
				<AppBar position="static">
					<Toolbar>
						<IconButton
							color="inherit"
							aria-owns={this.state.anchorEl ? "nav-menu" : null}
							aria-haspopup="true"
							onClick={this.handleClick}
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="nav-menu"
							anchorEl={this.state.anchorEl}
							open={this.state.isOpen}
							onClose={() => this.handleClose()}
						>
							<MenuItem onClick={() => window.location.href = "/"}>
								<Typography variant="overline" color="inherit">
									Mural
								</Typography>
							</MenuItem>
							<MenuItem onClick={() => window.location.href = "/addpet"}>
								<Typography variant="overline" color="inherit">
									Cadastrar PET
								</Typography>
							</MenuItem>
						</Menu>
						<Typography variant="h6" color="inherit" className="navbar-grow">
							PeTinder
						</Typography>
						{(() => {
							if (AuthHelper.isUserLogged())
								return (<Button variant="outlined" href="/logout" color="inherit">Sair</Button>)
							else
								return (<Button variant="outlined" href="/login" color="inherit">Entrar ou Cadastrar</Button>)
						})()}

					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default NavBar;