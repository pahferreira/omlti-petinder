import React, { Component } from "react";
import { Grid, Button, TextField, Typography } from '@material-ui/core';
import "./RegisterForm.css";
import axios from "axios";
import AuthHelper from "../../util/AuthHelper";

class RegisterForm extends Component {

	constructor() {
		super()
		this.state = {
			nome: '',
			email: '',
			senha: ''
		}
	}

	onSubmit = e => {
		e.preventDefault()
		let user = {
			nome: this.state.nome,
			email: this.state.email,
			senha: this.state.senha,
		}
		axios.post('/api/users/register', user).then(function (response) {
			if (response.status === 200) {
				axios.post("/api/users/login", user)
					.then(function (response) {
						if (response.status === 200) {
							AuthHelper.setToken(response.data.token, response.data.id);
							document.location.href = "/";
						}
						if (response.status === 400) {
							console.log(response);
						}
					})
					.catch(response => console.log(response));
			} else {
				window.alert('Algo deu errado, tente novamente.')
			}
		})
	}

	onChange = (event) => this.setState({ [event.target.name]: event.target.value })

	render() {
		return (
			<form onSubmit={this.onSubmit} className="register-container">
				<Grid container justify="center" alignItems="center">
					<div>
						<Typography variant="title" align="center">
							Realize seu cadastro no PeTinder!
						</Typography>
						<br />
						<TextField
							name="nome"
							style={style}
							placeholder="Digite seu nome completo"
							label="Nome"
							onChange={this.onChange}
						/>
						<br />
						<TextField
							name="email"
							style={style}
							placeholder="Digite seu e-mail"
							label="E-mail"
							onChange={this.onChange}
						/>
						<br />
						<TextField
							name="senha"
							style={style}
							type="password"
							placeholder="Digite sua senha"
							label="Senha"
							onChange={this.onChange}
						/>
						<br />
						<Button variant="raised" size="medium" primary={true} style={style} onClick={(event) => this.onSubmit(event)}>Cadastrar</Button>
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
