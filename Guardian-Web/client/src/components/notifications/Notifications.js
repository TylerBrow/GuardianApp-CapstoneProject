import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue'
import './Notifications.css'
import {getNotifications} from '../../actions/actions';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  green: {
    boxShadow: '5px 10px lightblue',
    fontSize: 27,
    backgroundColor: 'rgb(115,57,244)',
    color: green[100],
    width: '80%',
    margin: '20px 0',
    border: '1px solid lightblue'
  },
  pink: {
    boxShadow: '5px 10px lightblue',
    fontSize: 27,
    margin: '20px 0',
    backgroundColor: 'rgb(115,57,244)',
    // backgroundColor: theme.palette.getContrastText(pink[100]),
    color: pink[100],
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
    backgroundColor: 'rgb(115,57,244)',
    color: blue[100],
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

class NotificationsComponent extends Component {

  componentDidMount() {
    const user_id = getUserID();
    getNotifications(user_id);
  }

  render () {
    return <div>{this.CustomizedButtons(this.props)}</div>
  }
  
  CustomizedButtons(props) {
    const { classes } = props;
  
    return (
      <div className="reminders">
        <Button
          variant="contained"
          color="primary"
          className={classNames(classes.margin, classes.pink)}
        >
         
        </Button><br></br>
        <Button
          variant="contained"
          color="primary"
          className={classNames(classes.margin, classes.pink)}
        >
          
        </Button><br></br>
        <MuiThemeProvider theme={theme}>
          <Button variant="contained" color="primary" className={classes.green}>
          
  
          </Button><br></br>
        </MuiThemeProvider>
        <Button
          variant="contained"
          color="primary"
          disableRipple
          className={classNames(classes.margin, classes.blue)}
        >
        
        </Button><br></br>
      </div>
    );
  }
}

NotificationsComponent .propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(appState) {
  console.log(appState.notifications)
  return {
     notifications: appState.notifications
  }
}

export default withStyles(styles)(connect(mapStateToProps)(NotificationsComponent));