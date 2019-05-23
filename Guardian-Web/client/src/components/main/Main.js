import React, {useEffect, useContext, useState} from 'react'
import "./Main.css"
import Notifications from '../notifications/Notifications'
import Logo from '../logo/Logo'
import '../logo/Logo.css'
import SimpleMap from '../GoogleMap'
import CheckPoint from '../CheckpointMap'
// import { SnackbarProvider, withSnackbar } from 'notistack';
import {getCheckin, getGeoFence, getNoMove} from '../../actions/actions'
import {AuthContext} from '../../lib/auth'
import {withSnackbar} from 'notistack'
import axios from 'axios'



const Main = (props) => {

    useEffect(() => {
        getAlert()
    })

    // let [user_id] = useState('')

    const { user } = useContext(AuthContext)    
    
   let checkin = []
   let fence = [] 
   function getAlert() {
        setInterval(
            function getCheckin() {
                axios.get('/api/checkin/' + user).then(resp => {
                     let newCheckin = resp.data
                         if (checkin.length !== newCheckin.length) {
                          checkin = newCheckin
                          props.enqueueSnackbar('Checkin Alert',  {variant: 'success' , anchorOrigin: { vertical:'top', horizontal:'right'}})
                         }
                    })
                }, 10000)
        setInterval(
            function getGeoFence() {
                axios.get('/api/geofence/' + user).then(resp => {
                    let newFence = resp.data
                        if (fence.length !== newFence.length) {
                            fence = newFence
                            props.enqueueSnackbar('Left Radius', {variant: 'warning', anchorOrigin: {vertical: 'top', horizontal: 'right'}})
                        }
                })
            }, 11000)
    }

    return (
        <div>
            <div className="logo">
                <Logo />
            </div>  

            <div className="homepage">   
                <div className="notificationreminders">
                    <h1>Notification Reminders</h1>
                    <Notifications />
                </div>

                    <div className="main">
                        <h1>Guardian Tracker</h1>
                        <div className="googlemap">
                            <SimpleMap />
                        </div>
                    </div>
                </div>
            </div>
    )}

export default withSnackbar(Main)