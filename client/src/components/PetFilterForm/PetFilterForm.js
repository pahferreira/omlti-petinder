import React from "react";
import { Radio, FormControl, FormLabel, Grid, RadioGroup, FormControlLabel, Divider, Typography } from '@material-ui/core';

class PetFilterForm extends React.Component {

    render() {
        return (
            <div>
                <Typography variant="display1" align="center">Mural</Typography>
                <Grid
                    container
                    justify="space-around"
                    direction="column">
                    {this.generateEspecieSelector()}
                    {this.generateSexoSelector()}
                </Grid>
                <Divider />
            </div>
        );
    }

    generateEspecieSelector() {
        return (
            <FormControl component="fieldset" required="true">
                <FormLabel component="legend">Espécie</FormLabel>
                <RadioGroup
                    aria-label="Espécie"
                    name="especie"
                    value={this.props.filterValues.especie}
                    onChange={(event) => {
                        this.props.onChangeCallBack(event)
                    }}>
                    <FormControlLabel value="cachorro" control={<Radio />} label="Cachorro" />
                    <FormControlLabel value="gato" control={<Radio />} label="Gato" />
                </RadioGroup>
            </FormControl>
        )
    }

    generateSexoSelector() {
        return (
            <FormControl component="fieldset" required="true">
                <FormLabel component="legend">Sexo</FormLabel>
                <RadioGroup
                    aria-label="Sexo"
                    name="sexo"
                    value={this.props.filterValues.sexo}
                    onChange={(event) => {
                        this.props.onChangeCallBack(event)
                    }}>
                    <FormControlLabel value="F" control={<Radio />} label="Fêmea" />
                    <FormControlLabel value="M" control={<Radio />} label="Macho" />
                </RadioGroup>
            </FormControl>
        )
    }
}

export default PetFilterForm;