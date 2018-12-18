import React, { Component } from 'react';
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import ImageContainer from './components/ImageContainer'
import Jumbotron from './components/Jumbotron'

class App extends Component {

  state ={

  }

  render() {
    return (
      <>
      <Navbar/>
      <Jumbotron/>
      <ImageContainer/>
      <Footer />
      </>
    )
  }
}

export default App;
