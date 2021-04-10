
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { InputLabel, Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function HarmonySelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Harmony</InputLabel>
        <Select
          native
          value={age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Harmony A</option>
          <option value={20}>Harmony B</option>
          <option value={30}>Harmony C</option>
        </Select>
      </FormControl>

      {
        // <FormControl className={classes.margin}>
        //   <Typography gutterBottom> Harmony </Typography>
        //   <Select
        //     labelId="demo-customized-select-label"
        //     id="demo-customized-select"
        //     value={age}
        //     onChange={handleChange}
        //     input={<BootstrapInput />}
        //   >
        //     <MenuItem value="">
        //       <em>None</em>
        //     </MenuItem>
        //     <MenuItem value={10}>harmony1</MenuItem>
        //     <MenuItem value={20}>harmony2</MenuItem>
        //     <MenuItem value={30}>harmony3</MenuItem>
        //   </Select>
        // </FormControl>
      }
    </React.Fragment>
  );
}

