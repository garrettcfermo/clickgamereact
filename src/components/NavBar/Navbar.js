import React, { Component } from 'react';


const styles = {
  background: {
    backgroundColor: '#40403a',
    color:'white',
    fontWeight :"bold",
    boxShadow:"0px 2px 20px #40403a",
    padding:'20px'
  },
  links: {
    color:'white'
  }
  
}

class Navbar extends Component {


  render() {
    return (
      <nav style={styles.background} className="navbar nav-pills nav-justified sticky-top">
        <a onClick={this.Hello} style={styles.links} className="nav-item nav-link disabled" href="/">Clicky Brewery Game</a>
        <a style={styles.links} className="nav-item nav-link disabled" href="/">Click an image to begin!</a>
        <a style={styles.links} className="nav-item nav-link disabled" href="/">Score: {this.props.score} | Top Score: {this.props.top_score}</a>
      </nav>
      
    )
  }
}

export default Navbar
