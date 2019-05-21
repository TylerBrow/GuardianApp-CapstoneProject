import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Fade from '@material-ui/core/Fade';
import './Navbar.css';
import { withStyles } from '@material-ui/core/styles';
// import { bindCallback } from 'rxjs';
// import purple from '@material-ui/core/colors/purple'; 
// import green from '@material-ui/core/colors/green';
// import login from '../auth/Login'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { AuthContext } from '../../lib/auth';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function TextButtons(props) {
  const { classes } = props;
  return (
    <div>
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
    </div>
  );
}

TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextButtons);
// const styles = theme => ({
//   button: {
//     margin: theme.spacing.unit,
//   },
//   input: {
//     display: 'none',
//   },
// });


// // function TextButtons(props) {
// //   const { classes } = props;

// class Navbar extends React.Component {
//   state = {
//     anchorEl: null,
//   };

//   handleLink = (url) => {
//     /* this.props.props.history.push(url) */
//   };

//   handleClick = event => {
//     this.setState({ anchorEl: event.currentTarget });
//   };

//   handleClose = () => {
//     this.setState({ anchorEl: null });
//   };

//   handleSignout = (e) => {
//     window.localStorage.removeItem("authtoken")
//     console.log("window.localstorage: " + window.localStorage)
//   }


//   render() {
//     const { anchorEl } = this.state;

//   return (
//     <div id="menubuttons">
//       <Button className={this.props.classes.add} onClick={() => this.handleLink('/')}>Home</Button>
//       <Button className={this.props.classes.add}>Add<br></br>Notifications</Button>
//       <Button className={this.props.classes.location}>Location Check Points &amp;<br></br>Nearest Emergency Services</Button>
//       <Button className={this.props.classes.tips}>Tips</Button>
//       <Button className={this.props.classes.signout}>Logout</Button>
//     </div>
//   );
// }
// }
// Navbar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };


// export default withStyles(styles)(Navbar);
// const styles = {
//   list: {
//     width: 300, 
    
//   },
//   sideList: {
//     width: 'auto',

//   }
  
// };

// class Navbar extends React.Component {
//   state = {
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   };

//   toggleDrawer = (side, open) => () => {
//     this.setState({
//       [side]: open,
//     });
//   };

//   render() {
//     const { classes } = this.props;

//     const Home = (
//       <div className={classes.Home}>
//         <List>
//             <ListItem>
//             <Link to='/login'><MenuItem className={this.props.classes.tips} onClick={this.handleSignout}>Logout</MenuItem></Link>
//             </ListItem>
//         </List>
//       </div>
//     );
//     const Alerts = (
//       <div className={classes.list}>
//         <List>
//             <ListItem className={this.props.classes.radius} onClick={this.handleLink}>Radius Alert</ListItem>
//            <ListItem className={this.props.classes.moved} onClick={this.handleLink}>Haven't Moved Alert</ListItem>
//            <ListItem className={this.props.classes.low} onClick={this.handleLink}>Low Battery Alert</ListItem>
//            <ListItem className={this.props.classes.location} onClick={this.handleLink}>Location Check Points Alerts</ListItem>
//             <ListItem>
//             <Link to='/login'><MenuItem className={this.props.classes.tips} onClick={this.handleSignout}>Logout</MenuItem></Link>
//             </ListItem>
//         </List>
//       </div>
//       );
//     return (
//       <div>
//         <div id="menubuttons">
//         <Button onClick={this.toggleDrawer('right', true)}>Home</Button>
//         <Button onClick={this.toggleDrawer('right', true)}>Add Notifications</Button>
//         <Button onClick={this.toggleDrawer('right', true)}>Alerts</Button>
//         <Button onClick={this.toggleDrawer('right', true)}>Tips</Button>
//         </div>
  
//         <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
//           <div className="menudrawers"
//             tabIndex={0}
//             role="button"
//             onClick={this.toggleDrawer('right', false)}
//             onKeyDown={this.toggleDrawer('right', false)}
//           >
//             {Home}{Alerts}
//           </div>
//         </Drawer>
//       </div>
//     );
//   }
// }

// Navbar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Navbar);


// class Navbar extends React.Component {
//   state = {
//     anchorEl: null,
//   };

//   handleLink = url => {
//         console.log(this.props.props)
//         this.props.props.history.push(url)
//       }


//   handleClick = event => {
//     this.setState({ anchorEl: event.currentTarget });
//   };

//   handleClose = () => {
//     this.setState({ anchorEl: null });
//   };

//   handleSignout = (e) => {
//         window.localStorage.removeItem("authtoken")
//         console.log(window.localStorage)
//       }

//   render() {
//     const { anchorEl } = this.state;
//     const open = Boolean(anchorEl);

//     return (
//       <div className="navmenu">
//         <Button
//           aria-owns={open ? 'fade-menuone' : undefined}
//           aria-haspopup="true"
//           onClick={this.handleClick}
//         >
//           Home
//         </Button>
//         <Menu
//           // className={this.props.classes.fadeMenuone}
//           id="fade-menuone"
//           anchorEl={anchorEl}
//           open={open}
//           onClose={this.handleClose}
//           TransitionComponent={Fade}
//         >
//         <MenuItem>Sign Out</MenuItem>
//         </Menu>
        
