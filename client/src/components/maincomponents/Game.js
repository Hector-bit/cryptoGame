import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const [gameInfoSlide, setGameInfoSlide] = useState(false);

export default function Game() {
    const classes = useStyles();
    
    return (
      <div className={classes.root}>
        <Button variant="contained" color="primary" onClick={setGameInfoSlide => {!gameInfoSlide}}>
          Start Game
        </Button>
      </div>
    );
  }