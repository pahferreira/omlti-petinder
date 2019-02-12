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
                let interessados = response.data.usuariosInteressados
                if (interessados && this.state.pet.responsavel == AuthHelper.getUserId()) {
                    url = "/api/users/various/" + JSON.stringify({ ids: interessados })
                    console.log("request usuarios interessados")
                    axios.get(url)
                        .then(response => {
                            this.setState({ interessados: response.data })
                            console.log(this.state)
                        })
                }

            })
    }

    confirmar = (user) => {
        window.alert(user.nome)
    }

    adotar = () => {
        let interessados = this.state.pet.usuariosInteressados
        if (!interessados) interessados = []
        interessados.push(AuthHelper.getUserId())
        let pet = { usuariosInteressados: interessados }
        console.log(interessados)
        axios({
            method: "post",
            url: "/api/pets/" + this.props.match.params.id,
            data: pet,
            headers: { Authorization: AuthHelper.getToken() }
        }).then((res) => {
            if (res.status === 200) {
                alert("Seu interesse foi registrado!");
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
                {console.log(this.state.pet.usuariosInteressados)}
                <Grid
                    container
                    direction='column'
                    alignItems='center'>
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
                        {pet.descricao}
                    </Typography>
                    <Typography variant="h6">
                        {pet.sexo === 'M' ? 'Macho' : 'Fêmea'}
                    </Typography>
                    <Typography variant="h6">
                        Porte {pet.porte === 'P' ? 'pequeno' :
                            pet.porte === 'M' ? 'médio' : 'grande'
                        }
                    </Typography>
                    <Typography variant="h7">
                        Responsável {pet.responsavel}
                    </Typography>
                    {(pet.responsavel === AuthHelper.getUserId()) ?
                        ((this.state.interessados) ?
                            <>
                                <Typography variant="h6">Adotadores interessados:</Typography>
                                <Typography variant="h7"> {this.state.interessados.
                                    map(user =>
                                        <p> {user.nome}
                                            <Button variant="contained"
                                                size="small"
                                                color="secundary"
                                                id={user.id}
                                                onClick={() => this.confirmar(user)}
                                            >Confirmar</Button> </p>)}
                                </Typography>
                            </> :
                            <Typography variant="h7"> Nenhum usuário mostrou interesse no pet ainda</Typography>) :

                        <Button
                            variant="contained"
                            size="large"
                            color="primary"
                            onClick={(event) => this.adotar(event)}
                            style={{ float: 'right', margin: '10px' }}>
                            Quero adotar!
                        </Button>
                    }

                </Grid>
            </div>
        )
    }
}

export default PetDetail;