//         <Button
//           aria-owns={open ? 'fade-menu' : undefined}
//           aria-haspopup="true"
//           onClick={this.handleClick}
//         >
//           Alerts
//         </Button>
//         <Menu
//           id="fade-menu"
//           anchorEl={anchorEl}
//           open={open}
//           onClose={this.handleClose}
//           TransitionComponent={Fade}
//         >
//           <MenuItem onClick={this.handleClose}>Profile</MenuItem>
//           <MenuItem onClick={this.handleClose}>My account</MenuItem>
//           <MenuItem onClick={this.handleClose}>Logout</MenuItem>
//         </Menu>
      
//         <Button
//         aria-owns={open ? 'fade-menu' : undefined}
//         aria-haspopup="true"
//         onClick={this.handleClick}
//         >
//         Check Points
//         </Button>
//         <Menu
//         id="fade-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={this.handleClose}
//         TransitionComponent={Fade}
//         >
//         <MenuItem onClick={this.handleClose}>Profile</MenuItem>
//         <MenuItem onClick={this.handleClose}>My account</MenuItem>
//         <MenuItem onClick={this.handleClose}>Logout</MenuItem>
//         </Menu>


//         <Button
//         aria-owns={open ? 'fade-menu' : undefined}
//         aria-haspopup="true"
//         onClick={this.handleClick}
//         >
//         Tips
//         </Button>
//         <Menu
//         id="fade-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={this.handleClose}
//         TransitionComponent={Fade}
//         >
//         <MenuItem onClick={this.handleClose}>Profile</MenuItem>
//         <MenuItem onClick={this.handleClose}>My account</MenuItem>
//         <MenuItem onClick={this.handleClose}>Logout</MenuItem>
//         </Menu>
//         </div>
//         );
//         }
//         }

//         Navbar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default Navbar

// const styles = theme => ({
//   add: {
//     color: 'rgb(115,57,204)',
//     fontWeight: 'bolder',
//     fontSize: 30,
//     margin: 20,
//   },
//   scheduled: {
//     color: 'rgb(115,57,204)',
//     fontWeight: 'bolder',
//     fontSize: 30,
//     margin: 20,
//   },
//   radius: {
//     color: 'rgb(115,57,204)',
//     fontWeight: 'bolder',
//     fontSize: 30,
//     margin: 20
//   },
//   moved: {
//     color: 'rgb(115,57,204)',
//     fontWeight: 'bolder',
//     fontSize: 30,
//     margin: 20
//   },
//   low: {
//     color: 'rgb(115,57,204)',
//     fontWeight: 'bolder',
//     fontSize: 30,
//     margin: 20
//   },
//   location: {
//     color: 'rgb(115,57,204)',
//     fontWeight: 'bolder',
//     fontSize: 30,
//     margin: 20
//   },
//   nearest: {
//     color: 'rgb(115,57,204)',
//     fontWeight: 'bolder',
//     fontSize: 30,
//     margin: 20
//   },
//   tips: {
//     color: 'rgb(115,57,204)',
//     fontWeight: 'bolder',
//     fontSize: 30,
//     margin: 20
//   },
//   simpleMenu: {
//     width: '100%',
//     height: 1200,
//   },
//   burger: {
//     width: '100%',
//   }
// })

// class Navbar extends React.Component {
//   state = {
//     anchorEl: null,
//   };

//   handleLink = url => {
//     console.log(this.props.props)
//     this.props.props.history.push(url)
//   }

//   handleClick = event => {
//     this.setState({ anchorEl: event.currentTarget });
//   };

//   handleClose = () => {
//     this.setState({ anchorEl: null });
//   };

//   handleSignout = (e) => {
//     window.localStorage.removeItem("authtoken")
//     console.log(window.localStorage)
//   }


//   render() {
//     const { anchorEl } = this.state;

//     return (
//       <div className="navmenu">
//         <Button className="burger"
//           aria-owns={anchorEl ? 'simple-menu' : undefined}
//           aria-haspopup="true"
//           onClick={this.handleClick}
//         >
//           <i className="material-icons">dehaze</i>
//         </Button>
//         <Menu
//           className={this.props.classes.simpleMenu}
//           id="simple-menu"
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl)}
//           onClose={this.handleClose}
//         >

//           <MenuItem><Button className="burger"
//           aria-owns={anchorEl ? 'simple-menu' : undefined}
//           aria-haspopup="true"
//           onClick={this.handleClose }
//         >
//           <i className="material-icons">dehaze</i>
//         </Button></MenuItem>
//           <MenuItem className={this.props.classes.add} onClick={() => this.handleLink('/main')}>Home</MenuItem>
//           <MenuItem className={this.props.classes.add} onClick={() => this.handleLink('/addnotifications')}>Add Notifications</MenuItem>
//           <MenuItem className={this.props.classes.radius} onClick={this.handleLink}>Radius Alert</MenuItem>
//           <MenuItem className={this.props.classes.moved} onClick={this.handleLink}>Haven't Moved Alert</MenuItem>
//           <MenuItem className={this.props.classes.low} onClick={this.handleLink}>Low Battery Alert</MenuItem>
//           <MenuItem className={this.props.classes.location} onClick={this.handleLink}>Location Check Points</MenuItem>
//           <MenuItem className={this.props.classes.nearest} onClick={() => this.handleLink('/emergency')}>Nearest Emergency Services</MenuItem>
//           <MenuItem className={this.props.classes.tips} onClick={() => this.handleLink('/tips')}>Alzheimer's Tips &amp; Advice</MenuItem>
//           <Link to='/login'><MenuItem className={this.props.classes.tips} onClick={this.handleSignout}>Logout</MenuItem></Link>
//         </Menu>
//       </div>
//     );
//   }
// }

// Navbar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Navbar);



