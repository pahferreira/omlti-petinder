import React from "react";
import PetAvatar from "../../components/PetAvatar/PetAvatar"
import { Grid } from '@material-ui/core';
import PetFilterForm from '../../components/PetFilterForm/PetFilterForm'
import axios from 'axios'

export default class PetMural extends React.Component {

	constructor(props) {
		super(props)
		this.state = { pets: [], visiblePets: [], loading: true, filter: {sexo: null, especie: null}}
	
		this.requestPets().then(pets => {
			this.setState({
				pets
			})
			this.updateVisiblePets()
		})
	}

	onChangeFilter = (event) => {
		let filter = this.state.filter 
		filter[event.target.name] = event.target.value
		console.log(filter)
		this.setState( {'filter': filter})
		console.log(this.state.filter)
		this.updateVisiblePets()
	}

	updateVisiblePets() {

		if(this.state.filter.sexo == null && this.state.filter.especie == null)
			this.setState({visiblePets : this.state.pets})
		else {
			let filtrados = this.state.pets
			if(this.state.filter.sexo != null) 
				filtrados = filtrados.filter(pet => pet.sexo === this.state.filter.sexo)
			if(this.state.filter.especie != null)
			filtrados = filtrados.filter(pet => pet.especie === this.state.filter.especie)
		}
	}

	buildGrid() {
		return this.state.visiblePets.map(pet => <Grid container item justify="center" xs={6} sm={3}> <PetAvatar key={pet.nome} pet={pet} /> </Grid>)
	}

	render() {
		return (
			<>
			<PetFilterForm 
				onChangeCallBack={this.onChangeFilter}
				filterValues={this.state.filter}/>
			<Grid container justify="center" alignItems="center" direction="column" >
				<Grid container item>
					{this.buildGrid()}
				</Grid>
			</Grid>
			</>
		);
	}

	requestPets() {

		//let  pets = await fetch("urlPetsProx").them(res => res.json())
		return axios.get("api/pets/available")
		.then(response => {
			console.log(response.data)
			return response.data
		})
	}
}
