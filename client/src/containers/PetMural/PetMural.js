import React from "react";
import PetAvatar from "../../components/PetAvatar/PetAvatar"
import { Grid, Button } from '@material-ui/core';


export default class PetMural extends React.Component {

	constructor(props) {
		super(props)
		this.state = { pets: [], loading: true }
	}

	componentWillMount() {
		this.setState({
			pets: this.requestPets()
		});
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
		return [
			{ nome: "Bob", fotos: "http://www.petsfoto.com/wp-content/uploads/2010/04/comp-pets2.jpg",sexo: 'macho' , especie: 'cachorro' },
			{ nome: "Marshal", fotos: "http://3.bp.blogspot.com/--qflv1mtcA8/UIohkj5AfqI/AAAAAAAAAjs/lPWMAQixraE/s1600/Dog+And+Laptop.jpg",sexo: 'macho' , especie: 'cachorro' },
			{ nome: "Teteia", fotos: "https://www.wallpaperup.com/uploads/wallpapers/2015/04/15/661816/3ae84bdc368599fc0c7609683e9e9d35-700.jpg",sexo: 'femea' , especie: 'gato'  },
			{ nome: "Patolino", fotos: "http://www.animalslook.com/wp-content/uploads/2010/11/74.jpg",sexo: 'macho' , especie: 'cachorro'  },
			{ nome: "Lele", fotos: "https://image.shutterstock.com/image-photo/first-caught-mouse-260nw-389364235.jpg",sexo: 'femea' , especie: 'gato'  },
			{ nome: "Pernalonga", fotos: "https://cdn0.wideopenpets.com/wp-content/uploads/2016/04/cat-5-770x405.jpg",sexo: 'macho' , especie: 'gato'  },
			{ nome: "Toby", fotos: "http://www.petsfoto.com/wp-content/uploads/2010/04/comp-pets3.jpg",sexo: 'macho' , especie: 'cachorro'  },
			{ nome: "Amora", fotos: "http://www.animalslook.com/wp-content/uploads/2010/11/141.jpg",sexo: 'femea' , especie: 'cachorro'  },
		]
	}
}
