import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Pixabay Image Finder
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
