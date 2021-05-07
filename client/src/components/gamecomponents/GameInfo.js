import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'readux';
// import { sendStats } from "../redux/UserStats/userStatsActions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

const initialValues = {
  game_name: "",
  dollar: "",
  bitcoin: "",
  litecoin: "",
  dogecoin: ""
}

export default function GameInfo(props) {

  const classes = useStyles();
  console.log("PROPS", props.info);

  const [formValues, setFormValues] = useState(initialValues);

  const submitHandler = (e) => {
    e.preventDefault();
    props.sendStats(formValues, props.history)
  }

  if(props.info === true){
    return (
      <div className={classes.root}>
        <div>
          <TextField
            id="standard-full-width"
            label="Game Name"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
            <TextField
            label="Dollar starting amount"
            id="filled-margin-dense"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="dense"
            variant="outlined"
          />
          <TextField
            label="Bitcoin starting amount"
            id="filled-margin-dense"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="dense"
            variant="outlined"
          />
          <TextField
            label="Litecoin starting amount"
            id="outlined-margin-none"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            // margin="normal"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            label="Dogecoin starting amount"
            id="outlined-margin-none"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            variant="outlined"
          />
        </div>
        <button onClick={submitHandler}>Make a new game</button>
      </div>
    );
  } else {
    return(
      <div>LOSER</div>
    )
  }
}