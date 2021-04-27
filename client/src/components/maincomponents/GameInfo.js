import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

export default function GameInfo(props) {
  const classes = useStyles();
  console.log("PROPS", props.info);
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
      </div>
    );
  } else {
    return(
      <div>LOSER</div>
    )
  }
}