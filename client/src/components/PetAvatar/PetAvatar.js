import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 300,
    maxHeigth: 300,
    height:200,
    width: 300,
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
    <Card 
      className={classes.card} 
      onClick={() => {
        window.location.href = '/pet/' + props.pet._id
      }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.pet.nome}
          className={classes.media}
          height="100"
          image={props.pet.fotos[0] ? 
            props.pet.fotos[0] : 
            'https://st2.depositphotos.com/3378121/5471/i/950/depositphotos_54719649-stock-photo-funny-chihuahua-dog.jpg'}
          title={props.pet.nome}
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.pet.nome}

          </Typography>
          <Typography>
            {(props.pet.sexo === 'M') ?
            (<i className={`fas fa-mars fa-2x ${classes.icon}`}></i>) :
            (<i className={`fas fa-venus fa-2x ${classes.icon}`}></i>)}


            {(props.pet.especie === 'cachorro') ?
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
