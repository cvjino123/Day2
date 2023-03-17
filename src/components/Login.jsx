import { TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
     {/* <h3>Login to FaceBook</h3>
      <input type="text" placeholder="Email address" name="" id="" />
      <div>
      <input type="password" placeholder="Password" name="" id="" />
      </div>
      <button type="Submit">Login</button>
      <br>
      </br> */}
      <Typography variant='h3'color='primary'>Login to fb </Typography>
      <TextField variant='filled' label='Email address'></TextField>
      <br></br>
      <TextField variant='filled' label='Password'></TextField>
    </div>
    
  )
}

export default Login

