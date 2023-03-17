import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signin = () => {
  return (
    <div>
      <Typography variant='h3'color='primary'>Login to  </Typography>
      <TextField variant='outlined' label='Name'></TextField>
      <br></br>
      <TextField variant='filled' label='Mobile NO'></TextField>
      <br></br>
      <TextField variant='standard' label='Username'></TextField>
      <br></br>
      <TextField variant='filled' label='Password' type='password'></TextField>
      <br></br>
      <Button variant="contained">Submit</Button>
    </div>
  )
}

export default Signin
