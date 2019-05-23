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
    <div className="navbar">
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
      <input
        accept="image/*"
        className={classes.input}
        id="text-button-file"
        multiple
        type="file"
      />

      <Button href="/addnotifications" className={classes.button}>
        Notifications
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="text-button-file"
        multiple
        type="file"
      />

      <Button href="/checkpoints" className={classes.button}>
        Check Points
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="text-button-file"
        multiple
        type="file"
      />

      <Button href="/tips" className={classes.button}>
        Tips
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="text-button-file"
        multiple
        type="file"
      />

      <Button href="/login" className={classes.logout}>
        Logout
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="text-button-file"
        multiple
        type="file"
      />
    </div>
  );
}

TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextButtons)



