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


import { library } from '@fortawesome/fontawesome-svg-core';
import { faStethoscope, faKey, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

library.add(faStethoscope, faHandHoldingHeart, faKey);

const App = props => {
  return (
    <AuthProvider>
      <SnackbarProvider maxSnack={3} >
      <Provider store={store}>
        <Router>
          <div>
            {/* public routes */}
            <Route exact path="/" component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/addnotifications" component={AddNotifications} />
            <Route path="/tips" component={Tips} />
            <Route path="/checkpoints" component={Checkpoints} />
            <Route path="/profile" component={Profile} />
          </div>
        </Router>
      </Provider>
      </SnackbarProvider>
    </AuthProvider>
  )
}

export default App
