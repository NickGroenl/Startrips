import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import green from '@material-ui/core/colors/green';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Fleet from './components/fleet/fleet';
import Tours from './components/tours/tours';

import Footer from './components/footer/footer';
import './all.css';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const lenguajes =  
[
    {
      title: 'Idioma',
      subtitle1: 'Ingles',
      value1: 1,
      subtitle2: 'Ruso',
      value2: 2
    },
    {
      title: 'Idiom',
      subtitle1: 'Spanish',
      value1: 0,
      subtitle2: 'Russian',
      value2: 2
    },
    {
      title: 'идиома',
      subtitle1: 'английский',
      value1: 1,
      subtitle2: 'испанский',
      value2: 0
    }
]




class App extends Component {
  constructor(){
    super();
    this.state = {
      s_lenguaje: 1
    }
  }
  changeLenguaje = (e) => this.setState({s_lenguaje: e});

  render(){
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <div className="lenguaje">
            <h1>{lenguajes[this.state.s_lenguaje].title}</h1>
            <button onClick={()=> this.changeLenguaje(lenguajes[this.state.s_lenguaje].value1)}>{lenguajes[this.state.s_lenguaje].subtitle1}</button>
            <button onClick={()=> this.changeLenguaje(lenguajes[this.state.s_lenguaje].value2)}>{lenguajes[this.state.s_lenguaje].subtitle2}</button>
          </div>
          <Router>
            <Switch>
              <Route path="/home">
                <Navbar lenguaje={this.state.s_lenguaje}/>
                <Home lenguaje={this.state.s_lenguaje}/>
                <Footer lenguaje={this.state.s_lenguaje}/>
              </Route>
              <Route path="/tours">
                <Navbar lenguaje={this.state.s_lenguaje}/>
                <Tours lenguaje={this.state.s_lenguaje}/>
                <Footer lenguaje={this.state.s_lenguaje}/>
              </Route>
              <Route path="/fleet">
                <Navbar lenguaje={this.state.s_lenguaje}/>
                <Fleet lenguaje={this.state.s_lenguaje}/>
                <Footer lenguaje={this.state.s_lenguaje}/>
              </Route>
              <Route path="/">
                <Redirect to="/home"/>
              </Route>
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    )
  }
}

export default App;
