import React, { Component } from "react";
import axios from "axios"
import { Grid, Button, TextField, Typography } from '@material-ui/core';
import "./LoginForm.css";

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			senha: ''
		}
	}


	onSubmit = e => {
        e.preventDefault()
        let user = {
            email: this.state.email,
            senha: this.state.senha,
		}
		
		console.log(user)

		axios.post('/api/users/login', user).then(function (response) {
	
            if(response.status===200){
                window.alert('Login efetuado com sucesso.')
                document.location.href = '/'
			}
			if(response.status===400){
				console.log(response)
			}
		}).catch(response => console.log(response))
	}

	onChange = (event) => this.setState({ [event.target.name] : event.target.value })
	

	render() {
		return (
			<div className="login-container">
				<Grid container justify="center" alignItems="center">
					<div className="left">
						<Typography align="center">
							Quero me cadastrar
					</Typography>
						<Typography align="center">
							<a href="/">
								Cadastrar com Facebook
							</a>
						</Typography>
						<Typography align="center">
							<a href="/cadastrar">
								Cadastrar com e-mail
						</a>
						</Typography>
					</div>
					<div className="right">
						<Typography align="center">
							Já possuo cadastro
					</Typography>
						<Typography align="center">
							<a href="/">
								Acessar com Facebook
						</a>
						</Typography>
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
						<Button variant="raised" size="medium" primary={true} style={style} onClick={(event) => this.onSubmit(event)}>Entrar</Button>
						<br />
						<Typography align="center">
							<a href="/">
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