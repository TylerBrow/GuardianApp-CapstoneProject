import React from 'react'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import './Navbar.css';
import { withStyles } from '@material-ui/core/styles';


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
      backgroundColor: "#fff",
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

      <Button href="/login" className={classes.logout}>
        <span id="span">Logout</span>
      </Button>
    </div>
  );
}

TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextButtons)



