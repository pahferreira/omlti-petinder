import React from "react";
import PetAvatar from "../../components/PetAvatar/PetAvatar"
import { Grid, Button } from '@material-ui/core';
import axios from 'axios'

export default class PetMural extends React.Component {

	constructor(props) {
		super(props)
		this.state = { pets: [], loading: true }
	}

	componentWillMount() {
		this.requestPets().then(pets => {
			this.setState({
				pets
			})
		})
	}

	componentDidMount() {
		// this.setState({loading : true})
		// this.setState({pets : this.requestPets(), loading: false})
		// <Grid item xs={8} sm={3} > <img src='https://cdn.dribbble.com/users/172519/screenshots/3520576/dribbble-spinner-800x600.gif'/> </Grid> 
	}

	buildGrid() {
		return this.state.pets.map(pet => <Grid container item justify="center" xs={6} sm={3}> <PetAvatar key={pet.nome} pet={pet} /> </Grid>)
	}

	render() {
		return (
			<Grid container justify="center" alignItems="center" direction="column" >
				<Grid container item>
					{this.buildGrid()}
				</Grid>
				<Grid item>
					<Button variant="contained" > Ver mais </Button>
				</Grid>
			</Grid>
		);
	}

	requestPets() {

		//let  pets = await fetch("urlPetsProx").them(res => res.json())
		return axios.get("api/pets/all")
		.then(response => {
			console.log(response.data)
			return response.data
		})
	}
}
