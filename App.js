import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Gallery, GalleryImage } from 'react-gesture-gallery';
import { createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUsers, faChevronCircleDown, faArrowUp} from '@fortawesome/free-solid-svg-icons'
import { faAdobe, faApple, faGoogle, faAmazon, faMicrosoft } from '@fortawesome/free-brands-svg-icons'
import Logo from './_img/logo.png'

// import the custon CSS
import './styles/index.css'

const images = [
  'http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png',
  'http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png',
  'http://www.icons101.com/icon_png/size_256/id_79394/youtube.png',
];

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#D98825',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#F2B84B',
      main: '#D98825',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  avatar: {
    color: 'white',
    backgroundColor: 'gray',
    border: '4px solid black',
    padding: '12px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginTop: '15px',
    marginBottom: '14px',
  },
  navBar: {
    padding: '13px',
    backgroundColor: 'black',
    opacity: '0.76',
    height: '10vh',
    zIndex: '1',
  },
  navButtonContact: {
    position: 'absolute',
    top: '2.5vh',
    minTop: '10px',
    right: '18px',
    color: 'gold',
    opacity: '1',
    fontSize: '20px',
    zIndex: '2',
  },
  navButtonAbout: {
    position: 'absolute',
    top: '2.5vh',
    minTop: '10px',
    right: '183px',
    color: 'gold',
    opacity: '1',
    fontSize: '20px',
    zIndex: '2',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    zIndex: 1,
    color: 'white',
    opcaity:1,
  },
  card: {
    minWidth: 275,
  },
  cardbullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  cardtitle: {
    fontSize: 14,
  },
  cardpos: {
    marginBottom: 12,
  },
  gridroot: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 700,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  registerpaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  eventroot: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  TextField: {
    margin: 10,
  },
  overlay: {
    position:'absolute',
    width: '99.09%',
    height: '90vh',
    backgroundColor:'black',
    zIndex:1,
    opacity:0.5,
  },
  textcontainer: {
    position: 'absolute',
    top:'45%',
    left:'30%',
    right:'30%',
    color: 'white',
    border: 'solid',
    borderColor:'white',
    opcaity:1,
    borderWidth: 'thick ',
    zIndex: 2,
  },
  footer: {
    
  },
  upper: {
    backgroundColor: 'gray',
    color: 'white',
    padding: '10px',
    display: 'flex',
    alignItems: 'stretch',
  },
  lower: {
    display: 'flex',
    color: 'white',
    backgroundColor: 'black',
    paddingBottom: '13px',
  },
  buttonUp: {
    color: 'gold',
  },
}));

