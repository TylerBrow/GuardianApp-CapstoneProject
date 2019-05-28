import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'
import Button from '@material-ui/core/Button';
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';
import './Notifications.css'
import {getNotifications} from '../../actions/actions';
import { getUserID } from '../../lib/auth';
import { decode } from "jsonwebtoken"
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GroupIcon from '@material-ui/icons/Group'
import EventNoteIcon from '@material-ui/icons/EventNote'
import { AuthContext } from '../../lib/auth'

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  Health: {
    fontSize: 20,
    margin: '20px 0',
    backgroundColor: '#fff',
    color: pink[300],
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    "&:hover": {
      backgroundColor: "#fff"
    }
  },
  Social: {
    fontSize: 20,
    margin: '20px 0',
    backgroundColor: '#fff',
    color: blue[300],
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    "&:hover": {
      backgroundColor: "#fff"
    }
  },
  Tasks: {
    fontSize: 20,
    margin: '20px 0',
    backgroundColor: '#fff',
    color: green[300],
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    "&:hover": {
      backgroundColor: "#fff"
    }
  },
  Custom: {
    fontSize: 20,
    margin: '20px 0',
    backgroundColor: '#fff',
    color: orange[300],
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    "&:hover": {
      backgroundColor: "#fff"
  }
  }
})



const theme = createMuiTheme({
  palette: {
    primary: green,
    color: green[500],
  },
  typography: {
    useNextVariants: true,
  },
});

const NotificationsComponent = (props) => {
  const { user } = useContext(AuthContext)
  const { notifications, newTime } = useSelector(appState => {
    return {
      notifications: appState.notifications
    }
  })

  useEffect(() => {
    getNotifications(user)
  }, [])

  const { classes } = props

  return (
    <div>
      <div className="reminders">
        {
        notifications.map((item, i) => (
          <Button
            variant="contained"
            color= 'white'
            className={classNames(classes.margin, classes[item.category])}
            key = {'key' + i}
          >
            { item.category === 'Health' ?
              <FontAwesomeIcon
                icon="stethoscope"
                size="2x"
              />: item.category === 'Social'?
              <GroupIcon style={{ fontSize: 50 }}/>
              : item.category === 'Tasks'?
              <EventNoteIcon style={{ fontSize: 50 }}/>
              : item.category === 'Custom'?
              <FontAwesomeIcon
                icon="hand-holding-heart"
                size="2x"
              />:''
            }
            <div className="date-time">
              <span>{item.message}</span>
              <span>{moment(Number(item.time)).format('LLL')}</span>
            </div>
          </Button>
        ))
      }
      </div>
    </div>
  )
}

NotificationsComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(NotificationsComponent)