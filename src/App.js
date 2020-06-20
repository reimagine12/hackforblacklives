import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Chart from './components/Chart/Chart';
import NonProfits from './components/NonProfits/NonProfits';
import Footer from './components/Footer/Footer';
import theme from './theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth={false} disableGutters={true} className="container">
        <Container className="content">
          <Grid container spacing={2}>
            <Grid item sm={12} md={8}>
              <Intro />
            </Grid>
            <Grid item sm={12} md={12}>
              <Chart />
            </Grid>
            <Grid item sm={12} md={12}>
              <NonProfits />
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
