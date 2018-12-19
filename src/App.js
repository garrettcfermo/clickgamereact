import React, { Component } from 'react';
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import ImageContainer from './components/ImageContainer'
import Jumbotron from './components/Jumbotron'
import shuffle from 'shuffle-array'
import Brewery from './components/ImageContainer/brewery.json'

class App extends Component {

  state = {
    score: 0,
    top_score: 0,
    brewery: [],
    clicked: [],
    message:''
  }

  componentDidMount = () => {
    this.setState({ brewery: shuffle(Brewery) })
  }

  handleClick = event => {
    if (this.state.clicked.indexOf(event.target.getAttribute('alt')) !== -1) {
      this.setState({ brewery: shuffle(Brewery), clicked: [], score : 0, message:"You Lose"})
    } else {
      let clickedArr = this.state.clicked
      let currentScore = this.state.score +1
      let currentTopScore = this.state.top_score
      if(currentScore >= currentTopScore){
        currentTopScore = currentScore
      }

      clickedArr.push(event.target.getAttribute('alt'))
      this.setState({ brewery: shuffle(Brewery), score: currentScore, top_score: currentTopScore, message: "Correct!"})
    }
  }

  render() {
    return (
      <>
        <Navbar score={this.state.score} top_score={this.state.top_score} message={this.state.message}/>
        <Jumbotron />
        <ImageContainer brewery={this.state.brewery} click={this.handleClick} />
        <Footer />
      </>
    )
  }
}

export default App;
