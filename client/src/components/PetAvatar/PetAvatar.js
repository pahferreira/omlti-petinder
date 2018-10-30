import React from "react";
import  Avatar from '@material-ui/core/Avatar';
import 'typeface-roboto';
import { Typography } from "@material-ui/core";

const imgSize = {
    width: 150,
    height: 150,
    marginBottom: 10
}
const divStyle = {
    display: 'inline-block',
    textAlign: 'center',
    marginBottom: 10
}

export default  (props) => {
    return(
        <div style={divStyle} onClick={props.click}>
            < Avatar src={props.img} style={imgSize} />
            <Typography variant="h5">{props.name}</Typography>
        </div>
    )
}
