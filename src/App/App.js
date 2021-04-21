import React from 'react';
import './App.css';
import SideMenue from '../components/SideMenue';
import { CssBaseline, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Header from '../components/Header';
import Employes from '../pages/Employes/Employes';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333996',
      light: '#3c44b126'
    },
    secondary: {
      main: '#f8324526',
      light: '#f8324526'
    },
    background: {
      default: '#f4f5fd'
    }
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      },
    },
  },
  props: {
    MuiIconButton : {
      disableRipple: true,
    }
  }
})

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <SideMenue />
      <div className={classes.appMain}>
        <Header />
        <Employes />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
