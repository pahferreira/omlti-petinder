/* import React from "react";
import  Avatar from '@material-ui/core/Avatar';
import 'typeface-roboto';
import { Typography, Card } from "@material-ui/core";

const imgSize = {
    width: 150,
    height: 150,
    marginBottom: 10
}
const divStyle = {
    display: 'inline-block',
    textAlign: 'center',
	marginBottom: 50,
	marginTop: 50
}

export default  (props) => {
    return(
        <div style={divStyle} onClick={props.click}>

            < Avatar src={props.img} style={imgSize} />
            <Typography variant="h5">{props.name}</Typography>
        </div>
    )
}
 */

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 200,
    maxHeigth: 200,
    height:180,
    width: 200,
    margin: 10
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover"
  },
  icon: {
      margin: 3,
      color: '#f50057',
      fontSize: "1.3em"
  }
};

function ImgMediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card} onClick={props.click}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="100"
          image={props.pet.fotos}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.pet.nome}

          </Typography>
          <Typography>
            {(props.pet.sexo == 'macho') ?
            (<i className={`fas fa-mars fa-2x ${classes.icon}`}></i>) :
            (<i className={`fas fa-venus fa-2x ${classes.icon}`}></i>)}


            {(props.pet.especie == 'cachorro') ?
            (<i className={`fas fa-dog fa-2x ${classes.icon}`}></i>) :
            (<i className={`fas fa-cat fa-2x ${classes.icon}`}></i>)}

          </Typography> 
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImgMediaCard);
