import React, { Component } from 'react';
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import ImageContainer from './components/ImageContainer'
import Jumbotron from './components/Jumbotron'

class App extends Component {

  state ={
    score: 0,
    top_score:0,
    pictures: []
  }

 
  render() {
    return (
      <>
      <Navbar score={this.state.score} top_score={this.state.top_score} />
      <Jumbotron/>
      <ImageContainer/>
      <Footer />
      </>
    )
  }
}

export default App;