export default function ButtonAppBar() {
  const[index,setIndex] = React.useState(0)
  const classes = useStyles();
  const [events, setEvents] = React.useState('1');  

  const handleChange = event => {
    setEvents(events.target.value);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 2) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="app">

      {/*---------Navbar----------------*/}
      <div>
        <AppBar className={classes.navBar} position="sticky" color="secondary">
        </AppBar>
      </div>
      <div id="navbar-content">
        <Typography className={classes.root}>
          <Button className={classes.navButtonAbout} href="">About</Button>
          <Button className={classes.navButtonContact} href="">Contact Us</Button>
        </Typography>
      </div>
      {/*-------------------------------*/}

      {/*----------Overlay--------------*/}
      <div className="overlay-text-container" align="center">
        <h1 className="overlay-text">
          AAHVAAN
        </h1>
      </div>
      <div className="overlay-bg">
      </div>
      <Paper>
        <Gallery
          style={{
            background: "grey",
            height: "90vh",
            width: '100%',
          }}
          index={index}
          onRequestChange={i => {
            setIndex(i);
          }}
        >
          {images.map(image => (
            <GalleryImage objectFit="contain" key={image} src={image} className="image"/>
          ))}
        </Gallery>
      </Paper>
      {/*-------------------------------*/}

      {/*-----------About section-------------*/}
      <div id="about">
        <Paper>
          <Card>
            <AppBar position="sticky" color='secondary'>
              <Toolbar>
                <Typography variant="h5" className={classes.title} align='center'>
                  ABOUT
                </Typography>
              </Toolbar>
            </AppBar>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at convallis dui, hendrerit 
              pharetra justo. Duis maximus, dui vitae suscipit lobortis, ipsum diam ultrices quam, vel suscipit 
              ipsum nibh in orci. Curabitur vitae augue eleifend tortor varius varius. Etiam non elementum leo. 
              Phasellus id metus non est mattis ultrices. Praesent vel metus eget velit mollis dictum ac sed nunc. 
              Phasellus mattis, orci sed dictum malesuada, nulla nulla fringilla mauris, at convallis lacus 
              metus vel risus. In sagittis porttitor pharetra.
              Morbi ut pulvinar metus. Suspendisse quis risus vel ligula dictum volutpat et at dui. Nulla 
              vestibulum dapibus turpis eget feugiat. Suspendisse erat nibh, blandit eget sodales a, 
              fermentum a velit. Nulla consequat iaculis enim eget tincidunt. Pellentesque sapien ipsum, 
              ultricies sodales est non, sollicitudin malesuada erat. Nunc vulputate tempus venenatis. 
              Phasellus tincidunt dignissim enim vitae pretium. Ut tristique, massa a tristique viverra, 
              purus nulla pretium metus, et mattis nisl magna ac lorem. Donec et gravida dolor. Phasellus 
              facilisis risus nec magna vestibulum, et auctor orci maximus.
            </div>
          </Card>
        </Paper>
      </div>
      {/*-------------------------------------*/}

      {/*---------Form Components-------------*/}
      <div className={classes.root}>
        <AppBar position="sticky" color='secondary'>
          <Toolbar>
            <Typography variant="h5" className={classes.title} align='center'>
              REGISTER
              <br />
              <FontAwesomeIcon icon={faChevronCircleDown} />
            </Typography>
          </Toolbar>
        </AppBar>
      </div>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper} align="center">
            <div className={classes.avatar}>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <Button component={ Link } to="/single" variant="contained" color="secondary">
              Single
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} align="center">
            <div className={classes.avatar}>
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <Button component={ Link } to="/team" variant="contained" color="secondary">
              Team
            </Button>
          </Paper>
        </Grid>
      </Grid>
      {/*-------------------------------------*/}

      {/*------- Bar for sponsers-------*/}
      <Paper>
        <Card>
          <Typography variant="h5" color="textSecondary" align="center">
            Our Sponsers
          </Typography>
          <Typography variant="h6" align="center">
            <div className="sponsors">
              <FontAwesomeIcon icon={faAdobe} />&nbsp;&nbsp;
              <FontAwesomeIcon icon={faAmazon} />&nbsp;&nbsp;
              <FontAwesomeIcon icon={faApple} />&nbsp;&nbsp;
              <FontAwesomeIcon icon={faGoogle} />&nbsp;&nbsp;
              <FontAwesomeIcon icon={faMicrosoft} />&nbsp;&nbsp;
            </div>
          </Typography>
        </Card>
      </Paper>
      {/*------------------------------------*/}

      {/*------------Footer------------------*/}
      <Paper>
        <Card className={classes.footer}>
          <div className={classes.upper} align="right">
            <Typography style={{width: '100px',}}>For help or any queries:</Typography>
            <p style={{width: 'calc(100vw - 320px'}}></p>
            <Typography style={{width: '220px',}}>
              Contact-1: 8373-773747
              <br />
              Contact-2: 8373-773747
            </Typography>
          </div>
          
          <div className={classes.lower}>
            <img src={Logo} width="50px" height="60px" alt="Aahvaan Logo" />
            <p style={{width: 'calc(100vw - 100px)', textAlign: 'center', paddingTop: '10px'}}> 
              @Copyright 2020 AAHVAAN DTU
            </p>
            <Button href="" className={classes.buttonUp} style={{width: '50px', fontSize: '20px'}}>
              <FontAwesomeIcon icon={faArrowUp} />
            </Button>
          </div>
        </Card>  
      </Paper>
      {/*------------------------------------*/}
    </div>    
  );
}
