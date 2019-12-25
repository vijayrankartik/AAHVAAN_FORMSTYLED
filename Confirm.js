import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  
  
}

)
  )

const generateMembersList = (members) => {
  return(
    members.map((member, index) => <p>Member {index + 1}: {member}</p>)
  )
}

const Confirm = ({ data }) => {
  if (data.single) {
    // For single registrations.
    return (
      <React.Fragment>
        <p>Registration type: Single</p>
        <p>Name: {data.name}</p>
        <p>Email-id: {data.email}</p>
        <p>Event: {data.events}</p>
        <p>College: {data.college}</p>
        <p>Accommodation wanted: {data.stay ? 'Yes' : 'No'}</p>
      </React.Fragment>
    )
  } else {
    // For team registrations.
    return (
      <React.Fragment>
        <p>Registration type: Team</p>
        <p>Name (Leader): {data.name}</p>
        <p>Email-id (Leader): {data.email}</p>
        <p>Event: {data.events}</p>
        <p>Members Count: {data.teamMemberCount}</p>
        <p>Members Name:</p>
        {generateMembersList(data.teamMemberName)}
        <p>College: {data.college}</p>
        <p>Accommodation wanted: {data.stay ? 'Yes' : 'No'}</p>
      </React.Fragment>
    )
  }
}

export default Confirm