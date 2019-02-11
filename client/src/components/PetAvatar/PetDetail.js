import React from 'react';
import axios from 'axios';
import { Grid, Typography, Card, CardMedia, Button } from '@material-ui/core';
import '../../index.css'
import AuthHelper from '../../util/AuthHelper'

class PetDetail extends React.Component {
    constructor() {
        super()
        this.state = { pet: [] }
    }
    componentWillMount() {
        let url = "/api/pets/" + this.props.match.params.id
        axios.get(url)
            .then(response => {
                this.setState({ pet: response.data })
            })
    }

    adotar = () => {

        
        let url = "/api/pets/" + this.props.match.params.id
        let users = this.state.pet.usuariosInteressados
        if(users == null || users == undefined)
            users = []
        let pet = {usuariosInteressados: users.push(AuthHelper.getUserId())}
        
        axios({
            method: "post",
            url: "/api/pets/" + this.props.match.params.id,
            data: pet,
            headers: { Authorization: AuthHelper.getToken() }
        }).then((res) => {
            if (res.status === 200) {
                alert("Pet cadastrado com sucesso!");
                window.location.href = "/";
            }
            else alert("Ocorreu um erro! Por favor, tente novamente.");
        });
    }

    render() {
        const pet = this.state.pet;
        console.log(pet)
        return (
            <div className="container">
                <Grid
                    container
                    spacing={10}
                    direction='column'
                    alignItems='flex-start'
                >
                    {pet.fotos ? pet.fotos.map(foto =>
                        <Card style={{ "width": "50%" }}>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                image={foto}
                                title="Contemplative Reptile" />
                        </Card>
                    ) : ''}
                    <Typography variant="h4">
                        {pet.nome}
                    </Typography>
                    <Typography variant="h6">
                        > {pet.descricao}
                    </Typography>
                    <Typography variant="h6">
                        > {pet.sexo === 'M' ? 'Macho' : 'Fêmea'}
                    </Typography>
                    <Typography variant="h6">
                        > Porte {pet.porte === 'P' ? 'pequeno' :
                            pet.porte === 'M' ? 'médio' : 'grande'
                        }
                    </Typography>
                    {(pet.responsavel === AuthHelper.getUserId()) ?
                        ((pet.usuariosInteressados) ?
                            (
                                <>
                                <Typography variant="v7"> Usuarios interessados:</Typography>
                                <ul>
                                    {pet.usuariosInteressados.map(user => <li>{user}</li>)}
                                </ul>
                                </>
                            ) :
                            <Typography variant="v7"> Nenhum usuário mostrou interesse no pet ainda</Typography>) :
                        <Button
                            variant="contained"
                            size="large"
                            color="primary"
                            onClick={(event) => this.adotar(event)}
                            style={{ float: 'right' }}>
                            Quero adotar!
                    </Button>
                    }

                </Grid>
            </div>
        )
    }
}

export default PetDetail;