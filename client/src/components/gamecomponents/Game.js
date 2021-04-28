import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import GameInfo from './GameInfo';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Game() {
    const [getInfo, setGetInfo] = useState(false);
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Button variant="contained" color="primary" onClick={() => setGetInfo(!getInfo)}>
          Start Game
        </Button>
        <GameInfo info={getInfo}></GameInfo>
      </div>
    );
  }