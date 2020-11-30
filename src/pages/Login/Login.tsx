import React, { ChangeEvent, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Button from '@material-ui/core/Button'
import useStyles from './styles'

const Login: React.FC = () => {
  const [password, setPassword] = useState<string>('')
  const [hasError, setHasError] = useState<boolean>(false)
  const classes = useStyles()
  const handlePasswordOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setPassword(value)
    setHasError(!(value.length > 4 || value.match('/[^0-9a-zA-Z]/')))
  }
  const handelSubmit = () => {
    console.log('hello')
  }
  return (
    <form
      className={classes.container}
      noValidate
      autoComplete="off"
      onSubmit={handelSubmit}
    >
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="MedicKabisha" />
        <CardHeader className={classes.header1} title="Login To Your Acount" />
        <CardContent>
          <div>
            <TextField
              fullWidth
              variant="outlined"
              id="username"
              type="email"
              placeholder="Username"
              margin="normal"
              required
              className={classes.txt}
            />
            <TextField
              required
              fullWidth
              variant="outlined"
              id="password"
              type="password"
              placeholder="Password"
              margin="normal"
              className={classes.txt}
              value={password}
              onChange={handlePasswordOnChange}
              helperText={
                hasError
                  ? 'Password should contains chars and nums and length at least 4 '
                  : ''
              }
              error={hasError}
            />
          </div>
        </CardContent>

        <Button
          variant="contained"
          size="small"
          className={classes.loginBtn}
          type="submit"
        >
          Login
        </Button>
      </Card>
    </form>
  )
}

export default Login
