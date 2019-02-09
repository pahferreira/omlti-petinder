import React from "react";
import { Radio, FormControl, FormLabel, RadioGroup, FormControlLabel } from '@material-ui/core';

class PetFilterForm extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {console.log(this.props.filterValues)}
                {this.generateEspecieSelector()}
                {this.generateSexoSelector()}
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
                    <FormControlLabel value="F" control={<Radio />} label="Femea" />
                    <FormControlLabel value="M" control={<Radio />} label="Macho" />
                </RadioGroup>
            </FormControl>
        )
    }
}

export default PetFilterForm;

