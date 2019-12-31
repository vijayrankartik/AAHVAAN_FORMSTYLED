import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
  root: {
    background: 'white',
    color: 'black',
  },
  p: {
    margin: 5,
    padding: 5
  }
}));



const generateMembersList = (members) => {
  return(
    members.map((member, index) => <p useStyles>Member {index + 1}: {member}</p>)
  )
}

const Confirm = ({ data }) => {
  const classes = useStyles();
  if (data.single) {
    // For single registrations.
    return (
      <div align='center'>
                <h1 align="center">
          <AppBar color="secondary">
            CONFIRM
          </AppBar> 
        </h1>
        <br />
      <br /><br /><br />
      <Card className={classes.Card} variant='outlined'>
      <CardContent>
      <Box boxShadow={5}>
      <React.Fragment className={classes.root}>
        <p className={classes.p}>Registration type: Single</p>
        <p className={classes.p}>Name: {data.name}</p>
        <p className={classes.p}>Email-id: {data.email}</p>
        <p className={classes.p}>Event: {data.events}</p>
        <p className={classes.p}>College: {data.college}</p>
        <p className={classes.p}>Accommodation wanted: {data.stay ? 'Yes' : 'No'}</p>
      </React.Fragment>
      </Box>
      </CardContent>
      </Card>
      </div>
    )
  } else {
    // For team registrations.
    return (
      <div align='center'>
                <h1 align="center">
          <AppBar color="secondary">
            CONFIRM
          </AppBar>
          </h1>
          <br /><br /><br /><br />
          <Card className={classes.Card} variant='outlined'>
      <CardContent>
      <Box boxShadow={5}>    
      <React.Fragment>
        <p className={classes.p}>Registration type: Team</p>
        <p className={classes.p}>Name (Leader): {data.name}</p>
        <p className={classes.p}>Email-id (Leader): {data.email}</p>
        <p className={classes.p}>Event: {data.events}</p>
        <p className={classes.p}>Members Count: {data.teamMemberCount}</p>
        <p className={classes.p}>Members Name:</p>
        {generateMembersList(data.teamMemberName)}
        <p className={classes.p}>College: {data.college}</p>
        <p className={classes.p}>Accommodation wanted: {data.stay ? 'Yes' : 'No'}</p>
      </React.Fragment>
      </Box>
      </CardContent>
      </Card>
      </div>
    )
  }
}

export default Confirm
