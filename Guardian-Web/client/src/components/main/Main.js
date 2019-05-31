import React, {useEffect, useContext} from 'react'
import "./Main.css"
import '../logo/Logo.css'
import {AuthContext} from '../../lib/auth'
import {withSnackbar} from 'notistack'
import axios from 'axios'
import moment from 'moment'





const Main = (props) => {


    const { user } = useContext(AuthContext)    
    
    useEffect(() => {
        getAlert()
    }, [user])
     
   function getAlert() {
    let oldCheckin = []
    let fence = []
    if(user != null){
    axios.get('/api/checkin/' + user).then(resp => {oldCheckin = resp.data})
        setInterval(
            function getCheckin() {
                axios.get('/api/checkin/' + user).then(resp => {
                    if(resp.data.length !== 0){
                     const lastTime = resp.data[resp.data.length - 1]
                     const time = lastTime.timestamp
                     let newCheckin = resp.data
                         if (oldCheckin.length !== newCheckin.length) {
                          oldCheckin = newCheckin
                          props.enqueueSnackbar('Checkin on ' + moment(Number(time)).format('LLL'),  {variant: 'success' , anchorOrigin: { vertical:'top', horizontal:'right'}})
                         }
                        }
                    })
                }, 5000)
            }
        setInterval(
            function getGeoFence() {
                axios.get('/api/geofence/' + user).then(resp => {
                    let newFence = resp.data
                        if (fence.length !== newFence.length) {
                            fence = newFence
                            props.enqueueSnackbar('Left Radius', {variant: 'warning', anchorOrigin: {vertical: 'top', horizontal: 'right'}})
                        }
                })
            }, 60000)
    }

    return (
        <div>
        </div>
    )}

export default withSnackbar(Main)