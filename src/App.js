import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Chart from './components/Chart/Chart';
import Intro from './components/Intro/Intro';
import Header from './components/Header/Header';
import theme from './theme';
import './App.css';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container>
        <Grid container spacing={2}>
          <Grid item sm={12} md={8}>
            <Intro />
          </Grid>
          <Grid item sm={12} md={9}>
            <Chart />
          </Grid>
          <Grid item sm={12} md={3}>
            [Achievements]
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
