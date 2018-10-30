import React, { Component } from "react";
import { Grid, Button, TextField, Typography } from '@material-ui/core';
import "./RegisterForm.css";

class RegisterForm extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<form className="register-container">
				<Grid container justify="center" alignItems="center">
					<div>
						<Typography variant="title" align="center">
							Realize seu cadastro no PeTinder!
						</Typography>
						<br />
						<TextField
							style={style}
							placeholder="Digite seu nome completo"
							label="Nome"
						/>
						<br />
						<TextField
							style={style}
							placeholder="Digite seu e-mail"
							label="E-mail"
						/>
						<br />
						<TextField
							style={style}
							type="password"
							placeholder="Digite sua senha"
							label="Senha"
						/>
						<br />
						<Button variant="raised" size="medium" primary={true} style={style} onClick={(event) => this.handleClick(event)}>Cadastrar</Button>
						<br />
						<Typography align="center">
							<a href="#">
								Voltar
							</a>
						</Typography>
					</div>
				</Grid>
			</form>
		);
	}
}
const style = {
	margin: 10,
	width: "100%"
};
export default RegisterForm;