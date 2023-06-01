import { useState } from 'react'
import { Button, makeStyles, useTheme } from '@mui/material'
import { Person } from '@mui/icons-material'

const useStyles = makeStyles(() => ({
  button: {
    color: "white",
    backgroundColor: theme.palette.ss,
  }
}))

const App = () => {
  const classes = useStyles()
  return (
    <>
      <Button
        variant="contained"
        size="large"
        startIcon={<Person />}
        className={classes.button}
      >
        Material UI
      </Button>
    </>
  )
}

export default App
