import React from "react";
import { Radio, FormControl, FormLabel, Grid, RadioGroup, FormControlLabel, Divider, Typography } from '@material-ui/core';

class PetFilterForm extends React.Component {

    render() {
        return (
            <div>
                <Typography variant="display1" align="center" style={{margin: 30}}>Mural de pets</Typography>
                <Grid
                    container
                    justify="space-evenly"
                    alignItems="center"
                    direction="row"
                    >
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
                    }}
                    className="radio">
                    <FormControlLabel value="F" control={<Radio />} label="Fêmea" />
                    <FormControlLabel value="M" control={<Radio />} label="Macho" />
                </RadioGroup>
            </FormControl>
        )
    }
}

export default PetFilterForm;