import React from 'react';
import axios from 'axios';
import { Grid, Typography, Card, CardMedia } from '@material-ui/core';
import '../../index.css'

class PetDetail extends React.Component {
    constructor() {
        super()
        this.state = { pet: [] }
    }
    componentWillMount() {
        let url = "api/pets/" + this.props.match.params.id
        axios.get(url)
            .then(response => {
                this.setState({ pet: response.data })
            })
    }
    render() {
        const pet = this.state.pet;
        return (
            <div className="container">
                <Grid
                    container
                    spacing={10}
                    direction='column'
                    alignItems='flex-start'
                    >
                    {pet.fotos ? pet.fotos.map(foto =>
                        <Card style={{"width": "50%"}}>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                image={foto}
                                title="Contemplative Reptile"/>
                        </Card>
                    ) : ''}
                    <Typography variant="h4">
                        {pet.nome}
                    </Typography>
                    <Typography variant="h6">
                        > {pet.descricao}
                    </Typography>
                    <Typography variant="h6">
                        > {pet.sexo == 'M'? 'Macho':'Fêmea'}
                    </Typography>
                    <Typography variant="h6">
                        > Porte {pet.porte == 'P'? 'pequeno':
                        pet.porte == 'M'? 'médio': 'grande'
                    }
                    </Typography>
                </Grid>
            </div>
        )
    }
}

export default PetDetail;