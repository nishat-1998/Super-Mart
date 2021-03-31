import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));
  
  export default function Event({event}){
    const classes = useStyles();
    const history = useHistory()
      const handleBook = (name) => {
          history.push(`/order/${name}`);
      }
    return (
        <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {event.avatar}
            </Avatar>
          }
      
        />
        <img style={{height: '300px'}} src={event.imageURL} alt=""/>
        <h4> {event.name}</h4>
        <CardActions disableSpacing>
          <Button onClick={() => handleBook(event.name)} variant="contained" color="primary">
              Buy Now
          </Button>
        </CardActions>
      </Card>
    );
};
