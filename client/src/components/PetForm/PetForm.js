import React, { Component } from 'react';
import { Radio, Grid, Button, TextField, Typography, FormGroup, FormControlLabel, Switch, Checkbox} from '@material-ui/core';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import iconsCss from '@fortawesome/fontawesome-free/css/all.css'	
import iconsJs from '@fortawesome/fontawesome-free/js/all.js'
import AuthHelper from "./../../util/AuthHelper"
import axios from "axios"



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
                    porte: ""
                })
                
    }

    onSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        
        let pet = {
            
        }
        axios.post('/api/pets/create', pet).then(function (response) {
            if(response.status===200){
                window.alert('Usuário cadastrado com Sucesso.')
                document.location.href = '/'
            }
		})
    }
    
    onChange = (event) => this.setState({ [event.target.name] : event.target.value })

    render() {
        return (
            <div className="container">
                    <Typography align="left" variant="display1">
                        Insira informações sobre seu pet
                    </Typography>
                    <br/>
                    <FormGroup row>
                        <TextField 
                            required
                            fullWidth    
                            placeholder="Digite o nome do pet"
                            label="Nome"
                            name="nome"
                            onChange={this.onChange}
                            />
                    </FormGroup>
                    <br/>
                    <Typography variant="subheading">Qual espécie do pet?</Typography>
                    {this.generateEspecieSelector()}
                    
                    <br/>
                    <Typography variant="subheading">Sexo:</Typography><br/>
                    {this.generateSexoSelector()}
                    <br/>
                    {this.generateSwitchSelectors()}
                    
                    <br/>
                    <TextField 
                        required
                        label="Personalidade"
                        fullWidth
                        name="personalidade"
                        placeholder="Descreva em uma frase ou palavra a personalidade do PET"
                        onChange={this.onChange}
                    />
                    
                    <br/>
                    <TextField 
                        required
                        label="porte"
                        fullWidth
                        name="porte"
                        placeholder="Informe demais caracteristicas do PET"
                        onChange={this.onChange}
                    />

                    <Button variant="raised" size="medium" primary={true} onClick={(event) => this.onSubmit(event)}>Entrar</Button>
						
                    
            </div>
        );
    }

    generateEspecieSelector(){
        return ( <FormGroup row>
            <FormControlLabel
                control={
                    <Radio icon={<i class="fas fa-dog fa-2x"></i>} 
                    checkedIcon={<i class="fas fa-dog icon-checked fa-2x"></i>} 
                    checked={this.state.especie === "cachorro"}
                    value="cachorro" 
                    name="especie"
                    onChange={ (event, newValue) => {
                        this.setState({especie : event.target.value})
                    }}/>
                }
                label="Cachorro"
            />
            <FormControlLabel
                control={
                    <Radio icon={ <i class="fas fa-cat fa-2x"></i> } 
                    checkedIcon={<i class="fas fa-dog icon-checked fa-2x"></i>} 
                    checked={this.state.especie === "gato"}
                    value="gato" 
                    name="especie"
                    onChange={ (event) => {
                        this.setState({especie : "gato"})
                    }}/>
                }
                label="Gato"
            />
        </FormGroup>)
    }

    generateSexoSelector(){
        return (<FormGroup row>
                        
            <Radio icon={<i class="fas fa-mars fa-2x"></i>} 
                    checkedIcon={<i class="fas fa-mars icon-checked fa-2x"></i>} 
                    checked={this.state.sexo === "macho"}
                    value="macho" 
                    name="sexo"
                    onChange={ (event, newValue) => {
                        this.setState({sexo : event.target.value})
                    }}/>
            <Radio icon={<i class="fas fa-venus fa-2x"></i>} 
                    checkedIcon={<i class="fas fa-venus icon-checked fa-2x"></i>} 
                    checked={this.state.sexo === "femea"}
                    value="femea" 
                    name="sexo"
                    onChange={ (event, newValue) => {
                        this.setState({sexo : event.target.value})
                    }}/>

        </FormGroup>)
    }

    generateSwitchSelectors(){
        return(
            <div>
                <FormGroup row> 
                    <Typography variant="subheading">Castrado?</Typography>
                    <Switch 
                        checked={this.state.castrado}
                        onChange={ event => {this.setState({castrado : !this.state.castrado})}}
                        value="checkedCastrado"
                        name="castrado"
                        />
                </FormGroup>

                <FormGroup row> 
                    <Typography variant="subheading">Vacinado?</Typography>
                    <Switch 
                        checked={this.state.vacinado}
                        onChange={ event => {this.setState({vacinado : !this.state.vacinado})}}
                        value="checkedVacinao"
                        name="vacinado"
                        />
                </FormGroup>
            </div>
        )
    }
}

export default PetForm;