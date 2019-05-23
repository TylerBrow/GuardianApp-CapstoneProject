import React from "react"
import { Provider } from "react-redux"
import store from "../store"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Main from "./main/Main"
import { AuthProvider } from "../lib/auth"
import Login from "./auth/Login"
import Register from "./auth/Register"
import AddNotifications from './addNotifications/AddNotifications';
import Tips from './tips/Tips'
import Checkpoints  from './checkpoints/Checkpoints'
import Profile from './profile/Profile'
import {SnackbarProvider} from 'notistack'
import SimpleMap from './GoogleMap'


import { library } from '@fortawesome/fontawesome-svg-core';
import { faStethoscope, faKey, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

library.add(faStethoscope, faHandHoldingHeart, faKey);

const App = props => {
  
  return (
    <AuthProvider>
      
      <Provider store={store}>
        <Router>
          <div>
            {/* public routes */}
            
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

            <SnackbarProvider maxSnack={3} >
              <Main />
              <Route exact path='/' component={SimpleMap} />
              <Route path="/addnotifications" component={AddNotifications} />
              <Route path="/tips" component={Tips} />
              <Route path="/checkpoints" component={Checkpoints} />
              <Route path="/profile" component={Profile} />
            </SnackbarProvider>
          </div>
        </Router>
      </Provider>
  
    </AuthProvider>
  )
}

export default App
