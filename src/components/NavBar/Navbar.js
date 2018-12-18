import React, { Component } from 'react';


const styles = {
  background: {
    backgroundColor: '#40403a',
    color:'white',
    fontWeight :"bold",
    boxShadow:"0px 2px 10px #40403a",
    padding:'20px'
  }
  
}

class Navbar extends Component {

  render() {
    return (
      <nav style={styles.background} class="navbar nav-pills nav-justified sticky-top">
        <a class="nav-item nav-link disabled">Clicky Brewery Game</a>
        <a class="nav-item nav-link disabled" >Click an image to begin!</a>
        <a class="nav-item nav-link disabled" >Score:0 | Top Score:0</a>
      </nav>
    )
  }
}

export default Navbar
