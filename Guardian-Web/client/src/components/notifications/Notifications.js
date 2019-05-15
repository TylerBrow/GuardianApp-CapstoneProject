import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';
import './Notifications.css'

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  green: {
    boxShadow: '5px 10px lightblue',
    fontSize: 27,
    backgroundColor: 'white',
    color: green[500],
    width: '80%',
    margin: '20px 0',
    border: '1px solid lightblue'
  },
  pink: {
    boxShadow: '5px 10px lightblue',
    fontSize: 27,
    margin: '20px 0',
    backgroundColor: 'white',
    backgroundColor: theme.palette.getContrastText(pink[300]),
    color: pink[300],
    width: '80%',
    border: '1px solid lightblue',
    '&:hover': {
      backgroundColor: pink[700],
    },
  },
  blue: {
    boxShadow: '5px 10px lightblue',
    textTransform: 'uppercase',
    fontSize: 27,
    margin: '20px 0',
    width: '80%',
    padding: '6px 12px',
    backgroundColor: 'white',
    color: '#0062cc',
    border: '1px solid lightblue',
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
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
});



const theme = createMuiTheme({
  palette: {
    primary: green,
    color: green[500],
  },
  typography: {
    useNextVariants: true,
  },
});

function CustomizedButtons(props) {
  const { classes } = props;

  return (
    <div className="reminders">
      <Button
        variant="contained"
        color="primary"
        className={classNames(classes.margin, classes.pink)}
      >
        Dentist Appointment
      </Button><br></br>
      <Button
        variant="contained"
        color="primary"
        className={classNames(classes.margin, classes.pink)}
      >
        Take Pill
      </Button><br></br>
      <MuiThemeProvider theme={theme}>
        <Button variant="contained" color="primary" className={classes.green}>
          Meeting
        </Button><br></br>
      </MuiThemeProvider>
      <Button
        variant="contained"
        color="primary"
        disableRipple
        className={classNames(classes.margin, classes.blue)}
      >
        Clean Kitchen
      </Button><br></br>
    </div>
  );
}

CustomizedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedButtons);