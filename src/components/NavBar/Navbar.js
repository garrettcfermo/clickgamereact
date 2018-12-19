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
  },
  correctmsg:{
    color:"green",
    fontSize: "20px"
  },
  incorrectmsg:{
    color:"red",
    fontSize: "25px"
  }

}

class Navbar extends Component {

  render() {
    return (
      <nav style={styles.background} className="navbar nav-pills nav-justified sticky-top">
        <a style={styles.links} className="nav-item nav-link disabled" href="/">Clicky Brewery Game</a>
        <a style={this.props.message ==="Correct!" ? styles.correctmsg : styles.incorrectmsg} className="nav-item nav-link disabled" href="/">{this.props.message}</a>
        <a style={styles.links} className="nav-item nav-link disabled" href="/">Score: {this.props.score} | Top Score: {this.props.top_score}</a>
      </nav>
      
    )
  }
}

export default Navbar
