import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import Confirm from './Confirm';
import AppBar from '@material-ui/core/AppBar';

const TeamForm = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      background: 'white',
      color: 'black',

    },
    form: {
      spacing: 5
    },
    TextField: {
      padding: 5,
      margin: 5,
      spacing: 5
    },
    InputLabel: {
      padding: 5,
      margin: 10,
      spacing: 5
    },
    Select: {
      padding: 5,
      margin: 10,
      spacing: 5
    },
    Checkbox: {
      padding: 10,
      margin: 10,
      spacing: 10
    },
    Button: {
      marginLeft: theme.spacing(1),
      marginTop: theme.spacing(0),
      spacing: 5,
    }  
  }));

  const classes = useStyles();

  // States to handle input from text-field.
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [collegeInput, setCollegeInput] = useState('')
  const [stayInput, setStayInput] = useState(false)
  const [additionalTeamMembers, setAdditionalMembers] = React.useState('')

  // Event handler for text-field input change
  const handleNameInputChange = (event) => {
    setNameInput(event.target.value)
  }

  const handleEmailInputChange = (event) => {
    setEmailInput(event.target.value)
  }

  const handleCollegeInputChange = (event) => {
    setCollegeInput(event.target.value)
  }

  const handleStayInputChange = (event) => {
    setStayInput(event.target.checked)
  }

  const handleTeamNumberChange = (event) => {
    setAdditionalMembers(event.target.value)
  }

  // State to toggle between form-view & confirmation-view
  const [formView, setFormView] = useState(true)

  // State to hold the user input
  const [data, setData] = useState({})
  //----------- Function to handle form submission -----------
  const handleSubmission = (event) => {
    // Handle the form submission.
    event.preventDefault()
    if (choosenEvents.length === 0) {
      alert('Please fill the events you want to participate in.')
      return
    }

    const inputData = {
      name: document.getElementById('name-leader').value,
      email: document.getElementById('email').value,
      teamMemberCount: document.getElementById('member-count').value,
      teamMemberName: [],
      events: choosenEvents,
      college: document.getElementById('college').value,
      stay: document.getElementById('stay-check').checked,
    }
    // Run a loop to collect the names of the team-members
    for (let i = 0; i < additionalTeamMembers; i++) {
      inputData.teamMemberName.push(document.getElementById(`member-name${i}`).value)
    }

    setData(inputData)
    setFormView(false)
  }

  // Event-handler for edit button click
  const handleEdit = () => {
    setFormView(true)
  }

  // Event-handler for proceed button click
  const submitForm = () => {
    console.log('Clicked')
    /*
    -
    - Write the code to push the userInput to database inside this function.
    -
    */
  }

  // Logic for the drop-down menu.
  // List of events to choose from. Change it to add the events.
  const sportsEvents = [
    'Event1',
    'Event2',
    'Event3',
    'Event4',
    'Event5',
    'Event6'
  ];
    
  const [choosenEvents, setChoosenEvents] = React.useState([])
    
  const handleChangeMultiple = event => {
    setChoosenEvents(event.target.value)
  };
  
  // Function to generate the field for members.
  const generateNameFields = (num) => {
    const inputFields = []
    for (let i = 0; i < num; i++)
      inputFields.push(<TextField required key={i} id={`member-name${i}`} label={`Member ${i+1}`} variant="outlined" fullWidth={true} />)
    return inputFields
  }

  if (formView) {
    return(
      <form className={classes.root} Validate autoComplete="off" onSubmit={handleSubmission}>
          <h1 align="center">
          <AppBar color="secondary">
            TEAM REGISTRATION
          </AppBar> 
          </h1><br /><br />
        <TextField className={classes.TextField} id="name-leader" label="Name (Leader)" variant="outlined" fullWidth={true} required
        value={nameInput} onChange={handleNameInputChange} />
        <TextField className={classes.TextField} id="email" label="Email (Leader)" type="email" variant="outlined" fullWidth={true} required
        value={emailInput} onChange={handleEmailInputChange} />
        <TextField className={classes.TextField} id="member-count" label="Members count (excluding leader)" variant="outlined" 
        type="number" InputProps={{ inputProps: { min: 1} }} fullWidth={true} value={additionalTeamMembers}
        onChange={handleTeamNumberChange} required />
        {generateNameFields(additionalTeamMembers)}
        {/*Dropdopwn for events*/}
        <InputLabel className={classes.InputLabel} id="mutiple-event-label">Events*</InputLabel>
        <Select className={classes.Select}
        labelId="mutiple-event-label"
        id="mutiple-events"
        multiple
        value={choosenEvents}
        onChange={handleChangeMultiple}
        input={<Input />}
        fullWidth={true}
        required
        >
        {sportsEvents.map(event=> (
          <MenuItem key={event} value={event}>
          {event}
          </MenuItem>
        ))}
        </Select>
        {/*-------------------*/}
        <TextField className={classes.TextField} id="college" label="College" variant="outlined" fullWidth={true} required 
        value={collegeInput} onChange={handleCollegeInputChange} />
        <FormControlLabel id="stay-label"
         control={<Checkbox className={classes.Checkbox} id="stay-check" value="stayNeeded" fullWidth={true} checked={stayInput} onChange={handleStayInputChange} />}
         label="Check here if you need accommodation"
        />
        {/*---Submit button---*/}<br />
        <Button className={classes.Button} variant="contained" color="secondary" type="submit">
        Submit
        </Button>
        {/*------------------*/}
      </form>
    )

  } else {

    return(
      <React.Fragment>
        <Confirm data={data} />
        <Button variant="contained" color="primary" onClick={handleEdit}>
          Edit
        </Button>
        <Button variant="contained" color="secondary" onClick={submitForm}>
          Proceed
        </Button>
      </React.Fragment>
    )
  }
}

export default TeamForm