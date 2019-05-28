import React, {useContext} from 'react'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import './Navbar.css';
import { withStyles } from '@material-ui/core/styles';
import {AuthContext} from '../../lib/auth'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    color: 'white',
    fontSize: 18,
    padding: '0px 20px',
    marginRight: 10,
    height: 40,
    fontWeight: 'bold',
    "&:hover": {
      backgroundColor: "white",
      color: 'rgb(115,57,244)'
    }
  },
  logout: {
    margin: theme.spacing.unit,
    color: 'white',
    fontSize: 18,
    padding: '0px 20px',
    marginRight: 10,
    height: 40,
    fontWeight: 'bold',
    "&:hover": {
      backgroundColor: "rgb(115,57,244)",
      color: '#fff'
    }
  },
  input: {
    display: 'none',
  },
});

function TextButtons(props) {
  const { classes } = props;

  const {signout} = useContext(AuthContext)

  function logout() {
    signout()
  }

  return (
    <div id="navbar">
      <Button href="/" className={classes.button}>
        Home
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="text-button-file"
        multiple
        type="file"
      />

      <Button href="/profile" className={classes.button}>
        Profile
      </Button>
      <Button href="/addnotifications" className={classes.button}>
        Notifications
      </Button>

      <Button href="/checkpoints" className={classes.button}>
        Check Points
      </Button>

      <Button href="/tips" className={classes.button}>
        Tips
      </Button>
      <span id="span">
      <Button href="/login" className={classes.logout} onClick={logout}>
        Logout
      </Button>
      </span>
    </div>
  );
}

TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextButtons)



