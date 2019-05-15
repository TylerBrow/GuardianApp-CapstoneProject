import React, { useState, useContext } from "react"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'
import { Link } from "react-router-dom"
import { AuthContext } from "../../lib/auth"
import './Login.css'

const Login = props => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [errorText, setErrorText] = useState("")
  const { signin } = useContext(AuthContext)

  function sendLogin(e) {
    e.preventDefault()

    signin(username, password)
      .then(() => {
        props.history.push("/")
      })
      .catch(err => {
        setError(true)
        setErrorText(err)
      })
  }

  return (
    <div className="login">
      <Paper className="pad">
        <div className="loginIcon">
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            <span className="name">Guardian</span> Sign in
          </Typography>
        </div>
        <form onSubmit={sendLogin}>
          {error ? <Typography color="error">{errorText}</Typography> : ""}
          <FormControl error={error} margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Username</InputLabel>
            <Input
              onChange={e => setUsername(e.target.value)}
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
            />
          </FormControl>
          <FormControl error={error} margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              onChange={e => setPassword(e.target.value)}
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </FormControl>
           <Button
            className="loginButton"
            type="submit"
            width='50%'
            variant="contained"
            color= 'primary'
            fullWidth
          >
            SIGN IN
          </Button> <br></br> <br></br> <br></br> <br></br>
            <div className="member">Not a Member?  
            <Button
            component={Link}
            to="/register"
            className="registerButton"
            type="submit"
            width='70px'
            variant="contained"
            color="secondary"
          >
            Register
          </Button>
         </div>
        </form>
      </Paper>
    </div>
  )
}

export default Login