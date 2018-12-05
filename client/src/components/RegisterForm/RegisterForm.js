import React, { Component } from "react";
import { Grid, Button, TextField, Typography } from '@material-ui/core';
import "./RegisterForm.css";
import axios from "axios";

class RegisterForm extends Component {
	
	onSubmit(e) {
		e.preventDefault();
		const form = e.target;
		const newUser = {};
		for(let i=0; i<form.length; i++) {
			if(form[i].localName === "input"){
				let input = form[i];
				newUser[input.name] = input.value;
			}
		}
		axios.post("/api/users/register", newUser);
		document.location.href = "/";
	}


	render() {
		return (
			<form onSubmit={this.onSubmit}  className="register-container">
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
							name="nome"
						/>
						<br />
						<TextField
							style={style}
							placeholder="Digite seu e-mail"
							label="E-mail"
							name="email"
						/>
						<br />
						<TextField
							style={style}
							type="password"
							placeholder="Digite sua senha"
							label="Senha"
							name="senha"
						/>
						<br />
						<Button variant="contained" size="medium"  style={style} type="submit">Cadastrar</Button> 
						<br />
						<Typography align="center">
							<a href="/">
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
