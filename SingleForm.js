import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Checkbox from '@material-ui/core/Checkbox'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Confirm from './Confirm'

const SingleForm = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      background: 'white',
      color: 'black',
    },
    form: {
      spacing: 5
    },
    TextField: {
      padding: 0,
      margin: 8,
      spacing: 5,
      width: '92vw',
      marginLeft: '4vw'
    },
    InputLabel: {
      padding: 5,
      margin: 10,
      marginLeft: '4vw',
      spacing: 5
    },
    Select: {
      padding: 5,
      margin: 5,
      marginLeft: '4vw',
      spacing: 5,
      width: '92vw',
    },
    Checkbox: {
      padding: 10,
      margin: 10,
      spacing: 10,
      marginLeft: '4vw'
    },
    Button: {
      marginLeft: '4vw',
      marginTop: theme.spacing(0),
      spacing: 5,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

  const classes = useStyles();

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

  const [choosenEvent, setChoosenEvent] = React.useState('')

  const handleChangeEvent = event => {
    setChoosenEvent(event.target.value)
  };

  // States to handle input from text-field.
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [collegeInput, setCollegeInput] = useState('')
  const [stayInput, setStayInput] = useState(false)

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

  // State to toggle between form view & confirmation view.
  const [formView, setFormView] = useState(true)

  // State to hold the user entered data.
  const [data, setData] = useState({})

  // Function for handling form submissions.
  const handleSubmission = (event) => {
    // Handle the form submission.
    event.preventDefault()
    if (choosenEvent === '') {
      alert('Please fill the events you want to participate in.')
      return
    }

    const inputData = {
      single: true,
      name: nameInput,
      email: emailInput,
      teamMemberCount: 0,
      teamMemberName: null,
      events: choosenEvent,
      college: collegeInput,
      stay: stayInput,
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
    console.log(data)
    /*
    -
    - Write the code to push the userInput to database inside this function.
    -
    */
  }

  if (formView) {
    return (
      <div align='center'>
      <React.Fragment>
        <h1 align="center">
          <AppBar color="secondary">
            SINGLE REGISTRATION
          </AppBar> 
        </h1>
        <br />
        <br />
        <br />
        <br />
        <form className={classes.root} autoComplete="off" onSubmit={handleSubmission} >
          <TextField className={classes.TextField} id="name" label="Name" variant="outlined" required
          value={nameInput} onChange={handleNameInputChange} />
          <TextField className={classes.TextField} id="email" label="Email" type="email" variant="outlined" required
          value={emailInput} onChange={handleEmailInputChange} />
          
          {/*Dropdopwn for events*/}
          <FormControl required className={classes.formControl}>
            <InputLabel className={classes.InputLabel} id="event-label">Events</InputLabel>
            <Select
            className={classes.Select}
            labelId="event-label"
            id="events"
            value={choosenEvent}
            onChange={handleChangeEvent}
            input={<Input />}
            >
            <MenuItem value="" disabled>Events</MenuItem>
            {sportsEvents.map(event=> (
              <MenuItem key={event} value={event}>
              {event}
              </MenuItem>
            ))}
            </Select>
          </FormControl>
          
          {/*-------------------*/}
          <TextField className={classes.TextField} id="college" label="College" variant="outlined" required 
          value={collegeInput} onChange={handleCollegeInputChange} />
          <FormControlLabel id="stay-label"
          control={<Checkbox className={classes.Checkbox} id="stay-check" value="stayNeeded" checked={stayInput} onChange={handleStayInputChange} />}
          label="Check here if you need accommodation"
          />
          {/*---Submit button---*/}
          <br />
          <Button className={classes.Button} variant="contained" color="secondary" type="submit">
            Submit
          </Button>
          {/*------------------*/}
        </form>
      </React.Fragment>
      </div>
    )

  } else {

    return(
      <div align='center'>
      <React.Fragment>
        <Confirm data={data} />
        <Button className={classes.Button} variant="contained" color="primary" onClick={handleEdit}>
          Edit
        </Button>
        <Button className={classes.Button} variant="contained" color="secondary" onClick={submitForm}>
          Proceed
        </Button>
      </React.Fragment>
      </div>
    )

  }
} 

export default SingleForm
