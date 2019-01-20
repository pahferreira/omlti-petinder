import React, { Component } from 'react';
import { Radio, Grid, Button, TextField, FormControl, FormLabel, RadioGroup, Typography, FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import AuthHelper from "./../../util/AuthHelper"
import axios from "axios"
import '../../index.css'

class PetForm extends Component {
    componentWillMount() {
        AuthHelper.handleLinkAuth()
        this.setState({
            nome: "",
            especie: "",
            sexo: "",
            castrado: false,
            vacinado: false,
            personalidade: "",
	    porte: "",
	    descricao: ""
        })
    }

    onSubmit = e => {
        e.preventDefault()
        const pet = {
            nome: this.state.nome,
            especie: this.state.especie,
            sexo: this.state.sexo,
            personalidade: this.state.personalidade,
            porte: this.state.porte,
	    saude: {
		    vacinas: this.state.vacinado,
		    castrado: this.state.castrado
	    },
	    responsavel: AuthHelper.getUserId(),
	    descricao: this.state.descricao
        };

	axios({
		method: "post",
		url: "/api/pets/create",
		data: pet,
		headers: { Authorization: AuthHelper.getToken() }
	}).then( (res) => {
	    if(res.status === 200) {
		    alert("Pet cadastrado com sucesso!");
		    window.location.href = "/";
	    }
	    else alert("Ocorreu um erro! Por favor, tente novamente.");
	});
    }
    onChange = (event) => this.setState({ [event.target.name]: event.target.value })

    render() {
        return (
            <div className="container">
                <Typography align="center" variant="display1">
                    Cadastrar PET
                </Typography>
                <Grid
                    container
                    direction='column'
                    justify='center'>
                    <FormGroup row>
                        <TextField
                            required={true}
                            fullWidth
                            placeholder="Digite o nome do pet"
                            label="Nome"
                            name="nome"
                            onChange={this.onChange} />
                    </FormGroup>
                    <br />
                    {this.generateEspecieSelector()}
                    <br />
                    {this.generateSexoSelector()}
                    <br />
                    {this.generateSwitchSelectors()}
		    <br />
		    <FormGroup row>
			<TextField
			    required={true}
			    label="Descrição"
			    fullWidth
			    name="descricao"
			    placeholder="Uma descrição do seu pet e sua historinha."
			    onChange={this.onChange} />
	            </FormGroup>
		    <br />
                    <FormGroup row>
                        <TextField
                            required={true}
                            label="Personalidade"
                            fullWidth
                            name="personalidade"
                            placeholder="Tente descrever em uma frase ou uma palavra a personalidade do PET"
                            onChange={this.onChange} />
                    </FormGroup>
                    <br />
                    {this.porteSelector()}

                </Grid>
                <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    onClick={(event) => this.onSubmit(event)}
                    style={{ float: 'right' }}>
                    Cadastrar
                </Button>
            </div>
        );
    }

    generateEspecieSelector() {
        return (
            <FormControl component="fieldset" required={true}>
                <FormLabel component="legend">Espécie</FormLabel>
                <RadioGroup
                    aria-label="Espécie"
                    name="especie"
                    value={this.state.especie}
                    onChange={(event) => {
                        this.setState({ especie: event.target.value })
                    }}>
                    <FormControlLabel value="cachorro" control={<Radio />} label="Cachorro" />
                    <FormControlLabel value="gato" control={<Radio />} label="Gato" />
                </RadioGroup>
            </FormControl>
        )
    }

    generateSexoSelector() {
        return (
            <FormControl component="fieldset" required={true}>
                <FormLabel component="legend">Sexo</FormLabel>
                <RadioGroup
                    aria-label="Sexo"
                    name="sexo"
                    value={this.state.sexo}
                    onChange={(event) => {
                        this.setState({ sexo: event.target.value })
                    }}>
                    <FormControlLabel value="F" control={<Radio />} label="Femea" />
                    <FormControlLabel value="M" control={<Radio />} label="Macho" />
                </RadioGroup>
            </FormControl>
        )
    }

    generateSwitchSelectors() {
        return (
            <FormControl component="fieldset">
                <FormLabel component="legend">Outros</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={this.state.vacinado}
                                onChange={() => { this.setState({ vacinado: !this.state.vacinado }) }}
                                value={this.state.vacinado}
                            />
                        }
                        label="Vacinado?"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={this.state.castrado}
                                onChange={() => { this.setState({ castrado: !this.state.castrado }) }}
                                value={this.state.castrado}
                            />
                        }
                        label="Castrado?"
                    />
                </FormGroup>
            </FormControl>
        )
    }

    porteSelector() {
        return (
            <FormControl component="fieldset" required={true}>
                <FormLabel component="legend">Porte</FormLabel>
                <RadioGroup
                    aria-label="Porte"
                    name="porte"
                    value={this.state.porte}
                    onChange={(event) => {
                        this.setState({ porte: event.target.value })
                    }}>
                    <FormControlLabel value="P" control={<Radio />} label="Pequeno" />
                    <FormControlLabel value="M" control={<Radio />} label="Medio" />
                    <FormControlLabel value="G" control={<Radio />} label="Grande" />
                </RadioGroup>
            </FormControl>
        )
    }
}

export default PetForm;
