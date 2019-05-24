import React, {useEffect, useContext, useState, useReducer} from 'react'
import "./Main.css"
import '../logo/Logo.css'
// import { SnackbarProvider, withSnackbar } from 'notistack';
import {AuthContext} from '../../lib/auth'
import {withSnackbar} from 'notistack'
import axios from 'axios'
import moment from 'moment'





const Main = (props) => {


    const { user } = useContext(AuthContext)    
    
    useEffect(() => {
        getAlert()
    })
   
   let fence = []   
   function getAlert() {
    let oldCheckin = []
    if(user != null){
    axios.get('/api/checkin/' + user).then(resp => {oldCheckin = resp.data})
        setInterval(
            function getCheckin() {
                axios.get('/api/checkin/' + user).then(resp => {
                    if(resp.data.length !== 0){
                     const lastTime = resp.data[resp.data.length - 1]
                     const time = lastTime.timestamp
                     console.log(time)
                     let newCheckin = resp.data
                         if (oldCheckin.length !== newCheckin.length) {
                          oldCheckin = newCheckin
                          props.enqueueSnackbar('Checkin on ' + moment(Number(time)).format('LLL'),  {variant: 'success' , anchorOrigin: { vertical:'top', horizontal:'right'}})
                         }
                        }
                    })
                }, 10000)
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




// {/* <div className="main">
// {/* <Router> */}
//   <Route exact path='/' component={SimpleMap} />
//   <Route path="/addnotifications" component={AddNotifications} />
//   <Route path="/tips" component={Tips} />
//   <Route path="/checkpoints" component={Checkpoints} />
//   <Route path="/profile" component={Profile} />
// {/* </Router> */}
//   </div> */}




















// const Main = (props) => {

//     useEffect(() => {
//         getAlert()
//     })

    

//     const { user } = useContext(AuthContext)    
    
//    let checkin = []
//    let fence = [] 
//    function getAlert() {
//         setInterval(
//             function getCheckin() {
//                 axios.get('/api/checkin/' + user).then(resp => {
//                      let newCheckin = resp.data
//                          if (checkin.length !== newCheckin.length) {
//                           checkin = newCheckin
//                           props.enqueueSnackbar('Checkin Alert',  {variant: 'success' , anchorOrigin: { vertical:'top', horizontal:'right'}})
//                          }
//                     })
//                 }, 10000)
//         setInterval(
//             function getGeoFence() {
//                 axios.get('/api/geofence/' + user).then(resp => {
//                     let newFence = resp.data
//                         if (fence.length !== newFence.length) {
//                             fence = newFence
//                             props.enqueueSnackbar('Left Radius', {variant: 'warning', anchorOrigin: {vertical: 'top', horizontal: 'right'}})
//                         }
//                 })
//             }, 11000)
//     }

//     return (
//         <div>
//             <div className="logo">
//                 <Logo />
//             </div>  

//             <div className="homepage">   
//                 <div className="notificationreminders">
//                     <h1>Notification Reminders</h1>
//                     <Notifications />
//                 </div>

//                     <div className="main">
//                         <h1>Guardian Tracker</h1>
//                         <div className="googlemap">
//                             <SimpleMap />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//     )}

// export default withSnackbar(Main)