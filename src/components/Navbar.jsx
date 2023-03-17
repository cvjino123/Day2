import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome To ALL
          </Typography>
          <Button color="inherit"><Link to='/Login'>Login</Link></Button>
          <Button color="inherit"><Link to='/Signin'>Signin</Link></Button>
          <Button color="inherit"><Link to='/Home'>Home</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
