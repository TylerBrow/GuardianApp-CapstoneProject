import React from "react"
import { Provider } from "react-redux"
import store from "../store"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Main from "./main/Main"
import { AuthProvider, AuthRoute } from "../lib/auth"
import Login from "./auth/Login"
import Register from "./auth/Register"
import AddNotifications from './addNotifications/AddNotifications';
import "bulma-start/css/main.css"
import "bulma-start/_javascript/main.js"
import "./logo/Logo.css"
import Logo from "./logo/Logo"




const App = props => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Router>
          <div>
          <div className="logo">
                    <Logo />
          </div>  
            {/* public routes */}
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/addnotifications" component={AddNotifications} />
            <Route exact path="/" component={Main}/>

            {/* private routes */}
            {/* <AuthRoute path="/" exact component={Main} /> */}
          </div>
        </Router>
      </Provider>
    </AuthProvider>
  )
}

export default App
