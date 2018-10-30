import React from "react";
import PetAvatar from "./../PetAvatar/PetAvatar"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


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
		return this.state.pets.map(pet => <Grid xs={8} sm={3}><PetAvatar name={pet.nome} img={pet.fotos} /></Grid>) 
	}

	render() {

		let result = <Grid container xs={10} sm={12} justify="center" alignItems="center" direction="column" >
			<Grid container item>
				{ this.buildGrid() }
			</Grid>
			<Grid item alignItems="center">
				<Button variant="contained" > Ver mais </Button>
			</Grid>
		</Grid>

		return (result)
	}

	requestPets() {

		//let  pets = await fetch("urlPetsProx").them(res => res.json())
		return [
			{ nome: "Bob", fotos: "http://www.petsfoto.com/wp-content/uploads/2010/04/comp-pets2.jpg", url: "requisição detalhada" },
			{ nome: "Marshal", fotos: "http://3.bp.blogspot.com/--qflv1mtcA8/UIohkj5AfqI/AAAAAAAAAjs/lPWMAQixraE/s1600/Dog+And+Laptop.jpg", url: "requisição detalhada" },
			{ nome: "Teteia", fotos: "https://www.wallpaperup.com/uploads/wallpapers/2015/04/15/661816/3ae84bdc368599fc0c7609683e9e9d35-700.jpg", url: "requisição detalhada" },
			{ nome: "Patolino", fotos: "http://www.animalslook.com/wp-content/uploads/2010/11/74.jpg", url: "requisição detalhada" },
			{ nome: "Frajolino", fotos: "https://image.shutterstock.com/image-photo/first-caught-mouse-260nw-389364235.jpg", url: "requisição detalhada" },
			{ nome: "Pernalonga", fotos: "https://cdn0.wideopenpets.com/wp-content/uploads/2016/04/cat-5-770x405.jpg", url: "requisição detalhada" },
			{ nome: "Toby", fotos: "http://www.petsfoto.com/wp-content/uploads/2010/04/comp-pets3.jpg", url: "requisição detalhada" },
			{ nome: "Amora", fotos: "http://www.animalslook.com/wp-content/uploads/2010/11/141.jpg", url: "requisição detalhada" },
		]
	}
}
