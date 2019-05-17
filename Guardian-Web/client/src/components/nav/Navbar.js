import React from 'react'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import './Navbar.css';
import { Link } from 'react-router-dom'
import { bindCallback } from 'rxjs';
// import Button from '@material-ui/core/Button';
// import purple from '@material-ui/core/colors/purple';
// import green from '@material-ui/core/colors/green';

const styles = theme => ({
  add: {
    color: 'rgb(115,57,204)',
    fontWeight: 'bolder',
    fontSize: 30,
    margin: 20,
  },
  scheduled: {
    color: 'rgb(115,57,204)',
    fontWeight: 'bolder',
    fontSize: 30,
    margin: 20,
  },
  radius: {
    color: 'rgb(115,57,204)',
    fontWeight: 'bolder',
    fontSize: 30,
    margin: 20
  },
  moved: {
    color: 'rgb(115,57,204)',
    fontWeight: 'bolder',
    fontSize: 30,
    margin: 20
  },
  low: {
    color: 'rgb(115,57,204)',
    fontWeight: 'bolder',
    fontSize: 30,
    margin: 20
  },
  location: {
    color: 'rgb(115,57,204)',
    fontWeight: 'bolder',
    fontSize: 30,
    margin: 20
  },
  nearest: {
    color: 'rgb(115,57,204)',
    fontWeight: 'bolder',
    fontSize: 30,
    margin: 20
  },
  tips: {
    color: 'rgb(115,57,204)',
    fontWeight: 'bolder',
    fontSize: 30,
    margin: 20
  },
  simpleMenu: {
    width: '100%',
    height: 1200,
  },
  burger: {
    width: '100%',
  }
})

class Navbar extends React.Component {
  state = {
    anchorEl: null,
  };

  handleLink = url => {
    console.log(this.props.props)
    this.props.props.history.push(url)
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleSignout = (e) => {
    window.localStorage.removeItem("authtoken")
    console.log(window.localStorage)
  }


  render() {
    const { anchorEl } = this.state;

    return (
      <div className="navmenu">
        <Button className="burger"
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <i className="material-icons">dehaze</i>
        </Button>
        <Menu
          className={this.props.classes.simpleMenu}
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >

          <MenuItem><Button className="burger"
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClose }
        >
          <i className="material-icons">dehaze</i>
        </Button></MenuItem>
          <MenuItem className={this.props.classes.add} onClick={() => this.handleLink('/main')}>Home</MenuItem>
          <MenuItem className={this.props.classes.add} onClick={() => this.handleLink('/addnotifications')}>Add Notifications</MenuItem>
          <MenuItem className={this.props.classes.radius} onClick={this.handleLink}>Radius Alert</MenuItem>
          <MenuItem className={this.props.classes.moved} onClick={this.handleLink}>Haven't Moved Alert</MenuItem>
          <MenuItem className={this.props.classes.low} onClick={this.handleLink}>Low Battery Alert</MenuItem>
          <MenuItem className={this.props.classes.location} onClick={this.handleLink}>Location Check Points</MenuItem>
          <MenuItem className={this.props.classes.nearest} onClick={() => this.handleLink('/emergency')}>Nearest Emergency Services</MenuItem>
          <MenuItem className={this.props.classes.tips} onClick={() => this.handleLink('/tips')}>Alzheimer's Tips &amp; Advice</MenuItem>
          <Link to='/login'><MenuItem className={this.props.classes.tips} onClick={this.handleSignout}>Logout</MenuItem></Link>
        </Menu>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);

