import React, { Component } from "react";
import { Grid, Button, TextField, Typography } from '@material-ui/core';
import "./LoginForm.css";

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		}
	}
	render() {
		return (
			<div className="login-container">
				<Grid container justify="center" alignItems="center">
					<div className="left">
						<Typography align="center">
							Quero me cadastrar
					</Typography>
						<Typography align="center">
							<a href="#">
								Cadastrar com Facebook
						</a>
						</Typography>
						<Typography align="center">
							<a href="#">
								Cadastrar com e-mail
						</a>
						</Typography>
					</div>
					<div className="right">
						<Typography align="center">
							Já possuo cadastro
					</Typography>
						<Typography align="center">
							<a href="#">
								Acessar com Facebook
						</a>
						</Typography>
						<br />
						<TextField
							style={style}
							placeholder="Digite seu e-mail"
							label="E-mail"
							onChange={(event, newValue) => this.setState({ username: newValue })}
						/>
						<br />
						<TextField
							style={style}
							type="password"
							placeholder="Digite sua senha"
							label="Senha"
							onChange={(event, newValue) => this.setState({ password: newValue })}
						/>
						<br />
						<Button variant="raised" size="medium" primary={true} style={style} onClick={(event) => this.handleClick(event)}>Entrar</Button>
						<br />
						<Typography align="center">
							<a href="#">
								Esqueci minha senha
						</a>
						</Typography>
					</div>
				</Grid>
			</div>
		);
	}
}
const style = {
	margin: 10,
	width: "100%"
};
export default LoginForm;